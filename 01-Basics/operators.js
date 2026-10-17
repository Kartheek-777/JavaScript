let a = 20;
let b = 6;

// Arithmetic operators
console.log(a + b);  // 26
console.log(a - b);  // 14
console.log(a * b);  // 120
console.log(a / b);  // 3.333...
console.log(a % b);  // 2
console.log(a ** 2); // 400

// Comparison operators
console.log(a > b);   // true
console.log(a < b);   // false
console.log(a >= 20); // true

// Logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false


// Equality operators
console.log(5 == "5");    // true
console.log(5 === "5");   // false

console.log(10 != "10");  // false
console.log(10 !== "10"); // true

console.log(0 == false);  // true
console.log(0 === false); // false

// null_undefined operators

let firstName;
let middleName = null;

console.log(firstName);        // undefined
console.log(middleName);       // null

console.log(typeof firstName); // undefined
console.log(typeof middleName); // object

console.log(firstName == middleName);  // true
console.log(firstName === middleName); // false
