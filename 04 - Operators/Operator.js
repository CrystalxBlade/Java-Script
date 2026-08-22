// ==========================================
// ARITHMETIC OPERATORS
// ==========================================

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// ==========================================
// INCREMENT & DECREMENT
// ==========================================

let x = 5;

console.log(++x); // 6
console.log(x++); // 6
console.log(x);   // 7

console.log(--x); // 6
console.log(x--); // 6
console.log(x);   // 5

// ==========================================
// ASSIGNMENT OPERATORS
// ==========================================

let score = 10;

score += 5;
score -= 2;
score *= 3;
score /= 2;
score %= 4;
score **= 2;

console.log(score);

// ==========================================
// COMPARISON OPERATORS
// ==========================================

console.log(10 == "10");
console.log(10 === "10");

console.log(10 != "10");
console.log(10 !== "10");

console.log(5 > 2);
console.log(5 < 2);

console.log(5 >= 5);
console.log(5 <= 4);

// ==========================================
// LOGICAL OPERATORS
// ==========================================

let age = 20;
let hasLicense = true;

console.log(age >= 18 && hasLicense);
console.log(age >= 18 || false);
console.log(!hasLicense);

// ==========================================
// STRING CONCATENATION
// ==========================================

let firstName = "Crystal";
let lastName = "Blade";

console.log(firstName + " " + lastName);

// ==========================================
// TERNARY OPERATOR
// ==========================================

let marks = 75;

let result = marks >= 40 ? "Pass" : "Fail";

console.log(result);

// ==========================================
// TYPE OPERATORS
// ==========================================

console.log(typeof "Hello");
console.log(typeof 100);

let arr = [1,2,3];

console.log(arr instanceof Array);

// ==========================================
// NULLISH COALESCING
// ==========================================

let username = null;

console.log(username ?? "Guest");

// ==========================================
// OPTIONAL CHAINING
// ==========================================

let student = {
    name: "Blade"
};

console.log(student.address?.city);

// ==========================================
// BITWISE OPERATORS
// ==========================================

console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
console.log(~5);

console.log(5 << 1);
console.log(5 >> 1);

// ==========================================
// COMMA OPERATOR
// ==========================================

let value = (2 + 3, 10 + 20);

console.log(value);

// ==========================================
// DELETE OPERATOR
// ==========================================

let person = {
    name: "Alex",
    age: 25
};

delete person.age;

console.log(person);

// ==========================================
// IN OPERATOR
// ==========================================

console.log("name" in person);

// ==========================================
// SPREAD OPERATOR
// ==========================================

let nums = [1,2,3];

let newNums = [...nums,4,5];

console.log(newNums);

// ==========================================
// REST PARAMETER
// ==========================================

function total(...numbers){

    console.log(numbers);

}

total(1,2,3,4,5);