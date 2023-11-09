// const names: Array = [];

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }


function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ['game'] }, { age: 30 });

mergedObj.age;
mergedObj.hobbies;