function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
// number1 = '5'; // 한 번 지정된 타입은 바꿀 수 없다.

const number2 = 2.8; // 굳이 타입형을 명시하지 않아도, 타입스크립트 알아서 옆에 쓰인 value 값을 보고 타입 추론을 한다.
const printResult = true;
let resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
