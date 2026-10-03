// ============================================================
// 18 - ES6 (ECMAScript 2015)
// ============================================================


// ============================================================
// 1. let
// ============================================================

// let allows us to create variables that can be changed.

let score = 100;

console.log(score);

score = 150;

console.log(score);


// ============================================================
// 2. const
// ============================================================

// const creates a variable that cannot be reassigned.

const playerName = "Blade";

console.log(playerName);

// This would cause an error:
// playerName = "Crystal";


// ============================================================
// 3. Block Scope
// ============================================================

// let and const are block scoped.

if (true) {

    let enemy = "Hornet";
    const level = 5;

    console.log(enemy);
    console.log(level);
}

// These would cause errors because they exist only
// inside the if block.

// console.log(enemy);
// console.log(level);


// ============================================================
// 4. Template Literals
// ============================================================

const name = "Knight";
const level = 10;

const message = `Player ${name} is at level ${level}.`;

console.log(message);


// Expressions can also be placed inside ${}

const health = 80;
const damage = 25;

console.log(`Remaining health: ${health - damage}`);


// Multi-line strings

const story = `
Blade entered the castle.
Knight was waiting inside.
The final battle began.
`;

console.log(story);


// ============================================================
// 5. Arrow Functions
// ============================================================

// Traditional function

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// Arrow function

const addNumbers = (a, b) => {
    return a + b;
};

console.log(addNumbers(10, 20));


// ============================================================
// 6. Arrow Function with Implicit Return
// ============================================================

const multiply = (a, b) => a * b;

console.log(multiply(5, 4));


// One parameter

const square = number => number * number;

console.log(square(6));


// No parameters

const sayHello = () => {
    console.log("Hello, Blade!");
};

sayHello();


// ============================================================
// 7. Default Parameters
// ============================================================

function greet(name = "Player") {
    console.log(`Welcome, ${name}!`);
}

greet("Crystal");
greet();


// Multiple default parameters

function createPlayer(name = "Unknown", level = 1) {

    console.log(`Name: ${name}`);
    console.log(`Level: ${level}`);
}

createPlayer("Knight", 10);
createPlayer();


// ============================================================
// 8. Rest Parameters
// ============================================================

// Rest parameters collect multiple arguments into an array.

function calculateTotal(...numbers) {

    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(calculateTotal(10, 20, 30));
console.log(calculateTotal(5, 10, 15, 20));


// Rest parameter after normal parameters

function introducePlayer(name, ...skills) {

    console.log(`Player: ${name}`);
    console.log(`Skills: ${skills}`);
}

introducePlayer(
    "Ghost",
    "Stealth",
    "Sniper",
    "Combat"
);


// ============================================================
// 9. Spread Syntax
// ============================================================

// Spread expands an array.

const weapons = ["Sword", "Bow", "Axe"];

console.log(...weapons);


// Copying an array

const originalWeapons = ["Sword", "Bow", "Axe"];

const copiedWeapons = [...originalWeapons];

console.log(copiedWeapons);


// Combining arrays

const meleeWeapons = ["Sword", "Axe"];
const rangedWeapons = ["Bow", "Crossbow"];

const allWeapons = [
    ...meleeWeapons,
    ...rangedWeapons
];

console.log(allWeapons);


// ============================================================
// 10. Spread with Objects
// ============================================================

const player = {
    name: "Michael",
    level: 20
};

const updatedPlayer = {
    ...player,
    health: 100
};

console.log(updatedPlayer);


// Updating a property

const strongerPlayer = {
    ...player,
    level: 25
};

console.log(strongerPlayer);


// ============================================================
// 11. Array Destructuring
// ============================================================

const characters = [
    "CJ",
    "Tommy",
    "Franklin"
];

const [first, second, third] = characters;

console.log(first);
console.log(second);
console.log(third);


// Skipping values

const [mainCharacter, , backupCharacter] = characters;

console.log(mainCharacter);
console.log(backupCharacter);


// Default values

const [character1, character2, character3, character4 = "Ghost"] =
    characters;

console.log(character4);


// ============================================================
// 12. Object Destructuring
// ============================================================

const soldier = {
    name: "Soap",
    rank: "Captain",
    age: 30
};

const { name: soldierName, rank, age } = soldier;

console.log(soldierName);
console.log(rank);
console.log(age);


// Default value

const {
    name: nameOfSoldier,
    weapon = "Rifle"
} = soldier;

console.log(nameOfSoldier);
console.log(weapon);


// ============================================================
// 13. Nested Destructuring
// ============================================================

const gamePlayer = {

    name: "MacTavish",

    stats: {
        health: 100,
        armor: 75
    }
};

const {
    stats: {
        health,
        armor
    }
} = gamePlayer;

console.log(health);
console.log(armor);


// ============================================================
// 14. Enhanced Object Literals
// ============================================================

const playerName2 = "Trevor";
const playerLevel = 15;

const playerInfo = {

    playerName2,
    playerLevel

};

console.log(playerInfo);


// Instead of writing:
//
// {
//     playerName2: playerName2,
//     playerLevel: playerLevel
// }


// ============================================================
// 15. Shorthand Methods
// ============================================================

const character = {

    name: "Nikko Bellic",

    attack() {
        console.log(`${this.name} is attacking.`);
    },

    defend() {
        console.log(`${this.name} is defending.`);
    }
};

character.attack();
character.defend();


// ============================================================
// 16. Computed Property Names
// ============================================================

const propertyName = "score";

const playerStats = {

    name: "Blade",

    [propertyName]: 500

};

console.log(playerStats);


// ============================================================
// 17. for...of
// ============================================================

const cities = [
    "Delhi",
    "Mumbai",
    "Noida",
    "Bengaluru"
];

for (const city of cities) {

    console.log(city);
}


// ============================================================
// 18. Set
// ============================================================

// Set stores unique values.

const numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(10);

console.log(numbers);

console.log(numbers.size);

console.log(numbers.has(20));

numbers.delete(20);

console.log(numbers);


// Loop through Set

for (const number of numbers) {

    console.log(number);
}


// ============================================================
// 19. Set from an Array
// ============================================================

const duplicateNumbers = [
    10,
    20,
    10,
    30,
    20,
    40
];

const uniqueNumbers = new Set(duplicateNumbers);

console.log(uniqueNumbers);


// Convert Set back into an Array

const uniqueArray = [...uniqueNumbers];

console.log(uniqueArray);


// ============================================================
// 20. Map
// ============================================================

// Map stores key-value pairs.

const playerMap = new Map();

playerMap.set("name", "Crystal");
playerMap.set("level", 25);
playerMap.set("score", 5000);

console.log(playerMap);


// Getting values

console.log(playerMap.get("name"));
console.log(playerMap.get("level"));


// Checking a key

console.log(playerMap.has("score"));


// Removing a key

playerMap.delete("score");

console.log(playerMap);


// Number of entries

console.log(playerMap.size);


// ============================================================
// 21. Looping through Map
// ============================================================

const weaponsMap = new Map([

    ["primary", "Rifle"],
    ["secondary", "Pistol"],
    ["special", "Knife"]

]);

for (const [type, weapon] of weaponsMap) {

    console.log(`${type}: ${weapon}`);
}


// ============================================================
// 22. Symbol
// ============================================================

// Symbol creates a unique value.

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);


