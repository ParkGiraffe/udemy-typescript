// const names: Array = [];

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["game"] }, { age: 30 });

mergedObj.age;
mergedObj.hobbies;


interface Lengthy {
  length: number;
}


function countAndDescription<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }

  return [element, descriptionText];
}


countAndDescription('hello');
countAndDescription([1, 2]);

// countAndDescription({a: 'a'})


countAndDescription({a: 'a', length: 1})