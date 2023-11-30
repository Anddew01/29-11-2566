/*บรรทัด *, **, *** และ **** ให้ผลลัพธ์เป็นอะไร เพราะอะไร*/
let message = 'Welcome to Thailand';
function logMessage(message) {
 message = 'Hello everybody';
 console.log(message); // *
}
logMessage(message);
console.log(message); // **
//Hello everybody
//Welcome to Thailand
let name = 'John';
function sayHi(input) {
 console.log(name); // ***
 name = input;
}
sayHi();
console.log(name); // ****
//John
//undefined