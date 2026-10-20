const cube = function (num){
    return num ** 3;
}

console.log(cube(3)) // 27
console.log(cube(5)) //125

//----------- Arrow Functions-------------//

// 1. Add two numbers

const add = (a, b) =>{
    return a + b;
};

console.log(add(3, 4)) // 7

// 2. Convert Celsius to Fahrenheit

const CelsiustoFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};

console.log(CelsiustoFahrenheit(32)) // 89.6
console.log(CelsiustoFahrenheit(25)) // 77

// 3. Check whether a number is positive

const ispositive = (num) => {
    return num > 0;
};

console.log(ispositive(6)) // true
console.log(ispositive(-6)) // false

// 4. Calculate the area of a rectangle

const AreaofRect = (length, width) => {
    return length * width;
};

console.log(AreaofRect(12, 8));5