
// ============================================================
// 23 - JAVASCRIPT MODULES
// ============================================================


// ============================================================
// 1. Importing Named Exports
// ============================================================

import {
    add,
    subtract,
    multiply,
    divide,
    gameBonus,
    square,
    cube
} from "./mathUtils.js";

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

console.log(gameBonus);

console.log(square(4));
console.log(cube(3));


// ============================================================
// 2. Importing a Default Export
// ============================================================

import greetPlayer from "./message.js";

console.log(greetPlayer("Blade"));


// ============================================================
// 3. Importing an Object and a Class
// ============================================================

import { player, Character } from "./player.js";

console.log(player.name);
console.log(player.level);
console.log(player.score);

const knight = new Character("Knight", 100);

console.log(knight.introduce());

knight.takeDamage(25);

console.log(knight.health);


// ============================================================
// 4. Renaming a Named Import
// ============================================================

import { add as calculateSum } from "./mathUtils.js";

console.log(calculateSum(20, 30));


// ============================================================
// 5. Importing Everything as a Namespace
// ============================================================

import * as MathUtils from "./mathUtils.js";

console.log(MathUtils.add(5, 7));
console.log(MathUtils.square(6));
console.log(MathUtils.gameBonus);


// ============================================================
// 6. Importing a Default Export with a Named Export
// ============================================================

// You can import both in one statement:
//
// import greetPlayer, { add, subtract } from "./mathUtils.js";
//
// This exact example would not work because mathUtils.js
// does not have a default export.
//
// Use this valid example instead:
//
// import greetPlayer, { add } from "./combinedExample.js";
//
// The combinedExample.js file would need to export both
// a default function and a named function.


// ============================================================
// 7. Button: Named Imports
// ============================================================

const namedButton = document.getElementById("namedButton");
const namedOutput = document.getElementById("namedOutput");

namedButton.addEventListener("click", () => {
    namedOutput.textContent =
        `Add: ${add(10, 5)}, Multiply: ${multiply(10, 5)}`;
});


// ============================================================
// 8. Button: Default Import
// ============================================================

const defaultButton = document.getElementById("defaultButton");
const defaultOutput = document.getElementById("defaultOutput");

defaultButton.addEventListener("click", () => {
    defaultOutput.textContent = greetPlayer("Crystal");
});


// ============================================================
// 9. Button: Calculations
// ============================================================

const calculateButton = document.getElementById("calculateButton");
const calculateOutput = document.getElementById("calculateOutput");

calculateButton.addEventListener("click", () => {
    const result = add(100, gameBonus);

    calculateOutput.textContent =
        `Base score: 100, Bonus: ${gameBonus}, Total: ${result}`;
});


// ============================================================
// 10. Button: Player Object
// ============================================================

const objectButton = document.getElementById("objectButton");
const objectOutput = document.getElementById("objectOutput");

objectButton.addEventListener("click", () => {
    objectOutput.textContent = JSON.stringify(player, null, 2);
});


// ============================================================
// 11. Handling Errors from Imported Functions
// ============================================================

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log(error.message);
}


// ============================================================
// END OF MODULES
// ============================================================