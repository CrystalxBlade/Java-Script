# JavaScript Conditionals

Conditionals allow JavaScript to make decisions based on whether a condition is `true` or `false`.

Example:

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
}
```

---

# 1. if Statement

The `if` statement executes code when a condition is true.

```javascript
if (condition) {
    // code
}
```

Example:

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
}
```

---

# 2. if...else

Use `else` when you want to execute alternative code.

```javascript
if (condition) {
    // if true
} else {
    // if false
}
```

Example:

```javascript
let age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

# 3. if...else if...else

Used when there are multiple conditions.

```javascript
if (condition1) {

} else if (condition2) {

} else {

}
```

Example:

```javascript
let marks = 75;

if (marks >= 90) {
    console.log("A+");
} else if (marks >= 80) {
    console.log("A");
} else if (marks >= 70) {
    console.log("B");
} else {
    console.log("Fail");
}
```

JavaScript checks the conditions from top to bottom.

Once a condition is true, the remaining conditions are skipped.

---

# 4. Nested if

An `if` statement can exist inside another `if`.

```javascript
if (condition) {

    if (anotherCondition) {

    }

}
```

Example:

```javascript
let age = 20;
let hasID = true;

if (age >= 18) {

    if (hasID) {
        console.log("Entry allowed.");
    }

}
```

---

# 5. Multiple Conditions

Logical operators can be used with conditionals.

## AND

```javascript
if (age >= 18 && hasID) {
    console.log("Allowed");
}
```

Both conditions must be true.

## OR

```javascript
if (isAdmin || isOwner) {
    console.log("Access granted");
}
```

At least one condition must be true.

## NOT

```javascript
if (!isLoggedIn) {
    console.log("Please log in.");
}
```

---

# 6. Ternary Operator

The ternary operator is a short form of `if...else`.

Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Example:

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Equivalent to:

```javascript
let result;

if (age >= 18) {
    result = "Adult";
} else {
    result = "Minor";
}
```

Use ternary operators for simple decisions.

---

# 7. Nested Ternary

Ternary operators can be nested.

```javascript
let number = 10;

let result = number > 0
    ? "Positive"
    : number < 0
        ? "Negative"
        : "Zero";
```

Avoid deeply nested ternaries because they can become difficult to read.

---

# 8. switch Statement

`switch` is useful when comparing one value against multiple possible values.

Syntax:

```javascript
switch (expression) {

    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
```

Example:

```javascript
let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}
```

---

# break

`break` stops the `switch` statement.

Without `break`, JavaScript can continue executing the following cases.

---

# default

`default` runs when none of the cases match.

```javascript
switch (day) {

    case 1:
        console.log("Monday");
        break;

    default:
        console.log("Invalid day");
}
```

---

# 9. Truthy and Falsy Values

JavaScript converts values to Boolean when they are used as conditions.

Example:

```javascript
let username = "";

if (username) {
    console.log("Username exists.");
} else {
    console.log("Username is empty.");
}
```

An empty string is falsy.

---

# Falsy Values

The main falsy values are:

```text
false
0
-0
0n
""
null
undefined
NaN
```

Almost everything else is truthy.

Examples:

```javascript
if ("Hello") {
    console.log("Truthy");
}

if (42) {
    console.log("Truthy");
}

if ([]) {
    console.log("Truthy");
}

if ({}) {
    console.log("Truthy");
}
```

---

# 10. Nullish Coalescing

The `??` operator provides a fallback when a value is `null` or `undefined`.

```javascript
let username = null;

let name = username ?? "Guest";

console.log(name);
```

Output:

```text
Guest
```

Important:

`??` only checks for:

```text
null
undefined
```

It does NOT treat values such as `0` or `""` as nullish.

---

# Conditional Decision Flow

JavaScript can make decisions using:

```text
if
if...else
if...else if...else
nested if
switch
ternary operator
```

---

# Example: Login System

```javascript
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login successful.");
} else {
    console.log("Invalid credentials.");
}
```

---

# Best Practices

- Use `if...else` for general conditions.
- Use `switch` when checking one value against many fixed cases.
- Use ternary operators for simple conditions.
- Avoid deeply nested `if` statements.
- Avoid deeply nested ternary operators.
- Use strict comparison (`===`) when comparing values.
- Keep conditions readable.

---

# Summary

| Concept | Purpose |
|---|---|
| `if` | Execute code when a condition is true |
| `else` | Execute alternative code |
| `else if` | Check additional conditions |
| Nested `if` | Put conditions inside conditions |
| `switch` | Compare one value against multiple cases |
| `break` | Stop a `switch` case |
| `default` | Run when no case matches |
| Ternary `?:` | Short form of `if...else` |
| Truthy | Values treated as true |
| Falsy | Values treated as false |
| `??` | Fallback for `null`/`undefined` |