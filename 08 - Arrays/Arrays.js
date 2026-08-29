// ==========================================
// JAVASCRIPT ARRAYS
// ==========================================


// ==========================================
// 1. Creating an Array
// ==========================================

let fruits = ["Apple", "Mango", "Banana", "Orange"];

console.log(fruits);


// ==========================================
// 2. Accessing Array Elements
// ==========================================

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// ==========================================
// 3. Changing Array Elements
// ==========================================

fruits[1] = "Grapes";

console.log(fruits);


// ==========================================
// 4. Array Length
// ==========================================

console.log(fruits.length);


// ==========================================
// 5. Different Data Types
// ==========================================

let mixedArray = [
    "Blade",
    24,
    true,
    null,
    undefined
];

console.log(mixedArray);


// ==========================================
// 6. Array Constructor
// ==========================================

let numbers = new Array(10, 20, 30);

console.log(numbers);


// ==========================================
// 7. push()
// ==========================================

fruits.push("Pineapple");

console.log(fruits);


// ==========================================
// 8. pop()
// ==========================================

let lastFruit = fruits.pop();

console.log(lastFruit);
console.log(fruits);


// ==========================================
// 9. unshift()
// ==========================================

fruits.unshift("Strawberry");

console.log(fruits);


// ==========================================
// 10. shift()
// ==========================================

let firstFruit = fruits.shift();

console.log(firstFruit);
console.log(fruits);


// ==========================================
// 11. indexOf()
// ==========================================

console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Apple"));


// ==========================================
// 12. includes()
// ==========================================

console.log(fruits.includes("Mango"));
console.log(fruits.includes("Watermelon"));


// ==========================================
// 13. slice()
// ==========================================

let selectedFruits = fruits.slice(1, 3);

console.log(selectedFruits);
console.log(fruits);


// ==========================================
// 14. splice()
// ==========================================

let characters = [
    "Blade",
    "Ghost",
    "Soap",
    "Hornet"
];

characters.splice(1, 1);

console.log(characters);


// ==========================================
// 15. splice() - Adding Elements
// ==========================================

characters.splice(1, 0, "Knight");

console.log(characters);


// ==========================================
// 16. splice() - Replacing Elements
// ==========================================

characters.splice(2, 1, "Crystal");

console.log(characters);


// ==========================================
// 17. concat()
// ==========================================

let heroes = ["CJ", "Tommy"];
let agents = ["Michael", "Franklin"];

let charactersList = heroes.concat(agents);

console.log(charactersList);


// ==========================================
// 18. join()
// ==========================================

let names = ["Blade", "Ghost", "Soap"];

console.log(names.join(", "));
console.log(names.join(" - "));


// ==========================================
// 19. reverse()
// ==========================================

let numbers2 = [1, 2, 3, 4, 5];

numbers2.reverse();

console.log(numbers2);


// ==========================================
// 20. sort()
// ==========================================

let names2 = [
    "Trevor",
    "Blade",
    "Ghost",
    "CJ"
];

names2.sort();

console.log(names2);


// ==========================================
// 21. Sorting Numbers
// ==========================================

let numbers3 = [40, 5, 100, 25, 10];

numbers3.sort((a, b) => a - b);

console.log(numbers3);


// Descending Order

numbers3.sort((a, b) => b - a);

console.log(numbers3);


// ==========================================
// 22. forEach()
// ==========================================

let players = [
    "Blade",
    "Crystal",
    "Knight"
];

players.forEach(function (player) {
    console.log(player);
});


// ==========================================
// 23. forEach() with Index
// ==========================================

players.forEach(function (player, index) {

    console.log(index, player);

});


// ==========================================
// 24. map()
// ==========================================

let numbers4 = [1, 2, 3, 4, 5];

let doubled = numbers4.map(function (number) {
    return number * 2;
});

console.log(doubled);


// ==========================================
// 25. filter()
// ==========================================

let ages = [12, 18, 25, 15, 30, 16];

let adults = ages.filter(function (age) {
    return age >= 18;
});

console.log(adults);


// ==========================================
// 26. find()
// ==========================================

let scores = [20, 45, 70, 90, 30];

let result = scores.find(function (score) {
    return score > 60;
});

console.log(result);


// ==========================================
// 27. findIndex()
// ==========================================

let index = scores.findIndex(function (score) {
    return score > 60;
});

console.log(index);


// ==========================================
// 28. some()
// ==========================================

let marks = [35, 42, 55, 70];

let hasHighMark = marks.some(function (mark) {
    return mark >= 70;
});

console.log(hasHighMark);


// ==========================================
// 29. every()
// ==========================================

let passingMarks = [50, 60, 75, 80];

let everyonePassed = passingMarks.every(function (mark) {
    return mark >= 40;
});

console.log(everyonePassed);


// ==========================================
// 30. reduce()
// ==========================================

let prices = [100, 200, 300, 400];

let total = prices.reduce(function (sum, price) {
    return sum + price;
}, 0);

console.log(total);


// ==========================================
// 31. flat()
// ==========================================

let nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];

let flatArray = nestedArray.flat();

console.log(flatArray);


// ==========================================
// 32. flatMap()
// ==========================================

let numbers5 = [1, 2, 3];

let result2 = numbers5.flatMap(function (number) {
    return [number, number * 2];
});

console.log(result2);


// ==========================================
// 33. Array.isArray()
// ==========================================

console.log(Array.isArray(fruits));
console.log(Array.isArray("Hello"));


// ==========================================
// 34. Destructuring
// ==========================================

let characters2 = [
    "Blade",
    "Ghost",
    "Soap"
];

let [first, second, third] = characters2;

console.log(first);
console.log(second);
console.log(third);


// ==========================================
// 35. Rest with Array Destructuring
// ==========================================

let [leader, ...team] = characters2;

console.log(leader);
console.log(team);


// ==========================================
// 36. Spread Operator
// ==========================================

let original = [1, 2, 3];

let copy = [...original];

console.log(copy);


// ==========================================
// 37. Combining Arrays with Spread
// ==========================================

let teamA = ["Blade", "Ghost"];
let teamB = ["Soap", "MacTavish"];

let fullTeam = [...teamA, ...teamB];

console.log(fullTeam);


// ==========================================
// 38. Checking Array Length
// ==========================================

let gameCharacters = [
    "CJ",
    "Tommy",
    "Michael",
    "Franklin",
    "Trevor"
];

console.log("Number of characters:", gameCharacters.length);


// ==========================================
// 39. Practical Example
// ==========================================

let studentMarks = [85, 72, 91, 68, 95];

let totalMarks = studentMarks.reduce(function (total, mark) {
    return total + mark;
}, 0);

let average = totalMarks / studentMarks.length;

console.log("Total:", totalMarks);
console.log("Average:", average);