// ==========================================
// 11 - DATE AND MATH
// ==========================================


// ==========================================
// DATE OBJECT
// ==========================================


// ------------------------------------------
// 1. Creating the Current Date
// ------------------------------------------

let currentDate = new Date();

console.log(currentDate);


// ------------------------------------------
// 2. Date as a String
// ------------------------------------------

let dateString = new Date("2026-09-04");

console.log(dateString);


// ------------------------------------------
// 3. Specific Date and Time
// ------------------------------------------

let specificDate = new Date(
    2026,
    8,
    4,
    19,
    30,
    15
);

console.log(specificDate);


// Important:
// Month starts from 0.
// January = 0
// February = 1
// September = 8


// ------------------------------------------
// 4. Date Components
// ------------------------------------------

let date = new Date();

console.log("Year:", date.getFullYear());
console.log("Month:", date.getMonth());
console.log("Date:", date.getDate());
console.log("Day:", date.getDay());
console.log("Hours:", date.getHours());
console.log("Minutes:", date.getMinutes());
console.log("Seconds:", date.getSeconds());
console.log("Milliseconds:", date.getMilliseconds());


// ------------------------------------------
// 5. getMonth()
// ------------------------------------------

let month = date.getMonth();

console.log(month);

// January = 0
// December = 11


// ------------------------------------------
// 6. getDay()
// ------------------------------------------

let day = date.getDay();

console.log(day);

// Sunday = 0
// Monday = 1
// Saturday = 6


// ------------------------------------------
// 7. UTC Date Methods
// ------------------------------------------

console.log("UTC Year:", date.getUTCFullYear());
console.log("UTC Month:", date.getUTCMonth());
console.log("UTC Date:", date.getUTCDate());
console.log("UTC Hours:", date.getUTCHours());


// ------------------------------------------
// 8. Date Formatting
// ------------------------------------------

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toUTCString());


// ------------------------------------------
// 9. Changing Date Components
// ------------------------------------------

let birthday = new Date();

birthday.setFullYear(2000);
birthday.setMonth(5);
birthday.setDate(15);

console.log(birthday);


// ------------------------------------------
// 10. Changing Time Components
// ------------------------------------------

let time = new Date();

time.setHours(10);
time.setMinutes(30);
time.setSeconds(45);

console.log(time);


// ------------------------------------------
// 11. Comparing Dates
// ------------------------------------------

let firstDate = new Date("2026-01-01");
let secondDate = new Date("2026-12-31");

console.log(firstDate < secondDate);
console.log(firstDate > secondDate);
console.log(firstDate.getTime() === secondDate.getTime());


// ------------------------------------------
// 12. getTime()
// ------------------------------------------

let timestamp = new Date();

console.log(timestamp.getTime());


// getTime() returns milliseconds
// since January 1, 1970 UTC.


// ------------------------------------------
// 13. Date Difference
// ------------------------------------------

let startDate = new Date("2026-01-01");
let endDate = new Date("2026-01-10");

let difference = endDate - startDate;

console.log("Milliseconds:", difference);

let days = difference / (1000 * 60 * 60 * 24);

console.log("Days:", days);


// ------------------------------------------
// 14. Date Validation
// ------------------------------------------

let validDate = new Date("2026-09-04");
let invalidDate = new Date("wrong date");

console.log(validDate);
console.log(invalidDate);

console.log(isNaN(validDate.getTime()));
console.log(isNaN(invalidDate.getTime()));


// ------------------------------------------
// 15. Practical Example: Current Year
// ------------------------------------------

let currentYear = new Date().getFullYear();

console.log(`The current year is ${currentYear}`);


// ------------------------------------------
// 16. Practical Example: Age Calculation
// ------------------------------------------

let birthYear = 2002;
let yearNow = new Date().getFullYear();

let age = yearNow - birthYear;

console.log(`Age: ${age}`);


// ------------------------------------------
// 17. Practical Example: Digital Clock
// ------------------------------------------

let clockDate = new Date();

let hours = clockDate.getHours();
let minutes = clockDate.getMinutes();
let seconds = clockDate.getSeconds();

console.log(`${hours}:${minutes}:${seconds}`);


// ------------------------------------------
// 18. Padding Time Values
// ------------------------------------------

let paddedHours = String(hours).padStart(2, "0");
let paddedMinutes = String(minutes).padStart(2, "0");
let paddedSeconds = String(seconds).padStart(2, "0");

console.log(`${paddedHours}:${paddedMinutes}:${paddedSeconds}`);


