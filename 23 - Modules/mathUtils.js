// ============================================================
// 1. Named Exports
// ============================================================

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }

    return a / b;
}


// ============================================================
// 2. Exporting a Constant
// ============================================================

export const gameBonus = 100;


// ============================================================
// 3. Exporting Multiple Items at the End
// ============================================================

function square(number) {
    return number * number;
}

function cube(number) {
    return number * number * number;
}

export { square, cube };