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

countAndDescription("hello");
countAndDescription([1, 2]);

// countAndDescription({a: 'a'})
countAndDescription({ a: "a", length: 1 });

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value" + obj[key];
}

extractAndConvert({ name: "giraffe" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem<U extends T>(item: U) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");

// textStorage.addItem(1)

/*
const objectStorage = new DataStorage<object>();
objectStorage.addItem({name: 'Max'});
objectStorage.removeItem({name: 'Max'});

*/

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Park", "Giraffe"];
// names.push('a');
// names.pop()