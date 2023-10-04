class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  // 타입스크립트에서만 사용하는 특수한 매개변수로, 메소드에서 this 키워드를 매개변수로 전달한다. this의 타입은 원형이 되는 클래스를 지정해준다.
  // 그렇다고 this에 꼭 무언가를 전달할 필요는 없고, this가 무엇을 참조해야 하는 지 힌트를 알려주는 역할을 한다.
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

// this 매개변수에 실제로 값을 전달해주지 않아도 함수가 잘 실행된다.
accounting.describe();

const accountingCopy = { name: "DUMMY", describe: accounting.describe };
accountingCopy.describe();
