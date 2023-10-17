interface Person {
  name: string;
  age: Number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "giraffe",
  age: 101,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
