interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
}

interface Age {
  readonly age: number;
}

interface Greetable extends Named, Age {
  greet?(phrase?: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase?: string): void {
    if (this.name && phrase) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

const user1: Person = new Person();
user1.greet();
