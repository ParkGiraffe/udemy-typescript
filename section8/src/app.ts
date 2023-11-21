function Logger(constructor: Function) {
  console.log("Logging");
  console.log(constructor);
}

class Person {
  name = "giraffe";

  constructor() {
    console.log("Createing person object");
  }
}

const pers = new Person();
