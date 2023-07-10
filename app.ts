const person = {
  name: "Giraffe",
  age: 22,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivites: string[];
favoriteActivites = ["Sports"];

for (const hobby of favoriteActivites) {
  console.log(hobby.toUpperCase);
}

console.log(person.name);

// 중첩된 개체 및 타입
const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

/*
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
*/
