// ==========================================
// 1. What is an Event?
// ==========================================

// An event is something that happens in the browser.
//
// Examples:
//
// - Mouse click
// - Keyboard press
// - Mouse movement
// - Typing
// - Form submission
// - Page loading
// - Input gaining focus
// - Input losing focus


// ==========================================
// 2. onclick Property
// ==========================================

const clickButton = document.getElementById("clickButton");
const clickMessage = document.getElementById("clickMessage");

clickButton.onclick = function()
{
    clickMessage.textContent = "Button was clicked!";
};


// ==========================================
// 3. addEventListener()
// ==========================================

// addEventListener() is the most common way
// to handle DOM events.

const heading = document.getElementById("heading");

heading.addEventListener("click", function()
{
    heading.textContent = "Heading Clicked!";
});


// ==========================================
// 4. Click Event
// ==========================================

clickButton.addEventListener("click", function()
{
    console.log("Button clicked!");
});


// ==========================================
// 5. Double Click
// ==========================================

const doubleClickButton =
    document.getElementById("doubleClickButton");

doubleClickButton.addEventListener("dblclick", function()
{
    console.log("Button was double-clicked!");

    clickMessage.textContent = "Double click detected!";
});


// ==========================================
// 6. Mouseover
// ==========================================

const mouseBox = document.getElementById("mouseBox");
const mouseMessage = document.getElementById("mouseMessage");

mouseBox.style.width = "250px";
mouseBox.style.padding = "30px";
mouseBox.style.border = "2px solid black";

mouseBox.addEventListener("mouseover", function()
{
    mouseMessage.textContent = "Mouse entered the box.";
});


// ==========================================
// 7. Mouseout
// ==========================================

mouseBox.addEventListener("mouseout", function()
{
    mouseMessage.textContent = "Mouse left the box.";
});


// ==========================================
// 8. Mouseenter
// ==========================================

mouseBox.addEventListener("mouseenter", function()
{
    console.log("Mouse entered.");
});


// ==========================================
// 9. Mouseleave
// ==========================================

mouseBox.addEventListener("mouseleave", function()
{
    console.log("Mouse left.");
});


// ==========================================
// 10. Mousemove
// ==========================================

mouseBox.addEventListener("mousemove", function()
{
    console.log("Mouse is moving inside the box.");
});


// ==========================================
// 11. Keyboard Events
// ==========================================

const keyboardInput =
    document.getElementById("keyboardInput");

const keyMessage =
    document.getElementById("keyMessage");


// keydown

keyboardInput.addEventListener("keydown", function()
{
    console.log("Key pressed down.");
});


// keyup

keyboardInput.addEventListener("keyup", function()
{
    console.log("Key released.");
});


// ==========================================
// 12. Keyboard Event Object
// ==========================================

keyboardInput.addEventListener("keydown", function(event)
{
    console.log("Key:", event.key);
});


// ==========================================
// 13. Detecting a Specific Key
// ==========================================

keyboardInput.addEventListener("keydown", function(event)
{
    if (event.key === "Enter")
    {
        keyMessage.textContent = "Enter key pressed!";
    }
});


// ==========================================
// 14. Detecting Escape
// ==========================================

keyboardInput.addEventListener("keydown", function(event)
{
    if (event.key === "Escape")
    {
        keyMessage.textContent = "Escape key pressed!";
    }
});


// ==========================================
// 15. Input Event
// ==========================================

const nameInput =
    document.getElementById("nameInput");

const nameOutput =
    document.getElementById("nameOutput");

nameInput.addEventListener("input", function(event)
{
    nameOutput.textContent =
        "Hello, " + event.target.value;
});


// ==========================================
// 16. Reading event.target
// ==========================================

nameInput.addEventListener("input", function(event)
{
    console.log(event.target);
});


// ==========================================
// 17. Change Event
// ==========================================

const characterSelect =
    document.getElementById("characterSelect");

const selectOutput =
    document.getElementById("selectOutput");

characterSelect.addEventListener("change", function(event)
{
    selectOutput.textContent =
        "Selected: " + event.target.value;
});


// ==========================================
// 18. Focus Event
// ==========================================

const focusInput =
    document.getElementById("focusInput");

const focusMessage =
    document.getElementById("focusMessage");

focusInput.addEventListener("focus", function()
{
    focusMessage.textContent = "Input is focused.";
});


// ==========================================
// 19. Blur Event
// ==========================================

focusInput.addEventListener("blur", function()
{
    focusMessage.textContent = "Input lost focus.";
});


// ==========================================
// 20. Event Object
// ==========================================

