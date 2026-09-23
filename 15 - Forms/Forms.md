# JavaScript Forms

Forms allow users to enter and submit information.

Examples:

- Login forms
- Registration forms
- Search forms
- Contact forms
- Feedback forms
- Payment forms
- Profile forms

JavaScript can read form values, validate them, modify them, and respond when the user submits the form.

---

# 1. What is a Form?

A form is created using the `<form>` element.

Example:

<form id="userForm">
    <input type="text">
    <button type="submit">Submit</button>
</form>

The form acts as a container for user input.

---

# 2. Input Elements

Common form controls include:

- `<input>`
- `<textarea>`
- `<select>`
- `<option>`
- `<button>`
- radio buttons
- checkboxes

Example:

<input type="text">

---

# 3. Getting an Input Element

We can select an input using the DOM.

```javascript
const nameInput = document.getElementById("name");