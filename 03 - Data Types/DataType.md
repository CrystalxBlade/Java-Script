# JavaScript Data Types

## What is a Data Type?

A data type defines the kind of value stored in a variable.

Example

```javascript
let age = 24;
```

The value **24** is a Number.

---

# JavaScript Data Types

JavaScript has **8 data types**.

## Primitive Data Types

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

## Non-Primitive Data Type

8. Object

---

# 1. String

Stores text.

```javascript
let name = "Satish";
```

Output

```
Satish
```

---

# 2. Number

Stores integers and decimal numbers.

```javascript
let age = 24;

let pi = 3.14;
```

Unlike many languages, JavaScript has only one numeric type: `Number` (except `BigInt`).

---

# 3. Boolean

Stores only two values.

```javascript
true
false
```

Example

```javascript
let isLoggedIn = true;
```

---

# 4. Undefined

A variable that has been declared but not assigned a value.

```javascript
let city;

console.log(city);
```

Output

```
undefined
```

---

# 5. Null

Represents an intentional absence of a value.

```javascript
let phone = null;
```

Interesting fact:

```javascript
typeof null
```

Output

```
object
```

This is a historical bug in JavaScript.

---

# 6. BigInt

Used for very large integers.

```javascript
let big = 12345678901234567890n;
```

Notice the `n` at the end.

---

# 7. Symbol

Creates unique identifiers.

```javascript
let id = Symbol("id");
```

Every Symbol is unique.

---

# 8. Object

Stores collections of key-value pairs.

```javascript
let student = {
    name: "Satish",
    age: 24
};
```

---

# Arrays

Arrays are used to store multiple values.

```javascript
let fruits = [
    "Apple",
    "Mango",
    "Banana"
];
```

Interesting fact:

```javascript
typeof fruits
```

Output

```
object
```

Arrays are a special kind of object.

---

# Functions

Functions are callable objects.

```javascript
function greet() {}
```

```javascript
typeof greet
```

Output

```
function
```

---

# typeof Operator

Used to determine the data type of a value.

Example

```javascript
typeof "Hello"
```

Output

```
string
```

Examples

| Expression | Result |
|------------|---------|
| `"Hello"` | string |
| `123` | number |
| `true` | boolean |
| `undefined` | undefined |
| `null` | object |
| `{}` | object |
| `[]` | object |
| `Symbol()` | symbol |
| `10n` | bigint |
| `function(){}` | function |

---

# Primitive vs Non-Primitive

## Primitive

- Stored by value
- Immutable
- Independent copies

```javascript
let a = 10;

let b = a;

b = 20;
```

Result

```
a = 10

b = 20
```

---

## Non-Primitive

Objects and arrays are stored by reference.

```javascript
let person1 = {
    name: "Alex"
};

let person2 = person1;
```

Changing one reference affects the same object.

```javascript
person2.name = "John";
```

Result

```
person1.name

John
```

---

# Summary

| Data Type | Primitive | Example |
|-----------|-----------|---------|
| String | ✔ | `"Hello"` |
| Number | ✔ | `100` |
| Boolean | ✔ | `true` |
| Undefined | ✔ | `undefined` |
| Null | ✔ | `null` |
| BigInt | ✔ | `100n` |
| Symbol | ✔ | `Symbol()` |
| Object | ❌ | `{}` |

---

# Key Takeaways

✔ JavaScript has **8 built-in data types**.

✔ `typeof` is used to check the type of a value.

✔ `null` returns `"object"` because of a historical JavaScript bug.

✔ Arrays are objects.

✔ Functions have the special type `"function"`.

✔ Primitive values are copied by value.

✔ Objects and arrays are copied by reference.