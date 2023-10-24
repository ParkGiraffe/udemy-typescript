type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
// 교차타입 - '&'를 이용해서 타입 두 개를 섞을 수 있다. interface의 상속과 유사. 하지만 인터페이스와는 다르게 객체가 아닌 타입도 섞을 수 있다.

const e1: ElevatedEmployee = {
  name: "griaffe",
  privileges: ["create-server"],
  startDate: new Date(),
};


type Combinable = string | number | boolean;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;
// 유니온 타입끼리 교차시켜서, 교집함인 타입을 찾아낸다.