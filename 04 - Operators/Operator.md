# JavaScript Operators

Operators are symbols that perform operations on values or variables.

Example

```javascript
10 + 20
```

---

# Types of Operators

- Arithmetic
- Assignment
- Comparison
- Logical
- String
- Ternary
- Type
- Bitwise
- Nullish Coalescing
- Optional Chaining
- Spread
- Rest
- Delete
- in
- Comma

---

# Arithmetic Operators

| Operator | Meaning |
|----------|---------|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus |
| ** | Exponent |

Example

```javascript
10 + 5
```

---

# Increment & Decrement

```javascript
x++
++x

x--
--x
```

Pre-increment updates first.

Post-increment returns first.

---

# Assignment Operators

| Operator | Example |
|----------|---------|
| = | x = 10 |
| += | x += 5 |
| -= | x -= 2 |
| *= | x *= 3 |
| /= | x /= 2 |
| %= | x %= 3 |
| **= | x **= 2 |

---

# Comparison Operators

| Operator | Meaning |
|----------|---------|
| == | Equal (loose) |
| === | Strict Equal |
| != | Loose Not Equal |
| !== | Strict Not Equal |
| > | Greater Than |
| < | Less Than |
| >= | Greater Than or Equal |
| <= | Less Than or Equal |

Use **`===`** instead of **`==`** whenever possible.

---

# Logical Operators

| Operator | Meaning |
|----------|---------|
| && | AND |
| \|\| | OR |
| ! | NOT |

---

# String Concatenation

```javascript
"Hello " + "World"
```

Output

```
Hello World
```

---

# Ternary Operator

```javascript
condition ? value1 : value2
```

Example

```javascript
age >= 18 ? "Adult" : "Minor"
```

---

# typeof

Returns the type of a value.

```javascript
typeof 100
```

Output

```
number
```

---

# instanceof

Checks whether an object belongs to a class or constructor.

```javascript
arr instanceof Array
```

---

# Nullish Coalescing (??)

Returns the right value only if the left value is `null` or `undefined`.

```javascript
username ?? "Guest"
```

---

# Optional Chaining

Safely accesses nested properties.

```javascript
student.address?.city
```

Returns `undefined` instead of throwing an error if `address` doesn't exist.

---

# Bitwise Operators

| Operator | Meaning |
|----------|---------|
| & | AND |
| \| | OR |
| ^ | XOR |
| ~ | NOT |
| << | Left Shift |
| >> | Right Shift |

These work on binary representations of numbers.

---

# Delete Operator

Removes a property from an object.

```javascript
delete person.age;
```

---

# in Operator

Checks if a property exists in an object.

```javascript
"name" in person
```

---

# Spread Operator (...)

Expands elements.

```javascript
let copy = [...array];
```

Useful for copying arrays and objects.

---

# Rest Parameter (...)

Collects multiple arguments into an array.

```javascript
function add(...numbers){}
```

---

# Comma Operator

Evaluates multiple expressions and returns the last one.

```javascript
let x = (1,2,3);
```

Output

```
3
```

---

# Operator Precedence

Example

```javascript
10 + 5 * 2
```

Output

```
20
```

Multiplication happens before addition.

Use parentheses to control evaluation.

```javascript
(10 + 5) * 2
```

Output

```
30
```

---

# Best Practices

✔ Prefer `===` and `!==`.

✔ Use parentheses to improve readability.

✔ Use `??` instead of `||` when you only want to handle `null` or `undefined`.

✔ Use optional chaining (`?.`) when nested properties may not exist.

✔ Understand the difference between spread (`...`) and rest (`...`) based on context.

---

# Summary

- Arithmetic Operators
- Increment & Decrement
- Assignment Operators
- Comparison Operators
- Logical Operators
- String Concatenation
- Ternary Operator
- typeof
- instanceof
- Nullish Coalescing (`??`)
- Optional Chaining (`?.`)
- Bitwise Operators
- Delete Operator
- in Operator
- Spread Operator
- Rest Parameter
- Comma Operator
- Operator Precedence