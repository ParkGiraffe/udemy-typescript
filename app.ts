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


let favoriteActivites: string[];
favoriteActivites = ["Sports", "Game"];

for (const hobby of favoriteActivites) {
  console.log(hobby.toUpperCase);
}
