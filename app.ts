let uni: number | string | boolean;
let lit: "as" | "k" | 5 | true;

lit = 'as';
lit = 4

function add(
  n1: number | string,
  n2: number | string,
  resultType: "as-number" | "as-string"
) {
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


add(0, 1, 'as-type')
