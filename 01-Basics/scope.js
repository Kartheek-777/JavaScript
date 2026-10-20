// Global scope — available everywhere
var x = 10;

function scopeTest() {
    // Function scope — only inside this function
    var y = 15;
    console.log("Function y:", y);
}

{
    // Block scope — only inside these braces
    let z = 20;
    console.log("Block z:", z);
}

console.log("Global x:", x);
scopeTest();

// These two would throw ReferenceError if uncommented:
// console.log(y); // y is not defined (function scoped)
// console.log(z); // z is not defined (block scoped)
