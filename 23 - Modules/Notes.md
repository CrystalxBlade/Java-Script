# 23 - JavaScript Modules

## 1. What are JavaScript Modules?

Modules allow you to split a large JavaScript program into smaller, reusable files.

Without modules, you might put every function, object, class, and variable into one huge file.

With modules, you can organize your code by purpose:

```text
23-Modules/
├── modules.html
├── script.js
├── mathUtils.js
├── player.js
├── message.js
└── Notes.md
```

Each JavaScript module can export functionality that other modules import.

## 2. Why use modules?

- Keep code organized.
- Reuse functions across files.
- Separate responsibilities.
- Avoid putting every variable in the global scope.
- Make larger applications easier to maintain.

## 3. Enabling modules in HTML

Use:

```html
<script type="module" src="script.js"></script>
```

The `type="module"` attribute tells the browser to treat the file as an ES module.

Modules use strict mode automatically and have their own module scope.

For local development, run your project through a local development server. Opening the HTML file directly with a `file://` URL can cause module-loading or CORS errors.

## 4. Named exports

Named exports let you export multiple items from one file.

```javascript
// mathUtils.js

export function add(a, b) {
    return a + b;
}

export const bonus = 100;
```

You can also export declarations together:

```javascript
function square(number) {
    return number * number;
}

export { square };
```

## 5. Named imports

Import named exports using their exported names inside curly braces.

```javascript
import { add, bonus } from "./mathUtils.js";

console.log(add(10, 5));
console.log(bonus);
```

The path `./mathUtils.js` means the file is in the same directory as the importing file.

Named imports are case-sensitive.

## 6. Renaming imports

Use `as` to give an imported item another local name.

```javascript
import { add as calculateSum } from "./mathUtils.js";

console.log(calculateSum(5, 8));
```

This changes the local name, not the exported name.

## 7. Default exports

A module can have one default export.

```javascript
// message.js

export default function greetPlayer(name) {
    return `Welcome, ${name}!`;
}
```

Import it without curly braces:

```javascript
import greetPlayer from "./message.js";
```

The local import name can differ from the original function name.

## 8. Named vs default exports

| Named export | Default export |
|---|---|
| Can export multiple items | One default export per module |
| Imported using `{ }` | Imported without `{ }` |
| Normally imported by exported name | Importer chooses a local name |
| Example: `export { add }` | Example: `export default greetPlayer` |

A module may combine named exports with one default export.

## 9. Importing everything

Use `* as` to import named exports into a namespace object.

```javascript
import * as MathUtils from "./mathUtils.js";

console.log(MathUtils.add(2, 3));
console.log(MathUtils.gameBonus);
```

The namespace contains the module's named exports. The default export, if any, is available as `MathUtils.default`.

## 10. Exporting objects and classes

You can export objects:

```javascript
export const player = {
    name: "Blade",
    level: 25
};
```

And classes:

```javascript
export class Character {
    constructor(name) {
        this.name = name;
    }
}
```

Import them like other named exports:

```javascript
import { player, Character } from "./player.js";
```

## 11. Module scope

Variables declared inside a module are not automatically global variables accessible from unrelated scripts.

For example:

```javascript
const secretCode = 1234;
```

Another module cannot import `secretCode` unless the module exports it.

This helps prevent accidental name conflicts.

## 12. Static imports and dynamic imports

### Static import

```javascript
import { add } from "./mathUtils.js";
```

Static imports are declared at the top level and are resolved as part of module loading.

### Dynamic import

```javascript
async function loadMathTools() {
    const MathUtils = await import("./mathUtils.js");

    console.log(MathUtils.add(10, 20));
}

loadMathTools();
```

Dynamic `import()` returns a Promise. It is useful when code should load only when needed.

## 13. Re-exporting

One module can re-export items from another module.

```javascript
export { add, subtract } from "./mathUtils.js";
```

You can also re-export a default export:

```javascript
export { default as greetPlayer } from "./message.js";
```

This technique is useful for creating a central entry point for related exports.

## 14. Common mistakes

### Forgetting `type="module"`

Incorrect for this setup:

```html
<script src="script.js"></script>
```

Correct:

```html
<script type="module" src="script.js"></script>
```

### Forgetting the relative path

Usually incorrect for a local file import:

```javascript
import { add } from "mathUtils.js";
```

Correct:

```javascript
import { add } from "./mathUtils.js";
```

### Using curly braces incorrectly

Named import:

```javascript
import { add } from "./mathUtils.js";
```

Default import:

```javascript
import greetPlayer from "./message.js";
```

### Filename mismatch

If the file is called `mathUtils.js`, make sure the import path matches its spelling and capitalization.

### Opening HTML directly

Browsers may block module imports when an HTML file is opened through `file://`. Use a local server instead.

## 15. How modules help in full-stack development

A frontend application can separate API calls, utility functions, and UI logic into modules.

For example:

```text
Frontend/
├── main.js
├── api.js
├── validation.js
└── player.js
```

A larger application might use a backend such as ASP.NET Core Web API for server-side functionality. JavaScript modules organize the frontend; they do not replace the backend.

## 16. Quick revision

- `export`: makes declarations available to other modules.
- `import`: uses exports from another module.
- Named exports: multiple named items per module.
- Default export: one default export per module.
- `as`: renames an imported or exported name.
- `* as`: imports named exports into a namespace.
- `import()`: dynamically loads a module.
- `type="module"`: enables ES modules in browser HTML.
- `./`: refers to a relative path from the current module.

**Key takeaway:** Modules let you build a program from smaller files, each with a clear responsibility. Learn named exports, named imports, default exports, and relative paths first. The remaining features build on those fundamentals.
