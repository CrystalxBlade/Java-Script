// ==========================================
// 10 - OBJECTS
// ==========================================


// ------------------------------------------
// 1. Creating an Object
// ------------------------------------------

let player = {
    name: "Blade",
    age: 24,
    game: "Hollow Knight"
};

console.log(player);


// ------------------------------------------
// 2. Accessing Object Properties
// ------------------------------------------

// Dot notation
console.log(player.name);
console.log(player.age);

// Bracket notation
console.log(player["game"]);


// ------------------------------------------
// 3. Changing Object Properties
// ------------------------------------------

player.age = 25;

console.log(player.age);


// ------------------------------------------
// 4. Adding New Properties
// ------------------------------------------

player.weapon = "Nail";

console.log(player);


// ------------------------------------------
// 5. Deleting Properties
// ------------------------------------------

delete player.weapon;

console.log(player);


// ------------------------------------------
// 6. Object with Different Data Types
// ------------------------------------------

let character = {
    name: "Hornet",
    health: 100,
    isAlive: true,
    weapons: ["Needle", "Thread"],
    address: {
        kingdom: "Hallownest",
        area: "Kingdom's Edge"
    }
};

console.log(character);


// ------------------------------------------
// 7. Accessing Nested Objects
// ------------------------------------------

console.log(character.address.kingdom);
console.log(character.address.area);


// ------------------------------------------
// 8. Accessing Array Inside an Object
// ------------------------------------------

console.log(character.weapons[0]);
console.log(character.weapons[1]);


// ------------------------------------------
// 9. Object Methods
// ------------------------------------------

let knight = {
    name: "Knight",

    greet: function()
    {
        console.log("Hello from the Knight!");
    }
};

knight.greet();


// ------------------------------------------
// 10. Method Using Object Properties
// ------------------------------------------

let hero = {
    name: "Ghost",
    health: 100,

    showDetails: function()
    {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
    }
};

hero.showDetails();


// ------------------------------------------
// 11. The this Keyword
// ------------------------------------------

let warrior = {
    name: "MacTavish",

    introduce: function()
    {
        console.log(`My name is ${this.name}`);
    }
};

warrior.introduce();


// ------------------------------------------
// 12. Adding a Method Later
// ------------------------------------------

let soldier = {
    name: "Soap"
};

soldier.sayHello = function()
{
    console.log(`Hello, I am ${this.name}`);
};

soldier.sayHello();


// ------------------------------------------
// 13. Object Constructor Syntax
// ------------------------------------------

let character2 = new Object();

character2.name = "Michael";
character2.role = "Leader";

console.log(character2);


// ------------------------------------------
// 14. Checking a Property
// ------------------------------------------

let player2 = {
    name: "Franklin",
    age: 25
};

console.log("name" in player2);
console.log("weapon" in player2);


// ------------------------------------------
// 15. hasOwnProperty()
// ------------------------------------------

console.log(player2.hasOwnProperty("age"));
console.log(player2.hasOwnProperty("game"));


// ------------------------------------------
// 16. Object.keys()
// ------------------------------------------

let gameCharacter = {
    name: "Trevor",
    age: 30,
    city: "Los Santos"
};

console.log(Object.keys(gameCharacter));


// ------------------------------------------
// 17. Object.values()
// ------------------------------------------

console.log(Object.values(gameCharacter));


// ------------------------------------------
// 18. Object.entries()
// ------------------------------------------

console.log(Object.entries(gameCharacter));


// ------------------------------------------
// 19. Looping Through an Object
// ------------------------------------------

for (let key in gameCharacter)
{
    console.log(key);
}


// ------------------------------------------
// 20. Getting Key and Value
// ------------------------------------------

for (let key in gameCharacter)
{
    console.log(`${key}: ${gameCharacter[key]}`);
}


// ------------------------------------------
// 21. Object Destructuring
// ------------------------------------------

let user = {
    username: "Crystal",
    score: 950
};

let { username, score } = user;

console.log(username);
console.log(score);


// ------------------------------------------
// 22. Destructuring with Different Variable Names
// ------------------------------------------

let player3 = {
    name: "Nikko",
    country: "Liberty City"
};

let {
    name: playerName,
    country: playerCountry
} = player3;

console.log(playerName);
console.log(playerCountry);


// ------------------------------------------
// 23. Default Values in Destructuring
// ------------------------------------------

let player4 = {
    name: "CJ"
};

let {
    name: currentName,
    weapon = "None"
} = player4;

console.log(currentName);
console.log(weapon);


// ------------------------------------------
// 24. Spread Operator with Objects
// ------------------------------------------

