# JavaScript Arrays

An array is a data structure used to store multiple values in a single variable.

Example:

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

---

# 1. Creating an Array

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

Arrays can contain multiple values.

```javascript
let numbers = [10, 20, 30, 40];
```

---

# 2. Array Index

JavaScript arrays use **zero-based indexing**.

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

| Index | Value |
|---:|---|
| 0 | Apple |
| 1 | Mango |
| 2 | Banana |

Access an element:

```javascript
console.log(fruits[0]);
```

Output:

```text
Apple
```

---

# 3. Changing Elements

Array elements can be changed.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits[1] = "Grapes";

console.log(fruits);
```

---

# 4. Array Length

The `length` property returns the number of elements.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.length);
```

Output:

```text
3
```

---

# 5. Arrays Can Store Different Types

JavaScript arrays can contain different types of values.

```javascript
let data = [
    "Blade",
    24,
    true,
    null
];
```

However, in most real-world code, keeping arrays of related values makes the code easier to understand.

---

# 6. Array Constructor

Arrays can also be created using `Array`.

```javascript
let numbers = new Array(10, 20, 30);
```

Usually, array literals are preferred:

```javascript
let numbers = [10, 20, 30];
```

---

# 7. push()

Adds one or more elements to the **end** of an array.

```javascript
let fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);
```

Output:

```text
Apple
Mango
Banana
```

`push()` returns the new array length.

---

# 8. pop()

Removes the last element.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

let removed = fruits.pop();

console.log(removed);
console.log(fruits);
```

`pop()` returns the removed element.

---

# 9. unshift()

Adds elements to the beginning.

```javascript
let fruits = ["Mango", "Banana"];

fruits.unshift("Apple");

console.log(fruits);
```

---

# 10. shift()

Removes the first element.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

let first = fruits.shift();

console.log(first);
console.log(fruits);
```

---

# push / pop / shift / unshift

| Method | Action |
|---|---|
| `push()` | Add to end |
| `pop()` | Remove from end |
| `unshift()` | Add to beginning |
| `shift()` | Remove from beginning |

---

# 11. indexOf()

Returns the index of the first matching element.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.indexOf("Mango"));
```

Output:

```text
1
```

If the element doesn't exist:

```javascript
console.log(fruits.indexOf("Orange"));
```

Output:

```text
-1
```

---

# 12. includes()

Checks whether an array contains a value.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.includes("Mango"));
```

Output:

```text
true
```

---

# 13. slice()

Returns a portion of an array without modifying the original array.

```javascript
let fruits = [
    "Apple",
    "Mango",
    "Banana",
    "Orange"
];

let selected = fruits.slice(1, 3);

console.log(selected);
```

Output:

```text
["Mango", "Banana"]
```

The ending index is **not included**.

```text
slice(start, end)
```

---

# 14. splice()

Used to add, remove, or replace elements.

```javascript
let fruits = [
    "Apple",
    "Mango",
    "Banana"
];

fruits.splice(1, 1);

console.log(fruits);
```

The first argument is the starting index.

The second argument is the number of elements to remove.

---

# Adding with splice()

```javascript
fruits.splice(1, 0, "Orange");
```

The `0` means nothing is removed.

---

# Replacing with splice()

```javascript
fruits.splice(1, 1, "Grapes");
```

One element is removed and `"Grapes"` is inserted.

---

# slice() vs splice()

| `slice()` | `splice()` |
|---|---|
| Does not modify original | Modifies original |
| Returns a portion | Adds/removes/replaces |
| Good for copying portions | Good for modifying arrays |

---

# 15. concat()

Combines arrays.

```javascript
let heroes = ["CJ", "Tommy"];
let agents = ["Michael", "Franklin"];

let characters = heroes.concat(agents);

console.log(characters);
```

---

# 16. join()

Converts array elements into a string.

```javascript
let names = ["Blade", "Ghost", "Soap"];

console.log(names.join(", "));
```

Output:

```text
Blade, Ghost, Soap
```

---

# 17. reverse()

Reverses the array **in place**.

```javascript
let numbers = [1, 2, 3, 4];

numbers.reverse();

console.log(numbers);
```

Output:

```text
[4, 3, 2, 1]
```

---

# 18. sort()

Sorts an array.

```javascript
let names = [
    "Trevor",
    "Blade",
    "Ghost"
];

names.sort();

console.log(names);
```

---

# Sorting Numbers

Be careful:

```javascript
let numbers = [40, 5, 100, 25];

numbers.sort();

console.log(numbers);
```

JavaScript's default sort compares elements as strings.

For numerical ascending order:

```javascript
numbers.sort((a, b) => a - b);
```

For descending order:

```javascript
numbers.sort((a, b) => b - a);
```

---

# 19. forEach()

Runs a function once for each element.

```javascript
let players = [
    "Blade",
    "Crystal",
    "Knight"
];

players.forEach(function (player) {
    console.log(player);
});
```

---

# forEach() with Index

```javascript
players.forEach(function (player, index) {
    console.log(index, player);
});
```

---

# 20. map()

Creates a **new array** by transforming every element.

```javascript
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(function (number) {
    return number * 2;
});

console.log(doubled);
```

Output:

```text
[2, 4, 6, 8]
```

---

# 21. filter()

Creates a new array containing elements that satisfy a condition.

```javascript
let ages = [12, 18, 25, 15, 30];

let adults = ages.filter(function (age) {
    return age >= 18;
});

console.log(adults);
```

Output:

