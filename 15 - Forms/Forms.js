// ========================================
// 1. Selecting the Form
// ========================================

const userForm = document.getElementById("userForm");

console.log(userForm);


// ========================================
// 2. Selecting Form Inputs
// ========================================

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const messageInput = document.getElementById("message");

console.log(nameInput);
console.log(emailInput);
console.log(passwordInput);


// ========================================
// 3. Reading Input Values
// ========================================

console.log(nameInput.value);
console.log(emailInput.value);


// ========================================
// 4. Input Event
// ========================================

nameInput.addEventListener("input", function () {

    console.log("Name:", nameInput.value);

});


// ========================================
// 5. Change Event
// ========================================

cityInput.addEventListener("change", function () {

    console.log("Selected city:", cityInput.value);

});


// ========================================
// 6. Form Submit Event
// ========================================

userForm.addEventListener("submit", function (event) {

    // Stop the browser from refreshing the page
    event.preventDefault();

    console.log("Form submitted!");

});


// ========================================
// 7. Getting All Form Values
// ========================================

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const age = ageInput.value;
    const city = cityInput.value;
    const message = messageInput.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Age:", age);
    console.log("City:", city);
    console.log("Message:", message);

});


// ========================================
// 8. Checking Radio Buttons
// ========================================

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const selectedGender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (selectedGender) {

        console.log("Gender:", selectedGender.value);

    } else {

        console.log("No gender selected");

    }

});


// ========================================
// 9. Getting Checked Checkboxes
// ========================================

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const selectedSkills = document.querySelectorAll(
        'input[name="skills"]:checked'
    );

    console.log("Selected skills:");

    selectedSkills.forEach(function (skill) {

        console.log(skill.value);

    });

});


// ========================================
// 10. Form Validation
// ========================================

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (name === "") {

        console.log("Name is required");
        return;

    }

    if (email === "") {

        console.log("Email is required");
        return;

    }

    if (password === "") {

        console.log("Password is required");
        return;

    }

    console.log("Form is valid!");

});


// ========================================
// 11. Password Length Validation
// ========================================

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const password = passwordInput.value;

    if (password.length < 8) {

        console.log("Password must contain at least 8 characters");
        return;

    }

    console.log("Password length is valid");

});


// ========================================
// 12. Age Validation
// ========================================

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const age = Number(ageInput.value);

    if (age < 18) {

        console.log("You must be at least 18 years old");
        return;

    }

    console.log("Age is valid");

});


// ========================================
// 13. Email Validation
// ========================================

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = emailInput.value.trim();

    if (!email.includes("@")) {

        console.log("Please enter a valid email");

        return;
    }

    console.log("Email looks valid");

});


// ========================================
// 14. Using FormData
// ========================================

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const formData = new FormData(userForm);

    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
    console.log("Password:", formData.get("password"));
    console.log("Age:", formData.get("age"));
    console.log("City:", formData.get("city"));
    console.log("Gender:", formData.get("gender"));
    console.log("Message:", formData.get("message"));

});


// ========================================
// 15. FormData with Multiple Checkboxes
// ========================================

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const formData = new FormData(userForm);

    const skills = formData.getAll("skills");

    console.log("Skills:", skills);

});


// ========================================
// 16. Displaying Form Data on the Page
// ========================================

const output = document.getElementById("output");

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    output.textContent =
        `Name: ${name} | Email: ${email}`;

});


// ========================================
// 17. Reset Event
// ========================================

userForm.addEventListener("reset", function () {

    console.log("Form has been reset");

});


// ========================================
// 18. Checking Input Validity
// ========================================

emailInput.addEventListener("input", function () {

    if (emailInput.validity.valid) {

        console.log("Email is valid");

    } else {

        console.log("Email is invalid");

    }

});


// ========================================
// 19. HTML Validation Properties
// ========================================

console.log(emailInput.required);
console.log(emailInput.type);


// ========================================
// 20. Creating a Simple Complete Validation
// ========================================

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const age = Number(ageInput.value);
    const city = cityInput.value;

    if (name === "") {

        output.textContent = "Please enter your name.";
        return;

    }

    if (email === "") {

        output.textContent = "Please enter your email.";
        return;

    }

    if (password.length < 8) {

        output.textContent =
            "Password must contain at least 8 characters.";

        return;

    }

    if (age < 18) {

        output.textContent =
            "You must be at least 18 years old.";

        return;

    }

    if (city === "") {

        output.textContent =
            "Please select a city.";

        return;

    }

    output.textContent =
        `Welcome, ${name}! Your form was submitted successfully.`;

});