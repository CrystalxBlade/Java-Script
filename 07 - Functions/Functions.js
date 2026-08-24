// ==========================================
// JAVASCRIPT FUNCTIONS
// ==========================================


// ==========================================
// 1. Function Declaration
// ==========================================

function greet() {
    console.log("Hello, World!");
}


// ==========================================
// 2. Calling a Function
// ==========================================

greet();
greet();


// ==========================================
// 3. Function with Parameters
// ==========================================

function greetUser(name) {
    console.log("Hello, " + name);
}

greetUser("Hornet");
greetUser("Knight");


// ==========================================
// 4. Multiple Parameters
// ==========================================

function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(50, 30);


// ==========================================
// 5. Parameters vs Arguments
// ==========================================

// Parameters
function introduce(name, age) {
    console.log(name, age);
}

// Arguments
introduce("Tommy", 24);


// ==========================================
// 6. return Statement
// ==========================================

function sum(a, b) {
    return a + b;
}

let result = sum(10, 20);

console.log("Result:", result);


// ==========================================
// 7. Returning Different Values
// ==========================================

function square(number) {
    return number * number;
}

console.log(square(5));


// ==========================================
// 8. Function Without return
// ==========================================

function sayHello() {
    console.log("Hello");
}

let value = sayHello();

console.log(value); // undefined


// ==========================================
// 9. Default Parameters
// ==========================================

function welcome(name = "Guest") {
    console.log("Welcome, " + name);
}

welcome("Knight");
welcome();


// ==========================================
// 10. Multiple Default Parameters
// ==========================================

function createUser(name = "Guest", age = 18) {
    console.log(name, age);
}

createUser();
createUser("Franklin");
createUser("Michael", 25);


// ==========================================
// 11. Function Expression
// ==========================================

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(5, 4));


// ==========================================
// 12. Arrow Function
// ==========================================

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(20, 5));


// ==========================================
// 13. Arrow Function - Short Syntax
// ==========================================

const divide = (a, b) => a / b;

console.log(divide(20, 4));


// ==========================================
// 14. Arrow Function with One Parameter
// ==========================================

const double = number => number * 2;

console.log(double(10));


// ==========================================
// 15. Arrow Function with No Parameters
// ==========================================

const message = () => {
    console.log("Hello from Arrow Function!");
};

message();


// ==========================================
// 16. Rest Parameters
// ==========================================

function calculateTotal(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(calculateTotal(10, 20, 30));
console.log(calculateTotal(5, 10, 15, 20));


// ==========================================
// 17. Function Scope
// ==========================================

function testScope() {

    let message = "Inside Function";

    console.log(message);
}

testScope();

// console.log(message); // Error


// ==========================================
// 18. Global Variable
// ==========================================

let username = "Blade";

function showUsername() {
    console.log(username);
}

showUsername();


// ==========================================
// 19. Function Calling Another Function
// ==========================================

function start() {
    console.log("Starting...");
    sayWelcome();
}

function sayWelcome() {
    console.log("Welcome!");
}

start();


// ==========================================
// 20. Callback Function
// ==========================================

function processUser(name, callback) {

    console.log("Processing:", name);

    callback();
}

function completed() {
    console.log("Completed!");
}

processUser("Crystal", completed);


// ==========================================
// 21. Anonymous Function
// ==========================================

setTimeout(function () {
    console.log("This is an anonymous function.");
}, 1000);


// ==========================================
// 22. Arrow Function as Callback
// ==========================================

setTimeout(() => {
    console.log("Arrow function callback.");
}, 2000);


// ==========================================
// 23. Practical Example
// ==========================================

function calculateGrade(marks) {

    if (marks >= 90) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculateGrade(95));
console.log(calculateGrade(72));
console.log(calculateGrade(35));