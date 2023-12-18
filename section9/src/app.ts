// <template></template> : temlplate 내부 요소는 페이지를 불러오는 순간 즉시 그려지지는 않지만, 이후 JS(TS)를 사용해 인스턴스를 생성할 수 있는 HTML코드를 담을 방법을 제공한다. -> 템플릿은 콘텐츠 조각을 나중에 사용하기 위해 담아놓는 컨테이너로 생각해라.

// 이 템플릿을 TS를 통해 렌더링한다. 이 과정을 class를 이용해서 구현한다.

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

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

    this.attach();
  }

  // 템플릿을 <div id='app'></div>에 추가하는 함수
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