```text
[18, 25, 30]
```

---

# 22. find()

Returns the **first element** that satisfies a condition.

```javascript
let scores = [20, 45, 70, 90];

let result = scores.find(function (score) {
    return score > 60;
});

console.log(result);
```

Output:

```text
70
```

If nothing matches, it returns:

```text
undefined
```

---

# 23. findIndex()

Returns the index of the first matching element.

```javascript
let scores = [20, 45, 70, 90];

let index = scores.findIndex(function (score) {
    return score > 60;
});

console.log(index);
```

Output:

```text
2
```

If nothing matches, it returns:

```text
-1
```

---

# 24. some()

Checks whether **at least one** element satisfies a condition.

```javascript
let marks = [35, 42, 55, 70];

let result = marks.some(function (mark) {
    return mark >= 70;
});

console.log(result);
```

Output:

```text
true
```

---

# 25. every()

Checks whether **all** elements satisfy a condition.

```javascript
let marks = [50, 60, 75, 80];

let result = marks.every(function (mark) {
    return mark >= 40;
});

console.log(result);
```

Output:

```text
true
```

---

# some() vs every()

| Method | Returns `true` when |
|---|---|
| `some()` | At least one element matches |
| `every()` | Every element matches |

---

# 26. reduce()

Reduces an array to a single value.

Example:

```javascript
let prices = [100, 200, 300];

let total = prices.reduce(function (sum, price) {
    return sum + price;
}, 0);

console.log(total);
```

Output:

```text
600
```

The `0` is the initial value of the accumulator.

---

# 27. flat()

Flattens nested arrays.

```javascript
let numbers = [
    [1, 2],
    [3, 4]
];

console.log(numbers.flat());
```

Output:

```text
[1, 2, 3, 4]
```

---

# 28. flatMap()

Maps elements and then flattens the result by one level.

```javascript
let numbers = [1, 2, 3];

let result = numbers.flatMap(function (number) {
    return [number, number * 2];
});

console.log(result);
```

---

# 29. Array.isArray()

Checks whether a value is an array.

```javascript
let numbers = [1, 2, 3];

console.log(Array.isArray(numbers));
```

Output:

```text
true
```

---

# 30. Array Destructuring

Destructuring allows values to be extracted from an array.

```javascript
let characters = [
    "Blade",
    "Ghost",
    "Soap"
];

let [first, second, third] = characters;

console.log(first);
console.log(second);
console.log(third);
```

Output:

```text
Blade
Ghost
Soap
```

---

# 31. Rest with Array Destructuring

The rest syntax collects the remaining elements.

```javascript
let characters = [
    "Blade",
    "Ghost",
    "Soap"
];

let [leader, ...team] = characters;

console.log(leader);
console.log(team);
```

Output:

```text
Blade
["Ghost", "Soap"]
```

---

# 32. Spread Operator

The spread operator expands an array.

```javascript
let original = [1, 2, 3];

let copy = [...original];

console.log(copy);
```

---

# Combining Arrays

```javascript
let teamA = ["Blade", "Ghost"];
let teamB = ["Soap", "MacTavish"];

let fullTeam = [...teamA, ...teamB];

console.log(fullTeam);
```

---

# 33. Copying Arrays

This does NOT create an independent array:

```javascript
let original = [1, 2, 3];

let copy = original;
```

Both variables refer to the same array.

Instead:

```javascript
let copy = [...original];
```

or:

```javascript
let copy = original.slice();
```

---

# 34. Array Reference

Arrays are objects and are handled by reference.

```javascript
let array1 = [1, 2, 3];

let array2 = array1;

array2.push(4);

console.log(array1);
```

Output:

```text
[1, 2, 3, 4]
```

Both variables refer to the same array.

---

# Important Array Methods

| Method | Purpose |
|---|---|
| `push()` | Add to end |
| `pop()` | Remove from end |
| `shift()` | Remove from beginning |
| `unshift()` | Add to beginning |
| `slice()` | Copy a portion |
| `splice()` | Add/remove/replace |
| `concat()` | Combine arrays |
| `join()` | Convert to string |
| `indexOf()` | Find index |
| `includes()` | Check for value |
| `reverse()` | Reverse array |
| `sort()` | Sort array |
| `forEach()` | Run function for each element |
| `map()` | Transform elements |
| `filter()` | Select elements |
| `find()` | Find first matching element |
| `findIndex()` | Find first matching index |
| `some()` | Check if any match |
| `every()` | Check if all match |
| `reduce()` | Reduce to one value |
| `flat()` | Flatten nested arrays |
| `flatMap()` | Map + flatten |
| `Array.isArray()` | Check if value is an array |

---

# Mutating vs Non-Mutating Methods

Some methods modify the original array.

### Mutating

```text
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

### Non-Mutating

```text
slice()
concat()
map()
filter()
find()
findIndex()
some()
every()
flat()
flatMap()
```

Always check whether an array method modifies the original array.

---

# Key Takeaways

- Arrays use zero-based indexing.
- The first element is at index `0`.
- `length` gives the number of elements.
- Arrays can contain multiple values.
- `push()` and `pop()` work at the end.
- `shift()` and `unshift()` work at the beginning.
- `slice()` does not modify the original array.
- `splice()` modifies the original array.
- `map()` transforms elements.
- `filter()` selects elements.
- `find()` returns the first matching element.
- `reduce()` can combine values into one result.
- `forEach()` executes a function for each element.
- `for...of` can also iterate through array values.
- Arrays are objects and use reference semantics.