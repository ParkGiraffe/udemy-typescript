let uni: number | string | boolean;
uni = 1;
uni = "1";
uni = false;

function add(n1: number | string, n2: number | string) {
  let result: any;

  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  return result;
}
