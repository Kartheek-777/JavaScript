// 1. Addtion of two Numbers.

function Adding_two_nums(a, b){
    return a + b;
}

// 2. Check wheather a num is even.

function even_check(n){
    return n % 2 === 0;
}

// 3. Find the square of a number.

function finding_squareofNum(n){
    return n ** 2;
}

// 4. Return the largest of two numbers.
 
 function Largest_of_two_nums(a, b){
    return a > b ? a : b;
 }

 console.log(Adding_two_nums(15, 10));        // 25
console.log(even_check(8));                  // true
console.log(even_check(5));                  // false
console.log(finding_squareofNum(4));         // 16
console.log(Largest_of_two_nums(4, 6));