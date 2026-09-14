// ==========================================
// 1. What is the DOM?
// ==========================================

// DOM = Document Object Model

// The browser converts HTML into a tree of objects.
//
// HTML
//  ↓
// DOM
//  ↓
// JavaScript can interact with the page.


// ==========================================
// 2. The document Object
// ==========================================

// JavaScript provides a special object called `document`.
//
// It represents the current HTML document.

console.log(document);


// ==========================================
// 3. document.title
// ==========================================

console.log(document.title);


// Change the page title

document.title = "DOM Learning";


// ==========================================
// 4. document.body
// ==========================================

console.log(document.body);


// Change the body background

document.body.style.backgroundColor = "lightgray";


// ==========================================
// 5. getElementById()
// ==========================================

// Finds an element using its id.

const heading = document.getElementById("mainHeading");

console.log(heading);


// ==========================================
// 6. Reading textContent
// ==========================================

console.log(heading.textContent);


// ==========================================
// 7. Changing textContent
// ==========================================

heading.textContent = "Welcome to the DOM!";


// ==========================================
// 8. innerText
// ==========================================

const message = document.getElementById("message");

console.log(message.innerText);


// Change visible text

message.innerText = "JavaScript changed this paragraph.";


// ==========================================
// 9. innerHTML
// ==========================================

// innerHTML can read HTML inside an element.

const box = document.getElementById("box");

console.log(box.innerHTML);


// We can also replace the HTML.

box.innerHTML = "<strong>New HTML Content</strong>";


// ==========================================
// 10. textContent vs innerHTML
// ==========================================

// textContent treats content as text.

message.textContent = "<strong>Hello</strong>";


// innerHTML interprets HTML tags.

message.innerHTML = "<strong>Hello</strong>";


// ==========================================
// 11. querySelector()
// ==========================================

// Finds the first element matching a CSS selector.

const firstTitle = document.querySelector(".title");

console.log(firstTitle);


// ID selector

const headingAgain = document.querySelector("#mainHeading");

console.log(headingAgain);


// Tag selector

const paragraph = document.querySelector("p");

console.log(paragraph);


// ==========================================
// 12. querySelectorAll()
// ==========================================

// Finds all matching elements.

const titles = document.querySelectorAll(".title");

console.log(titles);


// ==========================================
// 13. NodeList
// ==========================================

// querySelectorAll() returns a NodeList.

console.log(titles.length);


// Access individual elements

console.log(titles[0]);
console.log(titles[1]);


// ==========================================
// 14. Looping through querySelectorAll()
// ==========================================

titles.forEach(function(title)
{
    console.log(title.textContent);
});


// ==========================================
// 15. Changing Multiple Elements
// ==========================================

titles.forEach(function(title)
{
    title.textContent = "Updated Title";
});


// ==========================================
// 16. getElementsByClassName()
// ==========================================

const titleCollection = document.getElementsByClassName("title");

console.log(titleCollection);


// Access elements

console.log(titleCollection[0]);


// ==========================================
// 17. getElementsByTagName()
// ==========================================

const allParagraphs = document.getElementsByTagName("p");

console.log(allParagraphs);


// ==========================================
// 18. Changing CSS with style
// ==========================================

heading.style.color = "blue";
heading.style.fontSize = "40px";

message.style.backgroundColor = "white";
message.style.padding = "10px";


// ==========================================
// 19. Multiple CSS Properties
// ==========================================

box.style.border = "2px solid black";
box.style.padding = "20px";
box.style.marginTop = "20px";


// ==========================================
// 20. CSS Property Names
// ==========================================

// CSS:

// background-color

// JavaScript:

// backgroundColor

box.style.backgroundColor = "yellow";
box.style.borderRadius = "10px";


// ==========================================
// 21. className
// ==========================================

console.log(box.className);


// Set a class

box.className = "game-box";


// ==========================================
// 22. classList
// ==========================================

console.log(box.classList);


// Add a class

box.classList.add("active");


// Remove a class

box.classList.remove("active");


// Toggle a class

box.classList.toggle("active");


// Check whether class exists

console.log(box.classList.contains("active"));


// ==========================================
// 23. getAttribute()
// ==========================================

// Get an HTML attribute.

const input = document.getElementById("nameInput");

console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));


// ==========================================
// 24. setAttribute()
// ==========================================

// Change or create an attribute.

input.setAttribute("placeholder", "Enter your username");


// ==========================================
// 25. hasAttribute()
// ==========================================

console.log(input.hasAttribute("type"));


// ==========================================
// 26. removeAttribute()
// ==========================================

input.removeAttribute("placeholder");


