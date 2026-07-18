# Variables in JavaScript

## What is a Variable?

A variable is a container used to store data.

Example:

```javascript
let name = "Satish";
```

---

# Types of Variables

JavaScript provides three ways to declare variables.

- var
- let
- const

---

## var

```javascript
var age = 24;
```

### Characteristics

- Can be reassigned
- Can be redeclared
- Function scoped
- Hoisted

Example

```javascript
var x = 10;
var x = 20;
```

✔ Allowed

---

## let

```javascript
let age = 24;
```

### Characteristics

- Can be reassigned
- Cannot be redeclared in the same scope
- Block scoped

Example

```javascript
let age = 24;

age = 25;
```

✔ Allowed

```javascript
let age = 24;
let age = 25;
```

❌ Error

---

## const

```javascript
const PI = 3.14;
```

### Characteristics

- Cannot be reassigned
- Cannot be redeclared
- Block scoped
- Must be initialized

Example

```javascript
const country = "India";
```

```javascript
country = "USA";
```

❌ Error

---

# Naming Rules

Valid

```javascript
let name;
let studentName;
let _salary;
let $price;
let marks2025;
```

Invalid

```javascript
let 123abc;
let first-name;
let let;
```

---

# Scope

## Global Scope

Accessible everywhere.

```javascript
let name = "Alex";
```

---

## Block Scope

Only accessible inside `{}`.

```javascript
{
    let x = 10;
}
```

---

## Function Scope

`var` is function scoped.

```javascript
function demo() {
    var age = 20;
}
```

---

# Reassignment

Allowed with `let`

```javascript
let age = 20;
age = 30;
```

Allowed with `var`

```javascript
var age = 20;
age = 30;
```

Not allowed with `const`

```javascript
const age = 20;
age = 30;
```

❌ Error

---

# Hoisting

`var`

```javascript
console.log(a);

var a = 10;
```

Output

```
undefined
```

---

`let`

```javascript
console.log(a);

let a = 10;
```

❌ ReferenceError

---

`const`

```javascript
console.log(a);

const a = 10;
```

❌ ReferenceError

---

# Best Practices

✔ Use `const` by default.

✔ Use `let` when the value changes.

✔ Avoid `var` in modern JavaScript.

✔ Use meaningful variable names.

✔ Follow camelCase naming convention.

Example

```javascript
let firstName;
let totalMarks;
let isLoggedIn;
```

---

# Summary

| Feature | var | let | const |
|---------|-----|-----|-------|
| Reassign | ✔ | ✔ | ❌ |
| Redeclare | ✔ | ❌ | ❌ |
| Block Scoped | ❌ | ✔ | ✔ |
| Hoisted | ✔ | ✔ (TDZ) | ✔ (TDZ) |
| Preferred | ❌ | ✔ | ✔ |