function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('LOGGING - PERSON')
class Person {
  name = "Max";

  constructor() {
    console.log("Createing person object");
  }
}

// const pers = new Person();
// console.log(pers);


@Logger('LOGGING - PET')
class Pet {
  name = "Giraffe";

  constructor() {
    console.log("Createing pet object");
  }
}
