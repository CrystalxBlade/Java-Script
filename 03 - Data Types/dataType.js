// ======================================
// JAVASCRIPT DATA TYPES
// ======================================

// JavaScript has 8 Data Types

// 1. String

let name = "Satish";
console.log(name);
console.log(typeof name);

// -----------------------------

// 2. Number

let age = 24;
let pi = 3.14;

console.log(age);
console.log(pi);
console.log(typeof age);

// -----------------------------

// 3. Boolean

let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(typeof isStudent);

// -----------------------------

// 4. Undefined

let city;

console.log(city);
console.log(typeof city);

// -----------------------------

// 5. Null

let phone = null;

console.log(phone);
console.log(typeof phone); // object (JavaScript bug)

// -----------------------------

// 6. BigInt

let population = 1234567890123456789012345678901234567890n;

console.log(population);
console.log(typeof population);

// -----------------------------

// 7. Symbol

let id = Symbol("id");

console.log(id);
console.log(typeof id);

// -----------------------------

// 8. Object

let student = {
    name: "Satish",
    age: 24,
    city: "Noida"
};

console.log(student);
console.log(typeof student);

// -----------------------------
// Arrays are Objects
// -----------------------------

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);
console.log(typeof fruits);

// -----------------------------
// Function Type
// -----------------------------

function greet() {
    console.log("Hello");
}

console.log(typeof greet);

// -----------------------------
// typeof Examples
// -----------------------------

console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof Symbol());
console.log(typeof 10n);

// -----------------------------
// Primitive Data Types
// -----------------------------

let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);

// -----------------------------
// Non Primitive Data Types
// -----------------------------

let person1 = {
    name: "Alex"
};

let person2 = person1;

person2.name = "John";

console.log(person1.name);
console.log(person2.name);