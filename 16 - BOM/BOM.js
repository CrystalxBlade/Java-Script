// ========================================
// 1. What is BOM?
// ========================================

// BOM = Browser Object Model

// BOM allows JavaScript to interact
// with the browser environment.

// The main BOM object is:
// window


// ========================================
// 2. window Object
// ========================================

console.log(window);


// In a browser:

console.log(window.document);


// The document is part of the Window object.


// ========================================
// 3. window Properties
// ========================================

console.log(window.innerWidth);
console.log(window.innerHeight);


// ========================================
// 4. Window Width and Height
// ========================================

const windowButton =
    document.getElementById("windowButton");

const windowOutput =
    document.getElementById("windowOutput");


windowButton.addEventListener("click", function () {

    windowOutput.textContent =
        `Width: ${window.innerWidth}px, Height: ${window.innerHeight}px`;

});


// ========================================
// 5. window.innerWidth
// ========================================

console.log(
    "Browser width:",
    window.innerWidth
);


// ========================================
// 6. window.innerHeight
// ========================================

console.log(
    "Browser height:",
    window.innerHeight
);


// ========================================
// 7. resize Event
// ========================================

window.addEventListener("resize", function () {

    console.log(
        "New width:",
        window.innerWidth
    );

    console.log(
        "New height:",
        window.innerHeight
    );

});


// ========================================
// 8. Browser Dimensions
// ========================================

const dimensionsOutput =
    document.getElementById("dimensionsOutput");


function updateDimensions() {

    dimensionsOutput.textContent =
        `Width: ${window.innerWidth}px | Height: ${window.innerHeight}px`;

}


updateDimensions();

window.addEventListener(
    "resize",
    updateDimensions
);


// ========================================
// 9. window.open()
// ========================================

// Opens a new browser window/tab depending
// on browser settings.

const newWindow =
    window.open(
        "https://example.com",
        "_blank"
    );


// We immediately close it for this example.

// newWindow.close();


// The above example is intentionally
// commented out in practical use because
// browsers may block automatic popups.


// ========================================
// 10. window.close()
// ========================================

// A script generally cannot freely close
// normal browser tabs that the user opened.

// Example:

// window.close();


// ========================================
// 11. alert()
// ========================================

const alertButton =
    document.getElementById("alertButton");


alertButton.addEventListener("click", function () {

    alert("Hello from the browser!");

});


// ========================================
// 12. confirm()
// ========================================

const confirmButton =
    document.getElementById("confirmButton");

const dialogOutput =
    document.getElementById("dialogOutput");


confirmButton.addEventListener("click", function () {

    const result =
        confirm("Do you want to continue?");

    if (result) {

        dialogOutput.textContent =
            "You selected OK.";

    } else {

        dialogOutput.textContent =
            "You selected Cancel.";

    }

});


// ========================================
// 13. prompt()
// ========================================

const promptButton =
    document.getElementById("promptButton");


promptButton.addEventListener("click", function () {

    const playerName =
        prompt("Enter your player name:");

    if (playerName !== null) {

        dialogOutput.textContent =
            `Hello, ${playerName}!`;

    } else {

        dialogOutput.textContent =
            "You cancelled the prompt.";

    }

});


// ========================================
// 14. window.location
// ========================================

console.log(window.location);


// ========================================
// 15. Current URL
// ========================================

const locationButton =
    document.getElementById("locationButton");

const locationOutput =
    document.getElementById("locationOutput");


locationButton.addEventListener("click", function () {

    locationOutput.textContent =
        window.location.href;

});


// ========================================
// 16. location.href
// ========================================

console.log(
    "Current URL:",
    window.location.href
);


// ========================================
// 17. location.protocol
// ========================================

console.log(
    "Protocol:",
    window.location.protocol
);


// Example:
// http:
// https:


// ========================================
// 18. location.hostname
// ========================================

console.log(
    "Hostname:",
    window.location.hostname
);


// Example:
// example.com


// ========================================
// 19. location.pathname
// ========================================

console.log(
    "Path:",
    window.location.pathname
);


// ========================================
// 20. location.port
// ========================================

console.log(
    "Port:",
    window.location.port
);


// ========================================
// 21. location.search
// ========================================

console.log(
    "Query string:",
    window.location.search
);


// Example:
// ?name=Blade&level=10


// ========================================
// 22. location.hash
// ========================================

console.log(
    "Hash:",
    window.location.hash
);


// Example:
// #about


// ========================================
// 23. Changing location.href
// ========================================

// This would navigate to another website.

// window.location.href =
//     "https://example.com";


// Keep navigation examples commented out
// while learning.


// ========================================
// 24. location.assign()
// ========================================

// Navigates to a new URL.

// window.location.assign(
//     "https://example.com"
// );


// ========================================
// 25. location.replace()
// ========================================

// Navigates to another URL and replaces
// the current history entry.

// window.location.replace(
//     "https://example.com"
// );


// ========================================
// 26. location.reload()
// ========================================

// Reloads the current page.

// window.location.reload();


// ========================================
// 27. navigator Object
// ========================================

