class Department {
  protected employees: string[] = [];
  static fiscalYear = 2020;

  static addEmployee (name: string) {
    return {name : name}
  }

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  // 타입스크립트에서만 사용하는 특수한 매개변수로, 메소드에서 this 키워드를 매개변수로 전달한다. this의 타입은 원형이 되는 클래스를 지정해준다.
  // 그렇다고 this에 꼭 무언가를 전달할 필요는 없고, this가 무엇을 참조해야 하는 지 힌트를 알려주는 역할을 한다.
  describe(this: Department) {
    console.log(`Department (${this.id}) : ${this.name}`);
  }

  addEmployees(newMember: string) {
    // validation (유효성 검사 코드)
    // this.id = 'd1'
    this.employees.push(newMember);
  }

  printEmployeeInformation() {
    console.group(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  addEmployees(newMember: string) {
    if (newMember === "giraffe") return;
    this.employees.push(newMember);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new Department("Accounting");

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe();

// this 매개변수에 실제로 값을 전달해주지 않아도 함수가 잘 실행된다.
// accounting.describe();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();

// --- 5-62 ---

const accounting = new AccountingDepartment("d1", []);
// accounting.employees.push("giraffe");
// accounting.employees.push("ah");
// accounting.employees[0] = "park";
// accounting.addEmployees("hello");
// accounting.name = "giraffe";
accounting.addReport("hello");
accounting.printReports();

accounting.mostRecentReport = "Year End Report"; // set
accounting.addEmployees("Something went wrong...");
console.log(accounting.mostRecentReport); // get


console.log(Math.PI); // output : 3.141592~
console.log(Math.abs(-3.7)); // output : 3.7

console.log(Department.fiscalYear); // output : 2020
// console.log(accounting.fiscalYear)