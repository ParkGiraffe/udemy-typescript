"use strict";
let uni;
let lit;
lit = "as";
// lit = 4
function add(n1, n2, resultType) {
    let result;
    if (typeof n1 === "number" &&
        typeof n2 === "number" &&
        resultType === "as-number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
// add(0, 1, 'as-type')
function printResult(num) {
    console.log("Result: " + num);
    // return;
}
function addAndHandle(n1, n2, callback) {
    const result = n1 + n2;
    callback(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
