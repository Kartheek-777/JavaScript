// Type Casting

let value = "100";

let numberValue = Number(value);
let textValue = String(250);
let booleanValue = Boolean(1);

console.log(numberValue);         // 100
console.log(typeof numberValue);  // number

console.log(textValue);           // 250
console.log(typeof textValue);    // string

console.log(booleanValue);        // true

// Type Coercion

console.log("10" + 5);  // "105"
console.log("10" - 5);  // 5
console.log("10" * 2);  // 20
console.log(5 + true);  // 6
console.log(5 + false); // 5
console.log("Hello" + true); // "Hellotrue"

// Comments

// This is a single-line comment
console.log("Hello JavaScript");

/*
This is a multi-line comment.
It can span several lines.
*/
console.log("Day 1 completed");