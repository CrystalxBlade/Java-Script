// ========================================
// 1. What are Timers?
// ========================================

// JavaScript timers allow code to run
// after a certain amount of time
// or repeatedly after a certain interval.


// ========================================
// 2. setTimeout()
// ========================================

// setTimeout() runs a function ONCE
// after a specified amount of time.

setTimeout(function () {

    console.log("Hello from setTimeout!");

}, 2000);


// The number 2000 means:
// 2000 milliseconds = 2 seconds


// ========================================
// 3. setTimeout() with Arrow Function
// ========================================

setTimeout(() => {

    console.log("This message appeared after 3 seconds.");

}, 3000);


// ========================================
// 4. setTimeout() with a Named Function
// ========================================

function greetBlade() {

    console.log("Welcome, Blade!");

}

setTimeout(greetBlade, 2000);


// Notice:
// We write greetBlade
// NOT greetBlade()


// ========================================
// 5. setTimeout() and HTML
// ========================================

const timeoutButton =
    document.getElementById("timeoutButton");

const timeoutOutput =
    document.getElementById("timeoutOutput");

timeoutButton.addEventListener("click", function () {

    timeoutOutput.textContent =
        "Wait 3 seconds...";

    setTimeout(function () {

        timeoutOutput.textContent =
            "3 seconds are over!";

    }, 3000);

});


// ========================================
// 6. Timer ID
// ========================================

const timerId = setTimeout(function () {

    console.log("This timer has finished.");

}, 5000);

console.log("Timer ID:", timerId);


// setTimeout() returns an ID.


/*
    Example:

    const timerId = setTimeout(...);

    timerId can later be used
    to cancel the timer.
*/


// ========================================
// 7. clearTimeout()
// ========================================

// clearTimeout() cancels a setTimeout()
// before it runs.

const cancelTimeoutButton =
    document.getElementById("cancelTimeoutButton");

let timeoutId;

cancelTimeoutButton.addEventListener("click", function () {

    clearTimeout(timeoutId);

    timeoutOutput.textContent =
        "Timeout cancelled.";

});


// Create the timeout when button is clicked.

timeoutButton.addEventListener("click", function () {

    timeoutId = setTimeout(function () {

        timeoutOutput.textContent =
            "Timeout finished!";

    }, 5000);

});


// ========================================
// 8. setInterval()
// ========================================

// setInterval() repeatedly runs a function
// after every specified interval.

const intervalId = setInterval(function () {

    console.log("Interval is running...");

}, 2000);


// The above code runs every 2 seconds.


// ========================================
// 9. clearInterval()
// ========================================

// clearInterval() stops a running interval.

setTimeout(function () {

    clearInterval(intervalId);

    console.log("Interval stopped.");

}, 10000);


// The interval runs for approximately 10 seconds
// and is then stopped.


// ========================================
// 10. Start and Stop Interval
// ========================================

const startIntervalButton =
    document.getElementById("startIntervalButton");

const stopIntervalButton =
    document.getElementById("stopIntervalButton");

const intervalOutput =
    document.getElementById("intervalOutput");

let intervalTimer = null;

startIntervalButton.addEventListener("click", function () {

    // Prevent multiple intervals
    if (intervalTimer !== null) {
        return;
    }

    intervalOutput.textContent =
        "Interval started.";

    intervalTimer = setInterval(function () {

        const currentTime =
            new Date().toLocaleTimeString();

        intervalOutput.textContent =
            currentTime;

    }, 1000);

});


stopIntervalButton.addEventListener("click", function () {

    if (intervalTimer !== null) {

        clearInterval(intervalTimer);

        intervalTimer = null;

        intervalOutput.textContent =
            "Interval stopped.";

    }

});


// ========================================
// 11. Simple Counter
// ========================================

const counterDisplay =
    document.getElementById("counter");

const startCounterButton =
    document.getElementById("startCounterButton");

const stopCounterButton =
    document.getElementById("stopCounterButton");

const resetCounterButton =
    document.getElementById("resetCounterButton");

let counter = 0;
let counterTimer = null;


startCounterButton.addEventListener("click", function () {

    if (counterTimer !== null) {
        return;
    }

    counterTimer = setInterval(function () {

        counter++;

        counterDisplay.textContent =
            counter;

    }, 1000);

});


stopCounterButton.addEventListener("click", function () {

    clearInterval(counterTimer);

    counterTimer = null;

});


