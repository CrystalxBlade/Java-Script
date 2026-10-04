// ============================================================
// 19 - CLASSES
// ============================================================


// ============================================================
// 1. What is a Class?
// ============================================================

// A class is a blueprint for creating objects.

// Think of a class as a blueprint.
// Objects are the actual things created from that blueprint.


// ============================================================
// 2. Creating a Class
// ============================================================

class Player {

}


// ============================================================
// 3. Creating an Object from a Class
// ============================================================

const player1 = new Player();

console.log(player1);


// ============================================================
// 4. constructor()
// ============================================================

// The constructor runs automatically when
// a new object is created.

class Character {

    constructor(name, level) {

        this.name = name;
        this.level = level;

    }

}

const character1 = new Character("Blade", 10);

console.log(character1);
console.log(character1.name);
console.log(character1.level);


// ============================================================
// 5. Understanding this
// ============================================================

// "this" refers to the current object.

class Soldier {

    constructor(name, rank) {

        this.name = name;
        this.rank = rank;

    }

}

const soldier1 = new Soldier("Soap", "Captain");
const soldier2 = new Soldier("Ghost", "Lieutenant");

console.log(soldier1.name);
console.log(soldier2.name);


// ============================================================
// 6. Multiple Objects
// ============================================================

class Enemy {

    constructor(name, health) {

        this.name = name;
        this.health = health;

    }

}

const enemy1 = new Enemy("Hornet", 100);
const enemy2 = new Enemy("Knight", 150);
const enemy3 = new Enemy("Crystal", 200);

console.log(enemy1);
console.log(enemy2);
console.log(enemy3);


// ============================================================
// 7. Class Methods
// ============================================================

class Hero {

    constructor(name) {

        this.name = name;

    }

    attack() {

        console.log(`${this.name} attacks!`);

    }

    defend() {

        console.log(`${this.name} is defending!`);

    }

}

const hero = new Hero("Blade");

hero.attack();
hero.defend();


// ============================================================
// 8. Methods Using Properties
// ============================================================

class Fighter {

    constructor(name, health) {

        this.name = name;
        this.health = health;

    }

    showHealth() {

        console.log(
            `${this.name} has ${this.health} health.`
        );

    }

}

const fighter = new Fighter("Ghost", 100);

fighter.showHealth();


// ============================================================
// 9. Changing Object Properties
// ============================================================

class GameCharacter {

    constructor(name, health) {

        this.name = name;
        this.health = health;

    }

    takeDamage(damage) {

        this.health -= damage;

        console.log(
            `${this.name} now has ${this.health} health.`
        );

    }

}

const gameCharacter = new GameCharacter("MacTavish", 100);

gameCharacter.takeDamage(20);
gameCharacter.takeDamage(30);


// ============================================================
// 10. Adding Methods That Return Values
// ============================================================

class Calculator {

    add(a, b) {

        return a + b;

    }

    multiply(a, b) {

        return a * b;

    }

}

const calculator = new Calculator();

console.log(calculator.add(10, 20));
console.log(calculator.multiply(5, 4));


// ============================================================
// 11. Default Constructor Values
// ============================================================

class GamePlayer {

    constructor(name = "Player", level = 1) {

        this.name = name;
        this.level = level;

    }

}

const playerA = new GamePlayer();
const playerB = new GamePlayer("CJ", 15);

console.log(playerA);
console.log(playerB);


// ============================================================
// 12. Class with Multiple Methods
// ============================================================

class Warrior {

    constructor(name, health, power) {

        this.name = name;
        this.health = health;
        this.power = power;

    }

    attack() {

        console.log(
            `${this.name} attacks with ${this.power} power.`
        );

    }

    heal(amount) {

        this.health += amount;

        console.log(
            `${this.name} healed to ${this.health} health.`
        );

    }