// ==========================================
// MATH OBJECT
// ==========================================


// ------------------------------------------
// 19. Math Constants
// ------------------------------------------

console.log(Math.PI);
console.log(Math.E);


// ------------------------------------------
// 20. Math.round()
// ------------------------------------------

console.log(Math.round(4.4));
console.log(Math.round(4.5));
console.log(Math.round(4.8));


// ------------------------------------------
// 21. Math.floor()
// ------------------------------------------

console.log(Math.floor(4.9));
console.log(Math.floor(4.1));


// ------------------------------------------
// 22. Math.ceil()
// ------------------------------------------

console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));


// ------------------------------------------
// 23. Math.trunc()
// ------------------------------------------

console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.9));


// ------------------------------------------
// 24. Math.abs()
// ------------------------------------------

console.log(Math.abs(-10));
console.log(Math.abs(10));


// ------------------------------------------
// 25. Math.pow()
// ------------------------------------------

console.log(Math.pow(2, 3));


// Modern exponent operator
console.log(2 ** 3);


// ------------------------------------------
// 26. Math.sqrt()
// ------------------------------------------

console.log(Math.sqrt(25));
console.log(Math.sqrt(81));


// ------------------------------------------
// 27. Math.cbrt()
// ------------------------------------------

console.log(Math.cbrt(27));


// ------------------------------------------
// 28. Math.min()
// ------------------------------------------

console.log(Math.min(10, 5, 20, 3));


// ------------------------------------------
// 29. Math.max()
// ------------------------------------------

console.log(Math.max(10, 5, 20, 3));


// ------------------------------------------
// 30. Math.random()
// ------------------------------------------

let randomNumber = Math.random();

console.log(randomNumber);


// Math.random() returns a number
// from 0 inclusive to 1 exclusive.


// ------------------------------------------
// 31. Random Number from 0 to 9
// ------------------------------------------

let randomDigit = Math.floor(Math.random() * 10);

console.log(randomDigit);


// ------------------------------------------
// 32. Random Number from 1 to 10
// ------------------------------------------

let randomTen = Math.floor(Math.random() * 10) + 1;

console.log(randomTen);


// ------------------------------------------
// 33. Random Number in a Range
// ------------------------------------------

let min = 10;
let max = 20;

let randomRange =
    Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomRange);


// ------------------------------------------
// 34. Random Array Element
// ------------------------------------------

let players = [
    "Blade",
    "Crystal",
    "Knight",
    "Hornet"
];

let randomIndex = Math.floor(Math.random() * players.length);

console.log(players[randomIndex]);


// ------------------------------------------
// 35. Math.sign()
// ------------------------------------------

console.log(Math.sign(10));
console.log(Math.sign(-10));
console.log(Math.sign(0));


// ------------------------------------------
// 36. Math.log()
// ------------------------------------------

console.log(Math.log(10));


// ------------------------------------------
// 37. Math.sin() and Math.cos()
// ------------------------------------------

console.log(Math.sin(0));
console.log(Math.cos(0));


// ------------------------------------------
// 38. Degrees to Radians
// ------------------------------------------

let degrees = 90;

let radians = degrees * Math.PI / 180;

console.log(radians);


// ------------------------------------------
// 39. Radians to Degrees
// ------------------------------------------

let radiansValue = Math.PI;

let degreesValue = radiansValue * 180 / Math.PI;

console.log(degreesValue);


// ------------------------------------------
// 40. Practical Example: Random Dice Roll
// ------------------------------------------

let dice = Math.floor(Math.random() * 6) + 1;

console.log(`Dice rolled: ${dice}`);


// ------------------------------------------
// 41. Practical Example: Random Password Digit
// ------------------------------------------

let passwordDigit = Math.floor(Math.random() * 10);

console.log(`Random digit: ${passwordDigit}`);


// ------------------------------------------
// 42. Practical Example: Circle Area
// ------------------------------------------

let radius = 5;

let area = Math.PI * radius ** 2;

console.log(`Circle area: ${area}`);


// ------------------------------------------
// 43. Practical Example: Distance Between Dates
// ------------------------------------------

let date1 = new Date("2026-09-01");
let date2 = new Date("2026-09-04");

let millisecondsDifference = Math.abs(date2 - date1);

let daysDifference =
    millisecondsDifference / (1000 * 60 * 60 * 24);

console.log(`Difference: ${daysDifference} days`);


// ------------------------------------------
// END OF DATE AND MATH
// ------------------------------------------