let originalPlayer = {
    name: "Blade",
    level: 10
};

let copiedPlayer = {
    ...originalPlayer
};

console.log(copiedPlayer);


// ------------------------------------------
// 25. Combining Objects
// ------------------------------------------

let basicDetails = {
    name: "Knight",
    age: 24
};

let gameDetails = {
    game: "Hollow Knight",
    level: 15
};

let completeDetails = {
    ...basicDetails,
    ...gameDetails
};

console.log(completeDetails);


// ------------------------------------------
// 26. Object.assign()
// ------------------------------------------

let object1 = {
    name: "Ghost"
};

let object2 = {
    weapon: "Rifle"
};

let combinedObject = Object.assign({}, object1, object2);

console.log(combinedObject);


// ------------------------------------------
// 27. Object References
// ------------------------------------------

let firstObject = {
    name: "Blade"
};

let secondObject = firstObject;

secondObject.name = "Crystal";

console.log(firstObject.name);
console.log(secondObject.name);


// Both variables refer to the same object.


// ------------------------------------------
// 28. Copying an Object
// ------------------------------------------

let originalObject = {
    name: "Hornet",
    level: 20
};

let copiedObject = {
    ...originalObject
};

copiedObject.name = "Knight";

console.log(originalObject.name);
console.log(copiedObject.name);


// ------------------------------------------
// 29. Nested Object Reference
// ------------------------------------------

let firstPlayer = {
    name: "Blade",
    stats: {
        health: 100
    }
};

let secondPlayer = {
    ...firstPlayer
};

secondPlayer.stats.health = 50;

console.log(firstPlayer.stats.health);
console.log(secondPlayer.stats.health);


// Spread creates a shallow copy.
// Nested objects are still shared.


// ------------------------------------------
// 30. Optional Chaining
// ------------------------------------------

let character3 = {
    name: "Ghost",
    weapon: {
        primary: "Knife"
    }
};

console.log(character3.weapon?.primary);
console.log(character3.weapon?.secondary);


// ------------------------------------------
// 31. Nullish Coalescing
// ------------------------------------------

let characterName = character3.name ?? "Unknown";

console.log(characterName);


// ------------------------------------------
// 32. Object.freeze()
// ------------------------------------------

let frozenPlayer = {
    name: "Soap",
    health: 100
};

Object.freeze(frozenPlayer);

frozenPlayer.health = 50;

console.log(frozenPlayer.health);


// The object cannot be modified.


// ------------------------------------------
// 33. Object.seal()
// ------------------------------------------

let sealedPlayer = {
    name: "MacTavish",
    health: 100
};

Object.seal(sealedPlayer);

sealedPlayer.health = 75;
sealedPlayer.weapon = "Rifle";

console.log(sealedPlayer);


// Existing properties can be changed,
// but new properties cannot be added.


// ------------------------------------------
// 34. Object with a Function
// ------------------------------------------

let calculator = {
    add: function(a, b)
    {
        return a + b;
    },

    subtract: function(a, b)
    {
        return a - b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));


// ------------------------------------------
// 35. Array of Objects
// ------------------------------------------

let players = [
    {
        name: "Blade",
        score: 100
    },

    {
        name: "Crystal",
        score: 200
    },

    {
        name: "Knight",
        score: 300
    }
];

console.log(players[0].name);
console.log(players[1].score);


// ------------------------------------------
// 36. Looping Through an Array of Objects
// ------------------------------------------

for (let player of players)
{
    console.log(`${player.name}: ${player.score}`);
}


// ------------------------------------------
// 37. Finding an Object in an Array
// ------------------------------------------

let selectedPlayer = players.find(function(player)
{
    return player.name === "Crystal";
});

console.log(selectedPlayer);


// ------------------------------------------
// 38. Map with an Array of Objects
// ------------------------------------------

let playerNames = players.map(function(player)
{
    return player.name;
});

console.log(playerNames);


// ------------------------------------------
// 39. Filter with an Array of Objects
// ------------------------------------------

let highScorers = players.filter(function(player)
{
    return player.score >= 200;
});

console.log(highScorers);


// ------------------------------------------
// 40. Practical Example
// ------------------------------------------

let student = {
    name: "Blade",
    marks: [80, 90, 75],

    calculateAverage: function()
    {
        let total = 0;

        for (let mark of this.marks)
        {
            total += mark;
        }

        return total / this.marks.length;
    }
};

console.log(student.name);
console.log(student.calculateAverage());


// ------------------------------------------
// END OF OBJECTS
// ------------------------------------------