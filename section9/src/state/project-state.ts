namespace App {
  type Listener<T> = (items: T[]) => void;

  class State<T> {
    protected listeners: Listener<T>[] = []; // 리스너 함수가 담긴 배열 <- state가 변경되면 UI가 변경될 수 있도록 계속 구독하는 리스너 함수 모음

    addListener(listenerFn: Listener<T>) {
      this.listeners.push(listenerFn);
    }
  }

  // Project State (with Singletone Class)
  export class ProjectState extends State<Proejct> {
    private projects: Proejct[] = [];
    private static instance: ProjectState;

    private constructor() {
      super();
    }

    static getInstance() {
      if (this.instance) return this.instance;
      this.instance = new ProjectState();
      return this.instance;
    }

    addProject(title: string, desc: string, numOfPeople: number) {
      const newProject = new Proejct(
        Math.random().toString(),
        title,
        desc,
        numOfPeople,
        ProjectStatus.Active
      );

      this.projects.push(newProject);
      this.updateListeners();
    }

    moveProject(projectId: string, newStatus: ProjectStatus) {
      const proejct = this.projects.find((prj) => prj.id === projectId);

      if (proejct && proejct.status !== newStatus) {
        proejct.status = newStatus;
        this.updateListeners();
      }
    }

    private updateListeners() {
      for (const listenerFn of this.listeners) {
        // 프로젝트가 추가되면, 리스너함수를 작동시켜 UI가 모두 갱신되게 끔 한다.
        listenerFn(this.projects.slice()); // slice()를 해주는 이유 : 원본을 넣어주는 게 아니라, 복사본을 넣어줌으로써, 리스너함수에서 원본 배열에 수정/조작/손상이 안 가게 끔 한다. 만약 원본 참조값을 넘겨주면, 리스너함수에서 알 수 없는 오류가 발생할 수 있다.
      }
    }
  }

  export const projectState = ProjectState.getInstance();
}