    showStats() {

        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Power: ${this.power}`);

    }

}

const warrior = new Warrior(
    "Tommy",
    100,
    50
);

warrior.showStats();
warrior.attack();
warrior.heal(25);


// ============================================================
// 13. Class Inheritance
// ============================================================

// One class can inherit properties and methods
// from another class.

class Animal {

    constructor(name) {

        this.name = name;

    }

    speak() {

        console.log(
            `${this.name} makes a sound.`
        );

    }

}


class Dog extends Animal {

    bark() {

        console.log(
            `${this.name} barks.`
        );

    }

}

const dog = new Dog("Ghost");

dog.speak();
dog.bark();


// ============================================================
// 14. extends
// ============================================================

// "extends" creates a child class from a parent class.

class Vehicle {

    move() {

        console.log("Vehicle is moving.");

    }

}

class Car extends Vehicle {

    drive() {

        console.log("Car is driving.");

    }

}

const car = new Car();

car.move();
car.drive();


// ============================================================
// 15. Inheriting the Constructor
// ============================================================

class Person {

    constructor(name) {

        this.name = name;

    }

}

class Student extends Person {

    study() {

        console.log(
            `${this.name} is studying.`
        );

    }

}

const student = new Student("Crystal");

console.log(student.name);
student.study();


// ============================================================
// 16. super()
// ============================================================

// If a child class has its own constructor,
// it must call super() before using "this".

class Vehicle2 {

    constructor(brand) {

        this.brand = brand;

    }

}


class Car2 extends Vehicle2 {

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

const car2 = new Car2(
    "Speed",
    "GT"
);

car2.showCar();


// ============================================================
// 17. Calling Parent Methods with super
// ============================================================

class Parent {

    greet() {

        console.log("Hello from parent.");

    }

}


class Child extends Parent {

    greet() {

        super.greet();

        console.log("Hello from child.");

    }

}

const child = new Child();

child.greet();


// ============================================================
// 18. Method Overriding
// ============================================================

// A child class can replace a parent method.

class Character2 {

    attack() {

        console.log("Character attacks.");

    }

}


class Mage extends Character2 {

    attack() {

        console.log("Mage attacks with magic.");

    }

}

const mage = new Mage();

mage.attack();


// ============================================================
// 19. Getters
// ============================================================

// A getter allows us to access a method like a property.

class Rectangle {

    constructor(width, height) {

        this.width = width;
        this.height = height;

    }

    get area() {

        return this.width * this.height;

    }

}

const rectangle = new Rectangle(10, 5);

console.log(rectangle.area);


// Notice:
// We use rectangle.area
// NOT rectangle.area()


// ============================================================
// 20. Setters
// ============================================================

// A setter allows us to control what happens
// when a property is assigned a value.

class Player2 {

    constructor(name) {

        this.name = name;

    }

    set playerName(newName) {

        this.name = newName;

    }

}

const player2 = new Player2("Blade");

console.log(player2.name);

player2.playerName = "Franklin";

console.log(player2.name);


// ============================================================
// 21. Getter + Setter Together
// ============================================================

class Account {

    constructor(username) {

        this._username = username;

    }

    get username() {

        return this._username;

    }

    set username(value) {

        if (value.length < 3) {

            console.log(
                "Username must have at least 3 characters."
            );

            return;

        }

        this._username = value;

    }

}

const account = new Account("Blade");

console.log(account.username);

account.username = "CJ";

console.log(account.username);

account.username = "Ghost";

console.log(account.username);


// ============================================================
// 22. Static Methods
// ============================================================

// Static methods belong to the class itself,
// not to individual objects.

class MathHelper {

    static add(a, b) {

        return a + b;

    }

}

console.log(
    MathHelper.add(10, 20)
);


// This would NOT work:
//
// const helper = new MathHelper();
// helper.add(10, 20);


// ============================================================
// 23. Static Properties
// ============================================================

class Game {

    static gameName = "Battle Arena";

}

console.log(Game.gameName);


// ============================================================
// 24. Instance Properties vs Static Properties
// ============================================================

class Player3 {

    static game = "Battle Arena";

    constructor(name) {

        this.name = name;

    }

}

const player3 = new Player3("Nikko Bellic");

console.log(player3.name);

console.log(Player3.game);


// ============================================================
// 25. Private Fields
// ============================================================

// Private fields use #.

class BankAccount {

    #balance = 0;

    deposit(amount) {

        this.#balance += amount;

    }

    showBalance() {

        console.log(
            `Balance: ${this.#balance}`
        );

    }

}

const bankAccount = new BankAccount();

bankAccount.deposit(500);
bankAccount.deposit(250);

bankAccount.showBalance();


// This would cause an error:
//
// console.log(bankAccount.#balance);


// ============================================================
// 26. Private Methods
// ============================================================

class SecuritySystem {

    #generateCode() {

        return 1234;

    }

    showCode() {

        console.log(
            `Security code: ${this.#generateCode()}`
        );

    }

}

const security = new SecuritySystem();

security.showCode();


// ============================================================
// 27. instanceof
// ============================================================

// instanceof checks whether an object
// was created from a particular class.

class Animal2 {

}

class Dog2 extends Animal2 {

}

const dog2 = new Dog2();

console.log(dog2 instanceof Dog2);
console.log(dog2 instanceof Animal2);
console.log(dog2 instanceof Object);


// ============================================================
// 28. Checking Different Objects
// ============================================================

class Player4 {

}

class Enemy2 {

}

const player4 = new Player4();
const enemy4 = new Enemy2();

console.log(player4 instanceof Player4);
console.log(player4 instanceof Enemy2);