resetCounterButton.addEventListener("click", function () {

    clearInterval(counterTimer);

    counterTimer = null;

    counter = 0;

    counterDisplay.textContent =
        counter;

});


// ========================================
// 12. Countdown
// ========================================

const countdownDisplay =
    document.getElementById("countdown");

const startCountdownButton =
    document.getElementById("startCountdownButton");

const resetCountdownButton =
    document.getElementById("resetCountdownButton");

let countdownNumber = 10;
let countdownTimer = null;


function updateCountdown() {

    countdownDisplay.textContent =
        countdownNumber;

}


startCountdownButton.addEventListener("click", function () {

    if (countdownTimer !== null) {
        return;
    }

    countdownTimer = setInterval(function () {

        countdownNumber--;

        updateCountdown();

        if (countdownNumber <= 0) {

            clearInterval(countdownTimer);

            countdownTimer = null;

            countdownDisplay.textContent =
                "Time's up!";

        }

    }, 1000);

});


resetCountdownButton.addEventListener("click", function () {

    clearInterval(countdownTimer);

    countdownTimer = null;

    countdownNumber = 10;

    updateCountdown();

});


// ========================================
// 13. Digital Clock
// ========================================

const clock =
    document.getElementById("clock");


function updateClock() {

    const now = new Date();

    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");

    clock.textContent =
        `${hours}:${minutes}:${seconds}`;

}


updateClock();

setInterval(updateClock, 1000);


// ========================================
// 14. Delayed Message
// ========================================

const messageButton =
    document.getElementById("messageButton");

const messageOutput =
    document.getElementById("messageOutput");


messageButton.addEventListener("click", function () {

    messageOutput.textContent =
        "Message will appear in 2 seconds...";

    setTimeout(function () {

        messageOutput.textContent =
            "Hello from the future!";

    }, 2000);

});


// ========================================
// 15. Passing Arguments to setTimeout()
// ========================================

function showPlayer(name) {

    console.log(`Player: ${name}`);

}

setTimeout(showPlayer, 2000, "Knight");


// Syntax:
//
// setTimeout(function, delay, argument1, argument2, ...)


// ========================================
// 16. Passing Multiple Arguments
// ========================================

function showScore(player, score) {

    console.log(`${player} scored ${score} points.`);

}

setTimeout(showScore, 2000, "Ghost", 100);


// ========================================
// 17. setInterval() with Counter
// ========================================

let number = 0;

const numberInterval =
    setInterval(function () {

        number++;

        console.log("Number:", number);

        if (number === 5) {

            clearInterval(numberInterval);

        }

    }, 1000);


// Output approximately:
//
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Number: 5


// ========================================
// 18. setTimeout() vs setInterval()
// ========================================

/*

setTimeout():

Runs once after the delay.

setInterval():

Runs repeatedly after each interval.

*/


// ========================================
// 19. Timer Delay is in Milliseconds
// ========================================

/*

1000 ms = 1 second

2000 ms = 2 seconds

5000 ms = 5 seconds

10000 ms = 10 seconds

*/


// ========================================
// 20. Converting Seconds to Milliseconds
// ========================================

const seconds = 5;

const milliseconds =
    seconds * 1000;

console.log(milliseconds);


// ========================================
// 21. Stopping a Timeout
// ========================================

const delayedAction =
    setTimeout(function () {

        console.log("This should not appear.");

    }, 5000);


// Cancel it immediately.

clearTimeout(delayedAction);


// ========================================
// 22. Stopping an Interval
// ========================================

let count = 0;

const repeatingAction =
    setInterval(function () {

        count++;

        console.log(count);

    }, 1000);


// Stop after 5 seconds.

setTimeout(function () {

    clearInterval(repeatingAction);

}, 5000);


// ========================================
// 23. Timer IDs
// ========================================

const timeoutExample =
    setTimeout(function () {

        console.log("Timeout example");

    }, 3000);

console.log("Timeout ID:", timeoutExample);


const intervalExample =
    setInterval(function () {

        console.log("Interval example");

    }, 1000);


setTimeout(function () {

    clearInterval(intervalExample);

}, 4000);


// ========================================
// 24. Important Timer Concept
// ========================================

/*

JavaScript timers do NOT guarantee that
your code will execute at the exact
millisecond you specify.

For example:

setTimeout(function () {

    console.log("Hello");

}, 1000);

means:

"Run this function after at least
approximately 1 second when JavaScript
gets a chance to execute it."

It does NOT mean:

"Run this function exactly at 1000ms."

*/