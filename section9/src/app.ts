// <template></template> : temlplate 내부 요소는 페이지를 불러오는 순간 즉시 그려지지는 않지만, 이후 JS(TS)를 사용해 인스턴스를 생성할 수 있는 HTML코드를 담을 방법을 제공한다. -> 템플릿은 콘텐츠 조각을 나중에 사용하기 위해 담아놓는 컨테이너로 생각해라.

// 이 템플릿을 TS를 통해 렌더링한다. 이 과정을 class를 이용해서 구현한다.

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

  // form이 submit 될 때 작동할 핸들러 함수F
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  // form이 submit 될 때 작동할 핸들러 함수를 form과 연결
  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  // 템플릿을 <div id='app'></div>에 추가하는 함수
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
