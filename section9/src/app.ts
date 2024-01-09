// Project State (with Singletone Class)
class ProjectState {
  private listeners: any[] = []; // 리스너 함수가 담긴 배열 <- state가 변경되면 UI가 변경될 수 있도록 계속 구독하는 리스너 함수 모음
  private projects: any[] = [];
  private static instance: ProjectState;

  private constructor() {}

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new ProjectState();
    return this.instance;
  }

  addListener(listenerFn: Function) {
    this.listeners.push(listenerFn);
  }

  addProject(title: string, desc: string, numOfPeople: number) {
    const newProject = {
      id: Math.random().toString(),
      title: title,
      description: desc,
      people: numOfPeople,
    };

    this.projects.push(newProject);
    for (const listenerFn of this.listeners) {
      // 프로젝트가 추가되면, 리스너함수를 작동시켜 UI가 모두 갱신되게 끔 한다.
      listenerFn(this.projects.slice()); // slice()를 해주는 이유 : 원본을 넣어주는 게 아니라, 복사본을 넣어줌으로써, 리스너함수에서 원본 배열에 수정/조작/손상이 안 가게 끔 한다. 만약 원본 참조값을 넘겨주면, 리스너함수에서 알 수 없는 오류가 발생할 수 있다.
    }
  }
}

const projectState = ProjectState.getInstance();

// Validation
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable) {
  let isValid = true;

  // 비구조화를 이용해서 좀 더 보기 편하게 수정
  const { value, required, minLength, maxLength, min, max } = validatableInput;

  if (required) {
    isValid = isValid && value.toString().trim().length !== 0;
  }

  if (minLength != null && typeof value === "string") {
    isValid = isValid && value.length >= minLength;
  }

  if (maxLength != null && typeof value === "string") {
    isValid = isValid && value.length <= maxLength;
  }

  if (min != null && typeof value === "number") {
    isValid = isValid && value >= min;
  }

  if (max != null && typeof value === "number") {
    isValid = isValid && value <= max;
  }

  return isValid;
}

// <template></template> : temlplate 내부 요소는 페이지를 불러오는 순간 즉시 그려지지는 않지만, 이후 JS(TS)를 사용해 인스턴스를 생성할 수 있는 HTML코드를 담을 방법을 제공한다. -> 템플릿은 콘텐츠 조각을 나중에 사용하기 위해 담아놓는 컨테이너로 생각해라.

// 이 템플릿을 TS를 통해 렌더링한다. 이 과정을 class를 이용해서 구현한다.

// autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjDescriptor;
}

class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  assignProjects: any[];

  constructor(private type: "active" | "finished") {
    this.templateElement = document.getElementById(
      "project-list"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.assignProjects = [];

    // <template></template>의 첫 번째 하위 element인 <form></form>을 가져옴. (이걸 app div에 넣어줘야 함)
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`; // html element의 id도 여기서 지정해줄 수 있다.

    projectState.addListener((projects: any[]) => {
      this.assignProjects = projects;
      this.renderList();
    });

    this.attach();
    this.renderContent();
  }

  private renderList() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    ) as HTMLUListElement;

    for (const prjItem of this.assignProjects) {
      const listItem = document.createElement("li");
      listItem.textContent = prjItem.title;
      listEl.appendChild(listItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector(
      "h2"
    )!.textContent = `${this.type.toUpperCase()} PROJECTS`;
  }

  // 템플릿을 <div id='app'></div>에 추가하는 함수
  private attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;

    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    // <template></template>의 첫 번째 하위 element인 <form></form>을 가져옴. (이걸 app div에 넣어줘야 함)
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input"; // html element의 id도 여기서 지정해줄 수 있다.

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement; // element(form) 안에서 id가 title인 input element를 찾는다.
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private gatherUserInput(): [string, string, number] | void {
    // 튜플 형태로 저장, 만약 입력값이 유효성에 어긋나면 void
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      console.log(enteredTitle, enteredDescription, enteredPeople);
      console.log(enteredTitle, enteredDescription, enteredPeople);
      alert("Invalid input, please try again!");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInput() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  // form이 submit 될 때 작동할 핸들러 함수
  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      // tuple은 TS만 있는 데이터타입이고, JS에서는 array로 작동하기에 isArray()를 사용한다
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
      this.clearInput();
    }
  }

  // form이 submit 될 때 작동할 핸들러 함수를 form과 연결
  private configure() {
    // this.element.addEventListener("submit", this.submitHandler.bind(this));
    this.element.addEventListener("submit", this.submitHandler);
  }

  // 템플릿을 <div id='app'></div>에 추가하는 함수
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
