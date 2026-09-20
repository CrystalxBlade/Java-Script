# JavaScript DOM Events

DOM Events allow JavaScript to respond to things happening on a webpage.

Examples:

- Clicking a button
- Double-clicking
- Moving the mouse
- Pressing a keyboard key
- Typing into an input
- Selecting an option
- Submitting a form
- Focusing an input
- Leaving an input

Events are what make webpages interactive.

---

# 1. What is an Event?

An event is an action or occurrence detected by the browser.

Examples:

```
text
click
dblclick
mouseover
mouseout
keydown
keyup
input
change
focus
blur
submit

```
## Common Events

| Event        | Happens when               |
| ------------ | -------------------------- |
| `click`      | Element is clicked         |
| `dblclick`   | Element is double-clicked  |
| `mousedown`  | Mouse button is pressed    |
| `mouseup`    | Mouse button is released   |
| `mousemove`  | Mouse moves                |
| `mouseover`  | Pointer moves onto element |
| `mouseout`   | Pointer leaves element     |
| `mouseenter` | Pointer enters element     |
| `mouseleave` | Pointer leaves element     |
| `keydown`    | Keyboard key is pressed    |
| `keyup`      | Keyboard key is released   |
| `input`      | Input value changes        |
| `change`     | Form control value changes |
| `focus`      | Element receives focus     |
| `blur`       | Element loses focus        |
| `submit`     | Form is submitted          |


## Important Event Methods and Properties

| Property / Method     | Purpose                        |
| --------------------- | ------------------------------ |
| `event.target`        | Original event target          |
| `event.currentTarget` | Element handling the event     |
| `event.type`          | Event type                     |
| `event.key`           | Pressed keyboard key           |
| `event.code`          | Physical keyboard key          |
| `event.clientX`       | Mouse X coordinate             |
| `event.clientY`       | Mouse Y coordinate             |
| `event.shiftKey`      | Checks Shift                   |
| `event.ctrlKey`       | Checks Ctrl                    |
| `event.altKey`        | Checks Alt                     |
| `preventDefault()`    | Stops default browser behavior |
| `stopPropagation()`   | Stops event propagation        |


## DOM Events in One Picture

```
             USER ACTION
                  ↓
        ┌──────────────────┐
        │  Click / Type /  │
        │  Key / Mouse     │
        └────────┬─────────┘
                 ↓
              EVENT
                 ↓
       addEventListener()
                 ↓
          Event Handler
                 ↓
        JavaScript runs
                 ↓
            DOM changes
```