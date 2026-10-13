
// ============================================================
// 1. Exporting an Object
// ============================================================

export const player = {
    name: "Blade",
    level: 25,
    score: 1500
};


// ============================================================
// 2. Exporting a Class
// ============================================================

export class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    introduce() {
        return `${this.name} has ${this.health} health.`;
    }

    takeDamage(amount) {
        this.health -= amount;

        if (this.health < 0) {
            this.health = 0;
        }

        return this.health;
    }
}