console.log(window.navigator);


// ========================================
// 28. navigator.userAgent
// ========================================

console.log(
    "User Agent:",
    navigator.userAgent
);


// ========================================
// 29. navigator.language
// ========================================

console.log(
    "Language:",
    navigator.language
);


// ========================================
// 30. navigator.languages
// ========================================

console.log(
    "Languages:",
    navigator.languages
);


// ========================================
// 31. navigator.onLine
// ========================================

console.log(
    "Online:",
    navigator.onLine
);


// ========================================
// 32. Navigator Information
// ========================================

const navigatorButton =
    document.getElementById("navigatorButton");

const navigatorOutput =
    document.getElementById("navigatorOutput");


navigatorButton.addEventListener("click", function () {

    navigatorOutput.textContent =
        `Language: ${navigator.language} | Online: ${navigator.onLine}`;

});


// ========================================
// 33. Online Event
// ========================================

window.addEventListener("online", function () {

    console.log("Internet connection restored.");

});


// ========================================
// 34. Offline Event
// ========================================

window.addEventListener("offline", function () {

    console.log("Internet connection lost.");

});


// ========================================
// 35. Screen Object
// ========================================

console.log(window.screen);


// ========================================
// 36. Screen Width
// ========================================

console.log(
    "Screen width:",
    screen.width
);


// ========================================
// 37. Screen Height
// ========================================

console.log(
    "Screen height:",
    screen.height
);


// ========================================
// 38. Available Screen Width
// ========================================

console.log(
    "Available width:",
    screen.availWidth
);


// ========================================
// 39. Available Screen Height
// ========================================

console.log(
    "Available height:",
    screen.availHeight
);


// ========================================
// 40. Screen Information
// ========================================

const screenButton =
    document.getElementById("screenButton");

const screenOutput =
    document.getElementById("screenOutput");


screenButton.addEventListener("click", function () {

    screenOutput.textContent =
        `Screen: ${screen.width}px × ${screen.height}px`;

});


// ========================================
// 41. Browser History
// ========================================

console.log(window.history);


// ========================================
// 42. history.length
// ========================================

console.log(
    "History entries:",
    history.length
);


// ========================================
// 43. history.back()
// ========================================

// Goes back one page.

// history.back();


// ========================================
// 44. history.forward()
// ========================================

// Goes forward one page.

// history.forward();


// ========================================
// 45. history.go()
// ========================================

// history.go(-1);
// Back one page

// history.go(1);
// Forward one page


// ========================================
// 46. History Buttons
// ========================================

const backButton =
    document.getElementById("backButton");

const forwardButton =
    document.getElementById("forwardButton");


backButton.addEventListener("click", function () {

    history.back();

});


forwardButton.addEventListener("click", function () {

    history.forward();

});


// ========================================
// 47. Scroll Position
// ========================================

const scrollButton =
    document.getElementById("scrollButton");

const scrollOutput =
    document.getElementById("scrollOutput");


scrollButton.addEventListener("click", function () {

    scrollOutput.textContent =
        `X: ${window.scrollX}px | Y: ${window.scrollY}px`;

});


// ========================================
// 48. Scroll Event
// ========================================

window.addEventListener("scroll", function () {

    console.log(
        "Scroll Y:",
        window.scrollY
    );

});


// ========================================
// 49. scrollTo()
// ========================================

// Scrolls to a specific position.

// window.scrollTo(0, 500);


// ========================================
// 50. scrollBy()
// ========================================

// Scrolls relative to the current position.

// window.scrollBy(0, 200);


// ========================================
// 51. Scroll to Top
// ========================================

// window.scrollTo({
//     top: 0,
//     behavior: "smooth"
// });


// ========================================
// 52. Browser Information Summary
// ========================================

console.log("===== BROWSER INFORMATION =====");

console.log("URL:", location.href);

console.log("Language:", navigator.language);

console.log("Online:", navigator.onLine);

console.log("Browser Width:", window.innerWidth);

console.log("Browser Height:", window.innerHeight);

console.log("Screen Width:", screen.width);

console.log("Screen Height:", screen.height);

console.log("History Length:", history.length);


// ========================================
// 53. BOM Objects
// ========================================

/*

Important BOM objects:

window
location
history
navigator
screen

*/


// ========================================
// 54. window is the Global Object
// ========================================

// In a browser, many global objects
// are properties of window.

console.log(window.location === location);
console.log(window.history === history);
console.log(window.navigator === navigator);
console.log(window.screen === screen);


// ========================================
// 55. DOM vs BOM
// ========================================

/*

DOM:

document
elements
HTML
CSS
page structure

BOM:

window
location
history
navigator
screen
browser dialogs

*/


// ========================================
// 56. Final Example
// ========================================

function showBrowserInfo() {

    console.log("Current URL:", location.href);

    console.log(
        "Browser size:",
        `${window.innerWidth} x ${window.innerHeight}`
    );

    console.log(
        "Language:",
        navigator.language
    );

    console.log(
        "Online:",
        navigator.onLine
    );

}

showBrowserInfo();