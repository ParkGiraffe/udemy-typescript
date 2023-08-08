const person: {
  name: string;
  age: number;
  hobbies: string[];
  role : [number, string];
  // role : readonly [number, string];
} = {
  name: "Giraffe",
  age: 22,
  hobbies: ["Sports", "Cooking"],
  role: [1, 'blogger'],
};


// person.role[1] = '1'
// person.role[1] = 1

// person.role = [1, '1'];
// person.role = [1, 1];
// person.role = [1, '1', 1];

// person.role.push(1)

console.log(person.name);
// console.log(person.nickname);


let anyNumbers: any[] = ["1", 2];

let favoriteActivites: string[] = ["Sports", "Game"];
for (const hobby of favoriteActivites) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.toFixed());
}
