# 22 - JSON in JavaScript

## 1. What is JSON?

JSON stands for **JavaScript Object Notation**.

It is a text format used to store and exchange data between applications.

For example, a game might store player information in JSON:

```json
{
    "name": "Blade",
    "level": 25,
    "score": 1500
}
```

JSON is commonly used with:

- Web APIs
- Frontend and backend applications
- Configuration files
- Game settings and saved data
- Data exchange between different programming languages

**Remember:** JSON is a data format. It is not the same thing as a JavaScript object.

---

## 2. JavaScript Object vs JSON

JavaScript object:

```javascript
const player = {
    name: "Blade",
    level: 25
};
```

JSON text:

```json
{
    "name": "Blade",
    "level": 25
}
```

Notice the differences:

- JSON property names must use double quotes.
- JSON strings must use double quotes.
- JSON does not support comments.
- JSON does not support functions or `undefined`.
- JSON does not allow trailing commas.

---

## 3. JSON Data Types

JSON supports these data types:

| Type | Example |
|---|---|
| String | `"Blade"` |
| Number | `25` |
| Boolean | `true` |
| Null | `null` |
| Object | `{"level":25}` |
| Array | `["Blade","Ghost"]` |

JSON does not directly support JavaScript-specific values such as `undefined`, functions, symbols, or `BigInt`.

---

## 4. JSON.stringify()

`JSON.stringify()` converts a JavaScript value into a JSON string.

```javascript
const player = {
    name: "Blade",
    level: 25
};

const result = JSON.stringify(player);

console.log(result);
```

Output:

```json
{"name":"Blade","level":25}
```

The result is a string:

```javascript
console.log(typeof result); // "string"
```

### Pretty-printing JSON

Use the third argument to add indentation:

```javascript
JSON.stringify(player, null, 4);
```

This makes JSON easier to read.

---

## 5. JSON.parse()

`JSON.parse()` converts valid JSON text into a JavaScript value.

```javascript
const jsonText = '{"name":"Ghost","level":40}';

const player = JSON.parse(jsonText);

console.log(player.name);
console.log(player.level);
```

Output:

```text
Ghost
40
```

You can parse objects, arrays, strings, numbers, booleans, and `null`, provided the input is valid JSON text.

---

## 6. stringify() vs parse()

| Method | Purpose |
|---|---|
| `JSON.stringify()` | JavaScript value → JSON string |
| `JSON.parse()` | JSON string → JavaScript value |

Memory trick:

```text
JavaScript value
      ↓
JSON.stringify()
      ↓
JSON text
      ↓
JSON.parse()
      ↓
JavaScript value
```

---

## 7. Nested JSON

JSON objects can contain other objects.

```json
{
    "player": {
        "name": "Ghost",
        "level": 40
    },
    "inventory": {
        "weapon": "rifle",
        "potions": 3
    }
}
```

After parsing:

```javascript
console.log(data.player.name);
console.log(data.inventory.weapon);
```

Use dot notation to access nested properties.

---

## 8. JSON Arrays

JSON can represent arrays:

```json
[
    {
        "name": "Blade",
        "score": 900
    },
    {
        "name": "Crystal",
        "score": 1200
    }
]
```

After parsing:

```javascript
console.log(team[0].name);
console.log(team[1].score);
```

You can also use array methods:

```javascript
const names = team.map((member) => member.name);

const highScorers = team.filter(
    (member) => member.score >= 900
);
```

This connects JSON with the Arrays and Objects folders.

---

## 9. Handling Invalid JSON

Invalid JSON causes `JSON.parse()` to throw a `SyntaxError`.

Example:

```javascript
try {
    const data = JSON.parse('{"name":}');
} catch (error) {
    console.log("Invalid JSON:", error.message);
}
```

Use `try...catch` when parsing JSON that might be invalid.

Parsing successfully does not guarantee the data has the structure your application expects. You may also need to validate required properties and their types.

---

## 10. Special Values During Stringification

### `undefined` in objects

Properties whose values are `undefined` are omitted.

```javascript
JSON.stringify({
    name: "Blade",
    nickname: undefined
});
```

Result:

```json
{"name":"Blade"}
```

