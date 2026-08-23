// ==========================================
// JAVASCRIPT CONDITIONALS
// ==========================================


// ==========================================
// 1. if STATEMENT
// ==========================================

let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}


// ==========================================
// 2. if...else
// ==========================================

let temperature = 25;

if (temperature > 30) {
    console.log("It is hot.");
} else {
    console.log("It is not too hot.");
}


// ==========================================
// 3. if...else if...else
// ==========================================

let marks = 75;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 50) {
    console.log("Grade D");
} else {
    console.log("Fail");
}


// ==========================================
// 4. Multiple Conditions
// ==========================================

let userAge = 22;
let hasID = true;

if (userAge >= 18 && hasID) {
    console.log("Entry allowed.");
} else {
    console.log("Entry denied.");
}


// ==========================================
// 5. Nested if
// ==========================================

let username = "Satish";
let passwordCorrect = true;

if (username === "Satish") {

    if (passwordCorrect) {
        console.log("Login successful.");
    } else {
        console.log("Incorrect password.");
    }

} else {
    console.log("User not found.");
}


// ==========================================
// 6. Ternary Operator
// ==========================================

let score = 80;

let result = score >= 40 ? "Pass" : "Fail";

console.log(result);


// ==========================================
// 7. Nested Ternary
// ==========================================

let number = 10;

let type = number > 0
    ? "Positive"
    : number < 0
        ? "Negative"
        : "Zero";

console.log(type);


// ==========================================
// 8. switch STATEMENT
// ==========================================

let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day.");
}


// ==========================================
// 9. switch with Strings
// ==========================================

let role = "admin";

switch (role) {

    case "admin":
        console.log("Full access.");
        break;

    case "editor":
        console.log("Edit access.");
        break;

    case "user":
        console.log("Limited access.");
        break;

    default:
        console.log("Unknown role.");
}


// ==========================================
// 10. Truthy and Falsy Values
// ==========================================

let username2 = "";

if (username2) {
    console.log("Username exists.");
} else {
    console.log("Username is empty.");
}


// ==========================================
// 11. Falsy Values
// ==========================================

let value = 0;

if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}


// ==========================================
// 12. Nullish Coalescing
// ==========================================

let user = null;

let displayName = user ?? "Guest";

console.log(displayName);


// ==========================================
// 13. Real-World Example
// ==========================================

let balance = 5000;
let withdrawal = 3000;

if (withdrawal <= balance) {

    balance -= withdrawal;

    console.log("Withdrawal successful.");
    console.log("Remaining balance:", balance);

} else {

    console.log("Insufficient balance.");

}