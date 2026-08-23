# JavaScript Functions

A function is a reusable block of code designed to perform a specific task.

Instead of repeatedly writing the same code, we can put it inside a function and call it whenever needed.

Example:

```javascript
function greet() {
    console.log("Hello!");
}

greet();
```

---

# 1. Function Declaration

A function can be declared using the `function` keyword.

```javascript
function greet() {
    console.log("Hello!");
}
```

The function does not execute when it is declared.

It must be called.

```javascript
greet();
```

---

# 2. Calling a Function

Calling a function means executing it.

```javascript
function greet() {
    console.log("Hello!");
}

greet();
```

You can call a function multiple times.

```javascript
greet();
greet();
greet();
```

---

# 3. Parameters

Parameters are variables defined in the function declaration.

```javascript
function greet(name) {
    console.log("Hello " + name);
}
```

Here, `name` is a parameter.

---

# 4. Arguments

Arguments are the actual values passed to a function when calling it.

```javascript
greet("Satish");
```

Here, `"Satish"` is an argument.

### Parameter vs Argument

```javascript
function greet(name) {
    // name = parameter
}

greet("Satish");
// "Satish" = argument
```

---

# 5. Multiple Parameters

A function can have multiple parameters.

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

Here:

```text
a → 10
b → 20
```

---

# 6. return Statement

`return` sends a value back from a function.

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

---

# return Stops Function Execution

Once JavaScript reaches `return`, the function stops executing.

```javascript
function test() {

    return "Hello";

    console.log("This will not execute");
}
```

---

# 7. Function Without return

If a function does not explicitly return a value, it returns `undefined`.

```javascript
function greet() {
    console.log("Hello");
}

let result = greet();

console.log(result);
```

Output:

```text
Hello
undefined
```

---

# 8. Default Parameters

Default parameters provide a value when an argument is not provided.

```javascript
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Satish");
greet();
```

Output:

```text
Hello Satish
Hello Guest
```

---

# 9. Function Expression

A function can be stored inside a variable.

```javascript
const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(5, 4));
```

This is called a **function expression**.

---

# Function Declaration vs Function Expression

### Function Declaration

```javascript
function add(a, b) {
    return a + b;
}
```

### Function Expression

```javascript
const add = function (a, b) {
    return a + b;
};
```

---

# 10. Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

# Arrow Function with Implicit Return

If an arrow function contains only one expression, the `{}` and `return` can be omitted.

```javascript
const add = (a, b) => a + b;
```

Example:

```javascript
const square = number => number * number;
```

---

# Arrow Function with One Parameter

Parentheses can be omitted when there is exactly one parameter.

```javascript
const double = number => number * 2;
```

With parentheses:

```javascript
const double = (number) => number * 2;
```

Both are valid.

---

# Arrow Function with No Parameters

Parentheses are required when there are no parameters.

```javascript
const greet = () => {
    console.log("Hello!");
};
```

---

# 11. Rest Parameters

Rest parameters collect multiple arguments into an array.

```javascript
function total(...numbers) {

    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(total(10, 20, 30));
```

Output:

```text
60
```

The `...numbers` syntax is called a **rest parameter**.

---

# 12. Function Scope

Variables declared inside a function are generally accessible only inside that function.

```javascript
function test() {

    let message = "Hello";

    console.log(message);
}

test();
```

This will cause an error:

```javascript
console.log(message);
```

because `message` belongs to the function's local scope.

---

# 13. Global Variables

A variable declared outside a function can generally be accessed inside the function.

```javascript
let username = "Satish";

function showUser() {
    console.log(username);
}

showUser();
```

---

# 14. Nested Functions

A function can be declared inside another function.

```javascript
function outer() {

    function inner() {
        console.log("Inner function");
    }

    inner();
}

outer();
```

---

# 15. Callback Functions

A callback is a function passed to another function as an argument.

```javascript
function processUser(name, callback) {

    console.log("Processing " + name);

    callback();
}

function completed() {
    console.log("Completed!");
}

processUser("Satish", completed);
```

Callbacks are extremely important in JavaScript and will become especially useful when learning:

- Array methods
- Events
- Asynchronous JavaScript
- Promises
- APIs

---

# 16. Anonymous Functions

A function without a name is called an anonymous function.

```javascript
setTimeout(function () {
    console.log("Hello");
}, 1000);
```

The function passed to `setTimeout()` is anonymous.

---

# 17. Arrow Function as Callback

Arrow functions are commonly used as callbacks.

```javascript
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

---

# 18. Function Calling Another Function

Functions can call other functions.

```javascript
function start() {
    sayHello();
}

function sayHello() {
    console.log("Hello!");
}

start();
```

---

# 19. Functions with Conditions

Functions can contain conditional logic.

```javascript
function checkAge(age) {

    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}

console.log(checkAge(20));
```

---

# 20. Functions with Loops

Functions can also contain loops.

```javascript
function printNumbers() {

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

}

printNumbers();
```

---

# Why Use Functions?

Functions help you:

- Reuse code
- Organize code
- Reduce repetition
- Improve readability
- Break large programs into smaller pieces
- Make code easier to test and maintain

---

# Function Anatomy

```javascript
function add(a, b) {
    return a + b;
}
```

```text
function → keyword

add → function name

a, b → parameters

return → sends a value back

a + b → returned expression
```

---

# Function Types Covered

| Type | Example |
|---|---|
| Function Declaration | `function add() {}` |
| Function Expression | `const add = function() {}` |
| Arrow Function | `const add = () => {}` |
| Anonymous Function | `function() {}` |
| Callback Function | `doSomething(callback)` |

---

# Best Practices

- Give functions meaningful names.
- Keep functions focused on one task.
- Avoid unnecessarily large functions.
- Use parameters instead of hardcoding values.
- Use `return` when a function needs to produce a value.
- Use `const` when storing function expressions or arrow functions.
- Prefer clear, readable functions over clever one-liners.

---

# Summary

```text
Function
    ↓
Declaration
    ↓
Calling
    ↓
Parameters
    ↓
Arguments
    ↓
return
    ↓
Default Parameters
    ↓
Function Expression
    ↓
Arrow Functions
    ↓
Rest Parameters
    ↓
Scope
    ↓
Callbacks
    ↓
Anonymous Functions
```

## Key Takeaways

- A function is a reusable block of code.
- Parameters receive values.
- Arguments are values passed to parameters.
- `return` sends a value back.
- Functions without a return value return `undefined`.
- Functions can be stored in variables.
- Arrow functions provide shorter syntax.
- Rest parameters collect arguments into an array.
- Functions can be passed to other functions as callbacks.