const eventButton =
    document.getElementById("eventButton");

const eventOutput =
    document.getElementById("eventOutput");

eventButton.addEventListener("click", function(event)
{
    console.log(event);

    eventOutput.textContent =
        "Event type: " + event.type;
});


// ==========================================
// 21. event.target
// ==========================================

eventButton.addEventListener("click", function(event)
{
    console.log("Target:", event.target);
});


// ==========================================
// 22. event.currentTarget
// ==========================================

eventButton.addEventListener("click", function(event)
{
    console.log(
        "Current Target:",
        event.currentTarget
    );
});


// ==========================================
// 23. event.type
// ==========================================

eventButton.addEventListener("click", function(event)
{
    console.log(event.type);
});


// ==========================================
// 24. event.key
// ==========================================

// event.key is available for keyboard events.

keyboardInput.addEventListener("keyup", function(event)
{
    console.log("Pressed:", event.key);
});


// ==========================================
// 25. event.code
// ==========================================

keyboardInput.addEventListener("keyup", function(event)
{
    console.log("Key Code:", event.code);
});


// ==========================================
// 26. Prevent Default
// ==========================================

const exampleLink =
    document.getElementById("exampleLink");

exampleLink.addEventListener("click", function(event)
{
    event.preventDefault();

    console.log("Link navigation prevented.");
});


// ==========================================
// 27. Form Submit Event
// ==========================================

const playerForm =
    document.getElementById("playerForm");

const playerName =
    document.getElementById("playerName");

const formMessage =
    document.getElementById("formMessage");

playerForm.addEventListener("submit", function(event)
{
    event.preventDefault();

    formMessage.textContent =
        "Welcome, " + playerName.value + "!";
});


// ==========================================
// 28. Event Bubbling
// ==========================================

const outerBox =
    document.getElementById("outerBox");

const innerButton =
    document.getElementById("innerButton");

outerBox.style.padding = "30px";
outerBox.style.border = "2px solid black";

outerBox.addEventListener("click", function()
{
    console.log("Outer box clicked.");
});

innerButton.addEventListener("click", function()
{
    console.log("Inner button clicked.");
});


// Clicking the button also triggers the outer box
// because the event bubbles upward.


// ==========================================
// 29. stopPropagation()
// ==========================================

innerButton.addEventListener("dblclick", function(event)
{
    event.stopPropagation();

    console.log("Double click propagation stopped.");
});


// ==========================================
// 30. Multiple Event Listeners
// ==========================================

clickButton.addEventListener("click", function()
{
    console.log("First listener");
});

clickButton.addEventListener("click", function()
{
    console.log("Second listener");
});


// Both listeners can respond to the same event.


// ==========================================
// 31. Named Event Function
// ==========================================

function showMessage()
{
    console.log("Hello from the event function.");
}

clickButton.addEventListener(
    "dblclick",
    showMessage
);


// ==========================================
// 32. removeEventListener()
// ==========================================

function testFunction()
{
    console.log("This listener can be removed.");
}

clickButton.addEventListener(
    "mouseenter",
    testFunction
);

clickButton.removeEventListener(
    "mouseenter",
    testFunction
);


// ==========================================
// 33. Mouse Coordinates
// ==========================================

mouseBox.addEventListener("mousemove", function(event)
{
    console.log("X:", event.clientX);
    console.log("Y:", event.clientY);
});


// ==========================================
// 34. Modifier Keys
// ==========================================

keyboardInput.addEventListener("keydown", function(event)
{
    if (event.shiftKey)
    {
        console.log("Shift is being held.");
    }

    if (event.ctrlKey)
    {
        console.log("Ctrl is being held.");
    }

    if (event.altKey)
    {
        console.log("Alt is being held.");
    }
});


// ==========================================
// 35. Practical Counter
// ==========================================

let count = 0;

const counterButton =
    document.createElement("button");

counterButton.textContent = "Increase Counter";

document.body.append(counterButton);

counterButton.addEventListener("click", function()
{
    count++;

    console.log("Counter:", count);
});


// ==========================================
// 36. Practical Character Counter
// ==========================================

const characterCounter =
    document.createElement("p");

document.body.append(characterCounter);

nameInput.addEventListener("input", function()
{
    characterCounter.textContent =
        "Characters: " + nameInput.value.length;
});


// ==========================================
// 37. Practical Keyboard Shortcut
// ==========================================

document.addEventListener("keydown", function(event)
{
    if (event.key === "Escape")
    {
        console.log("Escape pressed anywhere on the page.");
    }
});