console.log(enemy4 instanceof Enemy2);
console.log(enemy4 instanceof Player4);


// ============================================================
// 29. Class Expression
// ============================================================

// Classes can also be stored inside variables.

const PersonClass = class {

    constructor(name) {

        this.name = name;

    }

    greet() {

        console.log(
            `Hello, ${this.name}!`
        );

    }

};

const person = new PersonClass("Knight");

person.greet();


// ============================================================
// 30. Passing Objects to Methods
// ============================================================

class Team {

    constructor(name) {

        this.name = name;
        this.players = [];

    }

    addPlayer(player) {

        this.players.push(player);

    }

    showPlayers() {

        for (const player of this.players) {

            console.log(player);

        }

    }

}

const team = new Team("Warriors");

team.addPlayer("Blade");
team.addPlayer("Crystal");
team.addPlayer("Knight");

team.showPlayers();


// ============================================================
// 31. Class with an Array of Objects
// ============================================================

class GameTeam {

    constructor(name) {

        this.name = name;
        this.players = [];

    }

    addPlayer(name, score) {

        this.players.push({

            name: name,
            score: score

        });

    }

    getTotalScore() {

        return this.players.reduce(
            (total, player) => total + player.score,
            0
        );

    }

}

const gameTeam = new GameTeam("Champions");

gameTeam.addPlayer("Blade", 90);
gameTeam.addPlayer("Crystal", 85);
gameTeam.addPlayer("Knight", 95);

console.log(gameTeam.players);

console.log(
    gameTeam.getTotalScore()
);


// ============================================================
// 32. Practical Example: RPG Character
// ============================================================

class RPGCharacter {

    constructor(name, health, attackPower) {

        this.name = name;
        this.health = health;
        this.attackPower = attackPower;

    }

    attack(target) {

        console.log(
            `${this.name} attacks ${target.name}.`
        );

        target.takeDamage(this.attackPower);

    }

    takeDamage(damage) {

        this.health -= damage;

        if (this.health < 0) {

            this.health = 0;

        }

        console.log(
            `${this.name} has ${this.health} HP left.`
        );

    }

    isAlive() {

        return this.health > 0;

    }

}

const blade = new RPGCharacter(
    "Blade",
    100,
    25
);

const hornet = new RPGCharacter(
    "Hornet",
    80,
    20
);

blade.attack(hornet);
blade.attack(hornet);
blade.attack(hornet);

console.log(
    `Is ${hornet.name} alive? ${hornet.isAlive()}`
);


// ============================================================
// 33. Practical Example: Inheritance
// ============================================================

class PlayerCharacter {

    constructor(name, health) {

        this.name = name;
        this.health = health;

    }

    showInfo() {

        console.log(
            `${this.name} has ${this.health} HP.`
        );

    }

}


class WarriorCharacter extends PlayerCharacter {

    constructor(name, health, weapon) {

        super(name, health);

        this.weapon = weapon;

    }

    attack() {

        console.log(
            `${this.name} attacks with ${this.weapon}.`
        );

    }

}


class MageCharacter extends PlayerCharacter {

    constructor(name, health, spell) {

        super(name, health);

        this.spell = spell;

    }

    castSpell() {

        console.log(
            `${this.name} casts ${this.spell}.`
        );

    }

}


const warriorCharacter = new WarriorCharacter(
    "Tommy",
    120,
    "Sword"
);

const mageCharacter = new MageCharacter(
    "Crystal",
    80,
    "Fireball"
);

warriorCharacter.showInfo();
warriorCharacter.attack();

mageCharacter.showInfo();
mageCharacter.castSpell();


// ============================================================
// 34. Classes + Array Methods
// ============================================================

const characters = [

    new RPGCharacter("Blade", 100, 30),
    new RPGCharacter("Ghost", 90, 25),
    new RPGCharacter("Soap", 120, 20)

];

const names = characters.map(
    character => character.name
);

console.log(names);

const strongCharacters = characters.filter(
    character => character.attackPower >= 25
);

console.log(strongCharacters);


// ============================================================
// 35. Class Design Example
// ============================================================

class Inventory {

    constructor() {

        this.items = [];

    }

    addItem(item) {

        this.items.push(item);

    }

    removeItem(item) {

        const index = this.items.indexOf(item);

        if (index !== -1) {

            this.items.splice(index, 1);

        }

    }

    showInventory() {

        console.log(this.items);

    }

}

const inventory = new Inventory();

inventory.addItem("Sword");
inventory.addItem("Shield");
inventory.addItem("Potion");

inventory.showInventory();

inventory.removeItem("Shield");

inventory.showInventory();


// ============================================================
// END OF CLASSES
// ============================================================