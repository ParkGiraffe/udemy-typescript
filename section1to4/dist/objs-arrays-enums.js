"use strict";
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role : [number, string];
//   // role : readonly [number, string];
// } = {
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "hi";
    Role["AUTHOR"] = "he";
})(Role || (Role = {}));
;
const person = {
    name: "Giraffe",
    age: 22,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
// person.role[1] = '1'
// person.role[1] = 1
// person.role = [1, '1'];
// person.role = [1, 1];
// person.role = [1, '1', 1];
// person.role.push(1)
console.log(person.name);
// console.log(person.nickname);
let anyNumbers = ["1", 2];
let favoriteActivites = ["Sports", "Game"];
for (const hobby of favoriteActivites) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.toFixed());
}