// Even though both descriptions are "id",
// the Symbols are different.


const playerObject = {

    name: "Ghost",

    [id1]: 101

};

console.log(playerObject[id1]);


// ============================================================
// 23. Classes
// ============================================================

class Player {

    constructor(name, level) {

        this.name = name;
        this.level = level;

    }

    introduce() {

        console.log(
            `I am ${this.name}, level ${this.level}.`
        );

    }

}

const playerOne = new Player("Blade", 10);

playerOne.introduce();


// ============================================================
// 24. Class Methods
// ============================================================

class Enemy {

    constructor(name, health) {

        this.name = name;
        this.health = health;

    }

    attack() {

        console.log(`${this.name} attacks!`);

    }

    takeDamage(damage) {

        this.health -= damage;

        console.log(
            `${this.name} has ${this.health} health left.`
        );

    }

}

const enemy = new Enemy("Hornet", 100);

enemy.attack();

enemy.takeDamage(25);


// ============================================================
// 25. Class Inheritance
// ============================================================

class Animal {

    constructor(name) {

        this.name = name;

    }

    speak() {

        console.log(`${this.name} makes a sound.`);

    }

}


class Dog extends Animal {

    bark() {

        console.log(`${this.name} barks.`);

    }

}

const dog = new Dog("Ghost");

dog.speak();
dog.bark();


// ============================================================
// 26. super
// ============================================================

class Vehicle {

    constructor(brand) {

        this.brand = brand;

    }

    showBrand() {

        console.log(`Brand: ${this.brand}`);

    }

}


class Car extends Vehicle {

    constructor(brand, model) {

        super(brand);

        this.model = model;

    }

    showCar() {

        console.log(
            `${this.brand} ${this.model}`
        );

    }

}

const car = new Car("Speed", "GT");

car.showBrand();
car.showCar();


// ============================================================
// 27. Promise
// ============================================================

// Promise represents a future result.

const myPromise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {

        resolve("Operation successful!");

    } else {

        reject("Operation failed!");

    }

});

myPromise
    .then(result => {

        console.log(result);

    })
    .catch(error => {

        console.log(error);

    });


// ============================================================
// 28. Promise with setTimeout
// ============================================================

const loadingPromise = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Data loaded!");

    }, 2000);

});

loadingPromise.then(message => {

    console.log(message);

});


// ============================================================
// 29. Object.assign()
// ============================================================

const basePlayer = {

    name: "Franklin",
    level: 10

};

const extraStats = {

    health: 100,
    score: 500

};

const completePlayer = Object.assign(
    {},
    basePlayer,
    extraStats
);

console.log(completePlayer);


// ============================================================
// 30. Array.from()
// ============================================================

const word = "BLADE";

const letters = Array.from(word);

console.log(letters);


// ============================================================
// 31. Array.of()
// ============================================================

const values = Array.of(10, 20, 30, 40);

console.log(values);


// ============================================================
// 32. Number.isNaN()
// ============================================================

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(100));


// ============================================================
// 33. Number.isInteger()
// ============================================================

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));


// ============================================================
// 34. ES6 Practical Example
// ============================================================

const team = [

    {
        name: "Blade",
        score: 90
    },

    {
        name: "Crystal",
        score: 85
    },

    {
        name: "Knight",
        score: 95
    }

];


const scores = team.map(({ score }) => score);

const totalScore = scores.reduce(
    (total, score) => total + score,
    0
);

const averageScore = totalScore / scores.length;

console.log(`Average score: ${averageScore}`);


// ============================================================
// END OF ES6
// ============================================================