### `undefined` in arrays

Undefined array entries become `null`:

```javascript
JSON.stringify(["Blade", undefined, "Ghost"]);
```

Result:

```json
["Blade",null,"Ghost"]
```

### Functions

Function-valued object properties are omitted during normal stringification.

### Dates

Date objects normally serialize to ISO-formatted strings.

### Circular references

An object that directly or indirectly references itself cannot be serialized by ordinary `JSON.stringify()` and causes an error.

---

## 11. Replacer and Reviver

### Replacer

A replacer lets you control which properties are serialized or transform their values.

```javascript
JSON.stringify(player, ["name"], 2);
```

This includes only the `name` property.

### Reviver

A reviver lets you transform values while parsing JSON.

```javascript
JSON.parse(jsonText, (key, value) => {
    return value;
});
```

These are useful features, but learn basic `stringify()` and `parse()` first.

---

## 12. JSON and Fetch API

Most APIs return data in JSON format.

```javascript
const response = await fetch(url);

if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
}

const data = await response.json();
```

`response.json()` reads the response body and parses its JSON content into a JavaScript value. It returns a Promise.

You usually do not need to call `JSON.parse()` again on the result of `response.json()`.

---

## 13. Sending JSON to an API

When sending a JavaScript object as JSON:

```javascript
const player = {
    name: "Blade",
    level: 25
};

const response = await fetch(url, {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(player)
});
```

The key pieces are:

- `method`: tells the server the HTTP method.
- `headers`: describes the request body format.
- `JSON.stringify()`: converts the JavaScript object into JSON text.
- `body`: contains the data being sent.

---

## 14. JSON in Game Development

JSON can be useful for:

- Player settings
- Game configuration
- Dialogue data
- Level metadata
- Inventory data
- High-score records
- Simple save-data formats

Example:

```json
{
    "player": "Blade",
    "level": 10,
    "soundEnabled": true,
    "inventory": ["sword", "shield", "potion"]
}
```

For sensitive or competitive game data, important values such as currency, achievements, or scores should not be trusted solely because they came from client-side JSON. Validate important data on the server.

---

## 15. JSON in Full-Stack Development

A typical architecture looks like:

```text
JavaScript Frontend
        ↓
    Fetch API
        ↓
   JSON Request
        ↓
 ASP.NET Core Web API
        ↓
   C# Application
        ↓
     SQL Server
```

The backend may serialize C# objects into JSON responses, while the frontend parses those responses into JavaScript values.

---

## 16. Common Mistakes

### Mistake 1: Using single quotes in JSON

Invalid:

```text
{'name':'Blade'}
```

Valid:

```json
{"name":"Blade"}
```

### Mistake 2: Forgetting to stringify request data

Usually incorrect when sending a JavaScript object as JSON:

```javascript
body: player
```

Correct:

```javascript
body: JSON.stringify(player)
```

### Mistake 3: Parsing the same response twice

If you already did:

```javascript
const data = await response.json();
```

then `data` is already a JavaScript value. Do not pass it to `JSON.parse()` unless it is actually a JSON string.

### Mistake 4: Assuming valid JSON means valid application data

JSON may parse successfully but still be missing a required field or contain a value of the wrong type. Validate the structure when needed.

---

## 17. Quick Revision

| Concept | Remember |
|---|---|
| JSON | Text format for exchanging data |
| `JSON.stringify()` | JavaScript value to JSON string |
| `JSON.parse()` | JSON string to JavaScript value |
| `response.json()` | Read and parse JSON response body |
| `Content-Type` | Describes the request body's media type |
| `try...catch` | Handles parsing errors |
| Nested JSON | Objects inside objects |
| JSON arrays | Collections of values |
| Replacer | Controls stringification |
| Reviver | Transforms values during parsing |

## 18. Key Takeaway

The core concept is simple:

**Use `JSON.stringify()` when converting JavaScript data into JSON text, and `JSON.parse()` when converting JSON text back into JavaScript data.**

With Fetch, `response.json()` usually handles parsing API responses for you.

Next folder: `23-Modules`, where you'll learn how to split JavaScript into separate files and share code using `export` and `import`.