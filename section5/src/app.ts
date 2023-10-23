interface Named {
  readonly name: string;
}

interface Age {
  readonly age: number;
}

interface Greetable extends Named, Age {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

const user1: Greetable = new Person("giraffe");
// user1.name = 'giraffe'