// Add it again

input.setAttribute("placeholder", "Enter your name");


// ==========================================
// 27. Reading Input Value
// ==========================================

console.log(input.value);


// ==========================================
// 28. Changing Input Value
// ==========================================

input.value = "Blade";


// ==========================================
// 29. Creating an Element
// ==========================================

// createElement() creates a new DOM element.

const newParagraph = document.createElement("p");

newParagraph.textContent = "This paragraph was created with JavaScript.";

console.log(newParagraph);


// ==========================================
// 30. append()
// ==========================================

document.body.append(newParagraph);


// ==========================================
// 31. appendChild()
// ==========================================

const anotherParagraph = document.createElement("p");

anotherParagraph.textContent = "Another paragraph.";

document.body.appendChild(anotherParagraph);


// ==========================================
// 32. prepend()
// ==========================================

const topMessage = document.createElement("p");

topMessage.textContent = "This appears at the beginning.";

document.body.prepend(topMessage);


// ==========================================
// 33. Creating a Div
// ==========================================

const gameBox = document.createElement("div");

gameBox.textContent = "Game Box";

gameBox.style.padding = "20px";
gameBox.style.border = "2px solid black";

document.body.append(gameBox);


// ==========================================
// 34. Creating an Element with a Class
// ==========================================

const playerName = document.createElement("h2");

playerName.textContent = "Player: Knight";

playerName.classList.add("player-name");

document.body.append(playerName);


// ==========================================
// 35. append() Multiple Items
// ==========================================

const container = document.getElementById("container");

const firstText = document.createElement("p");
const secondText = document.createElement("p");

firstText.textContent = "First new paragraph.";
secondText.textContent = "Second new paragraph.";

container.append(firstText, secondText);


// ==========================================
// 36. remove()
// ==========================================

const paragraphToRemove = document.createElement("p");

paragraphToRemove.textContent = "This will be removed.";

document.body.append(paragraphToRemove);

paragraphToRemove.remove();


// ==========================================
// 37. removeChild()
// ==========================================

const oldParagraph = document.createElement("p");

oldParagraph.textContent = "This paragraph will also be removed.";

container.append(oldParagraph);

container.removeChild(oldParagraph);


// ==========================================
// 38. parentElement
// ==========================================

console.log(box.parentElement);


// ==========================================
// 39. children
// ==========================================

console.log(container.children);


// ==========================================
// 40. firstElementChild
// ==========================================

console.log(container.firstElementChild);


// ==========================================
// 41. lastElementChild
// ==========================================

console.log(container.lastElementChild);


// ==========================================
// 42. nextElementSibling
// ==========================================

console.log(heading.nextElementSibling);


// ==========================================
// 43. previousElementSibling
// ==========================================

console.log(message.previousElementSibling);


// ==========================================
// 44. Creating a List
// ==========================================

const list = document.createElement("ul");

const item1 = document.createElement("li");
const item2 = document.createElement("li");
const item3 = document.createElement("li");

item1.textContent = "Sword";
item2.textContent = "Shield";
item3.textContent = "Potion";

list.append(item1, item2, item3);

document.body.append(list);


// ==========================================
// 45. Creating Multiple Elements with a Loop
// ==========================================

const players = [
    "Blade",
    "Crystal",
    "Ghost",
    "Trevor"
];

const playerList = document.createElement("ul");

for (const player of players)
{
    const listItem = document.createElement("li");

    listItem.textContent = player;

    playerList.append(listItem);
}

document.body.append(playerList);


// ==========================================
// 46. cloneNode()
// ==========================================

const originalBox = document.createElement("div");

originalBox.textContent = "Original Box";

document.body.append(originalBox);

const clonedBox = originalBox.cloneNode(true);

clonedBox.textContent = "Cloned Box";

document.body.append(clonedBox);


// ==========================================
// 47. document.createTextNode()
// ==========================================

const text = document.createTextNode(
    "This text node was created with JavaScript."
);

document.body.append(text);


// ==========================================
// 48. Checking if Element Exists
// ==========================================

const result = document.querySelector("#doesNotExist");

console.log(result);


// If an element doesn't exist,
// querySelector() returns null.


// ==========================================
// 49. Safe DOM Access
// ==========================================

const unknownElement = document.querySelector("#unknown");

if (unknownElement !== null)
{
    unknownElement.textContent = "Hello";
}
else
{
    console.log("Element was not found.");
}


// ==========================================
// 50. Practical Example
// ==========================================

const output = document.getElementById("output");

input.value = "";

input.addEventListener("input", function()
{
    output.textContent = "Hello, " + input.value;
});