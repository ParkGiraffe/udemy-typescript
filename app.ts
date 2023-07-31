const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Giraffe",
  age: 22,
  hobbies: ["Sports", "Cooking"],
};

console.log(person.name);
// console.log(person.nickname);


let anyNumbers: any[] = ["1", 2];

let favoriteActivites: string[] = ["Sports", "Game"];
for (const hobby of favoriteActivites) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.toFixed());
}
