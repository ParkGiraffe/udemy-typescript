let uni: number | string | boolean;
let lit: "as" | "k" | 5 | true;

type addable = number | string;
type resultType = "as-number" | "as-string";

lit = "as";
// lit = 4

function add(n1: addable, n2: addable, resultType: resultType) {
  let result: any;

  if (
    typeof n1 === "number" &&
    typeof n2 === "number" &&
    resultType === "as-number"
  ) {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  return result;
}

// add(0, 1, 'as-type')

function printResult(num: number): void {
  console.log("Result: " + num);
  // return;
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: 'Hi there!'});
}
 
sendRequest('Send this!', (response) => { 
  console.log(response);
  return true;
 });