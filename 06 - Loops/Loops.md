# JavaScript Loops

Loops are used to execute a block of code repeatedly.

Instead of writing:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

We can use a loop:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

# Types of Loops

JavaScript provides several types of loops:

1. `for`
2. `while`
3. `do...while`
4. `for...of`
5. `for...in`

---

# 1. for Loop

The `for` loop is commonly used when you know how many times you want to repeat something.

### Syntax

```javascript
for (initialization; condition; update) {
    // code
}
```

Example:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

### How it works

```text
Initialization
      ↓
  Condition
      ↓
    Code
      ↓
    Update
      ↓
  Condition
      ↓
    Code
      ↓
    Update
      ↓
    ...
```

---

# 2. while Loop

A `while` loop repeats while a condition is `true`.

### Syntax

```javascript
while (condition) {
    // code
}
```

Example:

```javascript
let i = 1;

while (i <= 5) {

    console.log(i);

    i++;
}
```

---

# Important

Make sure the condition eventually becomes `false`.

Otherwise, you can create an infinite loop.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

This is an infinite loop because `i` never changes.

---

# 3. do...while Loop

A `do...while` loop executes the code **at least once** before checking the condition.

### Syntax

```javascript
do {
    // code
} while (condition);
```

Example:

```javascript
let i = 1;

do {

    console.log(i);

    i++;

} while (i <= 5);
```

---

# do...while vs while

### while

```javascript
let x = 10;

while (x < 5) {
    console.log(x);
}
```

Output:

```text
Nothing
```

The condition is checked first.

### do...while

```javascript
let x = 10;

do {
    console.log(x);
} while (x < 5);
```

Output:

```text
10
```

The code executes once before checking the condition.

---

# 4. break

`break` immediately stops a loop.

Example:

```javascript
for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

---

# 5. continue

`continue` skips the current iteration and moves to the next one.

Example:

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

---

# break vs continue

| Keyword | Purpose |
|---|---|
| `break` | Stops the entire loop |
| `continue` | Skips the current iteration |

---

# 6. for...of Loop

`for...of` is used to iterate over iterable values such as:

- Arrays
- Strings
- Sets
- Maps

Example:

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

Output:

```text
Apple
Mango
Banana
```

---

# for...of with Strings

```javascript
let name = "Satish";

for (let character of name) {
    console.log(character);
}
```

Output:

```text
S
a
t
i
s
h
```

---

# 7. for...in Loop

`for...in` is commonly used to iterate over the **enumerable property keys of an object**.

Example:

```javascript
let student = {
    name: "Satish",
    age: 24,
    city: "Noida"
};

for (let key in student) {
    console.log(key);
}
```

Output:

```text
name
age
city
```

---

# Getting Values with for...in

Use bracket notation:

```javascript
for (let key in student) {
    console.log(student[key]);
}
```

Or:

```javascript
for (let key in student) {
    console.log(key, student[key]);
}
```

---

# for...of vs for...in

| Loop | Common Use |
|---|---|
| `for...of` | Values of iterables |
| `for...in` | Keys of objects |

Example:

```javascript
let fruits = ["Apple", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

Output:

```text
Apple
Mango
```

Object:

```javascript
let person = {
    name: "Alex",
    age: 25
};

for (let key in person) {
    console.log(key);
}
```

Output:

```text
name
age
```

---

# 8. Nested Loops

A loop inside another loop is called a nested loop.

Example:

```javascript
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(i, j);

    }
}
```

Nested loops are commonly used for:

- Patterns
- Tables
- 2D arrays
- Grids
- Game development

---

# 9. Looping Through an Array

Traditional `for` loop:

```javascript
let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

---

# 10. Multiplication Table

```javascript
let number = 5;

for (let i = 1; i <= 10; i++) {

    console.log(number * i);

}
```

---

# 11. Infinite Loops

An infinite loop never stops.

Example:

```javascript
while (true) {
    console.log("Running...");
}
```

Avoid accidental infinite loops.

---

# Loop Control Statements

JavaScript provides two important loop control statements:

```javascript
break;
continue;
```

### break

Stops the loop.

### continue

Skips the current iteration.

---

# Choosing the Right Loop

### Use `for`

When you know the number of iterations.

```javascript
for (let i = 0; i < 10; i++) {
}
```

### Use `while`

When the number of iterations depends on a condition.

```javascript
while (gameRunning) {
}
```

### Use `do...while`

When the code should execute at least once.

```javascript
do {
    // code
} while (condition);
```

### Use `for...of`

When you want the values of an iterable.

```javascript
for (let item of items) {
}
```

### Use `for...in`

When you need the enumerable property keys of an object.

```javascript
for (let key in object) {
}
```

---

# Summary

| Loop | Main Purpose |
|---|---|
| `for` | Repeat a known number of times |
| `while` | Repeat while a condition is true |
| `do...while` | Execute at least once |
| `for...of` | Iterate over values |
| `for...in` | Iterate over object keys |
| `break` | Stop loop |
| `continue` | Skip current iteration |
| Nested loop | Loop inside another loop |

---

# Key Takeaways

- Loops reduce repetitive code.
- `for` is one of the most commonly used loops.
- `while` checks its condition before execution.
- `do...while` executes at least once.
- `break` stops a loop.
- `continue` skips an iteration.
- `for...of` works with iterable values.
- `for...in` is mainly used for object property keys.
- Always make sure your loop can eventually terminate.