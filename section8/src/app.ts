function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Createing person object");
  }
}

// const pers = new Person();
// console.log(pers);

@Logger("LOGGING - PET")
class Pet {
  name = "Giraffe";

  constructor() {
    console.log("Createing pet object");
  }
}
