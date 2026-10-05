// ============================================================
// 20 - ASYNCHRONOUS JAVASCRIPT
// ============================================================


// ============================================================
// 1. Synchronous JavaScript
// ============================================================

// Synchronous code runs one statement at a time.

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");


// Output:
//
// Step 1
// Step 2
// Step 3


// ============================================================
// 2. Synchronous Functions
// ============================================================

function firstTask() {

    console.log("First task");

}

function secondTask() {

    console.log("Second task");

}

firstTask();
secondTask();


// ============================================================
// 3. What is Asynchronous JavaScript?
// ============================================================

// Asynchronous code allows JavaScript to start an operation
// and continue doing other work while waiting for that
// operation to finish.

console.log("Start");

setTimeout(() => {

    console.log("Delayed task");

}, 2000);

console.log("End");


// Output:
//
// Start
// End
// Delayed task


// ============================================================
// 4. setTimeout() and Asynchronous Code
// ============================================================

console.log("A");

setTimeout(() => {

    console.log("B");

}, 1000);

console.log("C");


// Output:
//
// A
// C
// B


// ============================================================
// 5. setTimeout(..., 0)
// ============================================================

// Even a delay of 0 does not mean "execute immediately".

console.log("First");

setTimeout(() => {

    console.log("Second");

}, 0);

console.log("Third");


// Output:
//
// First
// Third
// Second


// ============================================================
// 6. Blocking vs Non-Blocking
// ============================================================

// JavaScript normally executes code on a single main thread.

// A long synchronous operation can block other work.

// Example:

console.log("Before");

for (let i = 0; i < 100000000; i++) {

    // Heavy synchronous work
}

console.log("After");


// The browser cannot freely continue JavaScript work
// while this loop is running.


// ============================================================
// 7. Callback Functions
// ============================================================

// A callback is a function passed to another function.

function greet(name, callback) {

    console.log(`Hello, ${name}!`);

    callback();

}

function afterGreeting() {

    console.log("Greeting finished.");

}

greet("Blade", afterGreeting);


// ============================================================
// 8. Callback with setTimeout
// ============================================================

function loadPlayer(callback) {

    setTimeout(() => {

        console.log("Player data loaded.");

        callback();

    }, 1500);

}

function playerLoaded() {

    console.log("Player is ready.");

}

loadPlayer(playerLoaded);


// ============================================================
// 9. Callback with Arguments
// ============================================================

function getScore(callback) {

    setTimeout(() => {

        const score = 500;

        callback(score);

    }, 1000);

}

getScore((score) => {

    console.log(`Score: ${score}`);

});


// ============================================================
// 10. Multiple Asynchronous Tasks
// ============================================================

setTimeout(() => {

    console.log("Task 1 finished.");

}, 1000);

setTimeout(() => {

    console.log("Task 2 finished.");

}, 2000);

setTimeout(() => {

    console.log("Task 3 finished.");

}, 3000);


// ============================================================
// 11. Callbacks in Sequence
// ============================================================

function taskOne(callback) {

    setTimeout(() => {

        console.log("Task One completed.");

        callback();

    }, 1000);

}

function taskTwo(callback) {

    setTimeout(() => {

        console.log("Task Two completed.");

        callback();

    }, 1000);

}

function taskThree() {

    setTimeout(() => {

        console.log("Task Three completed.");

    }, 1000);

}

taskOne(() => {

    taskTwo(() => {

        taskThree();

    });

});


// ============================================================
// 12. Callback Hell
// ============================================================

// Too many nested callbacks can become difficult to read.

function stepOne(callback) {

    setTimeout(() => {

        console.log("Step 1");

        callback();

    }, 500);

}

function stepTwo(callback) {

    setTimeout(() => {

        console.log("Step 2");

        callback();

    }, 500);

}

function stepThree(callback) {

    setTimeout(() => {

        console.log("Step 3");

        callback();

    }, 500);

}

stepOne(() => {

    stepTwo(() => {

        stepThree(() => {

            console.log("All steps complete.");

        });

    });

});


// ============================================================
// 13. Promise Basics
// ============================================================

// A Promise represents a future result.

const simplePromise = new Promise((resolve, reject) => {

    resolve("Promise completed!");

});

simplePromise.then((result) => {

    console.log(result);

});


// ============================================================
// 14. Promise States
// ============================================================

// A Promise has three main states:
//
// Pending
// Fulfilled
// Rejected


const promiseStates = new Promise((resolve, reject) => {

    // Initially: Pending

    setTimeout(() => {

        resolve("Promise fulfilled.");

    }, 1000);

});


// ============================================================
// 15. Promise Resolve
// ============================================================

const successfulPromise = new Promise((resolve) => {

    resolve("Success!");

});

successfulPromise.then((result) => {

    console.log(result);

});


// ============================================================
// 16. Promise Reject
// ============================================================

const failedPromise = new Promise((resolve, reject) => {

    reject("Something went wrong.");

});

failedPromise.catch((error) => {

    console.log(error);

});


// ============================================================
// 17. Promise with setTimeout
// ============================================================

function loadData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data loaded successfully.");

        }, 2000);

    });

}

loadData().then((data) => {

    console.log(data);

});


// ============================================================
// 18. Promise with Success and Failure
// ============================================================

function checkPlayerScore(score) {

    return new Promise((resolve, reject) => {

        if (score >= 50) {

            resolve("Player passed.");

        } else {

            reject("Player failed.");

        }

    });

}

checkPlayerScore(80)
    .then((message) => {

        console.log(message);

    })
    .catch((error) => {

        console.log(error);

    });


// ============================================================
// 19. then()
// ============================================================

const playerPromise = new Promise((resolve) => {

    resolve("Blade");

});

playerPromise.then((playerName) => {

    console.log(`Player: ${playerName}`);

});


// ============================================================
// 20. catch()
// ============================================================

const errorPromise = new Promise((resolve, reject) => {

    reject(new Error("Player could not be loaded."));

});

errorPromise.catch((error) => {

    console.log(error.message);

});


// ============================================================
// 21. finally()
// ============================================================

const gamePromise = new Promise((resolve) => {

    resolve("Game loaded.");

});

gamePromise
    .then((message) => {

        console.log(message);

    })
    .catch((error) => {

        console.log(error);

    })
    .finally(() => {

        console.log("Operation finished.");

    });


// ============================================================
// 22. Promise Chaining
// ============================================================

Promise.resolve(10)

    .then((number) => {

        console.log(`First value: ${number}`);

        return number * 2;

    })

    .then((number) => {

        console.log(`Second value: ${number}`);

        return number + 10;

    })

    .then((number) => {

        console.log(`Third value: ${number}`);

    });


// ============================================================
// 23. Promise Chaining with Functions
// ============================================================

function getPlayer() {

    return Promise.resolve("Ghost");

}

function getLevel(playerName) {

    return Promise.resolve(
        `${playerName} is level 25.`
    );

}

getPlayer()

    .then((playerName) => {

        console.log(playerName);

        return getLevel(playerName);

    })

    .then((levelInfo) => {

        console.log(levelInfo);

    });


// ============================================================
// 24. Returning a Promise from then()
// ============================================================

function firstOperation() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("First operation complete.");

        }, 1000);

    });

}

function secondOperation() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Second operation complete.");

        }, 1000);

    });

}

firstOperation()

    .then((message) => {

        console.log(message);

        return secondOperation();

    })

    .then((message) => {

        console.log(message);

    });


// ============================================================
// 25. Error Handling in Promise Chains
// ============================================================

function riskyOperation() {

    return new Promise((resolve, reject) => {

        const success = false;

        if (success) {

            resolve("Operation succeeded.");

        } else {

            reject(new Error("Operation failed."));

        }

    });

}

riskyOperation()

    .then((result) => {

        console.log(result);

    })

    .catch((error) => {

        console.log(error.message);

    });


// ============================================================
// 26. async Function
// ============================================================

// An async function always returns a Promise.

async function sayHelloAsync() {

    return "Hello from async function.";

}

sayHelloAsync().then((message) => {

    console.log(message);

});


// ============================================================
// 27. async Function Returning a Number
// ============================================================

async function getNumber() {

    return 100;

}

getNumber().then((number) => {

    console.log(number);

});


// ============================================================
// 28. await
// ============================================================

// await waits for a Promise inside an async function.

function getMessage() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Message received.");

        }, 1500);

    });

}

async function showMessage() {

    const message = await getMessage();

    console.log(message);

}

showMessage();


// ============================================================
// 29. async/await Sequence
// ============================================================

function taskA() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Task A complete.");

        }, 1000);

    });

}

function taskB() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Task B complete.");

        }, 1000);

    });

}

async function runTasks() {

    const resultA = await taskA();

    console.log(resultA);

    const resultB = await taskB();

    console.log(resultB);

}

runTasks();


// ============================================================
// 30. try/catch with async/await
// ============================================================

function riskyTask() {

    return new Promise((resolve, reject) => {

        const success = false;

        if (success) {

            resolve("Task successful.");

        } else {

            reject(new Error("Task failed."));

        }

    });

}

async function runRiskyTask() {

    try {

        const result = await riskyTask();

        console.log(result);

    } catch (error) {

        console.log(
            `Error: ${error.message}`
        );

    }

}

runRiskyTask();


// ============================================================
// 31. async/await with Multiple Tasks
// ============================================================

function getPlayerData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                name: "Crystal",
                level: 20
            });

        }, 1000);

    });

}

async function displayPlayer() {

    const player = await getPlayerData();

    console.log(player.name);
    console.log(player.level);

}

displayPlayer();


// ============================================================
// 32. Sequential vs Parallel Operations
// ============================================================

// Sequential:
//
// Task A finishes
//       ↓
// Task B starts
//
// This can take longer.

function taskOneAsync() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Task One");

        }, 2000);

    });

}

function taskTwoAsync() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Task Two");

        }, 2000);

    });

}

async function sequentialExample() {

    const start = Date.now();

    const result1 = await taskOneAsync();

    const result2 = await taskTwoAsync();

    console.log(result1);
    console.log(result2);

    console.log(
        `Sequential time: ${Date.now() - start} ms`
    );

}


// This takes roughly 4 seconds.
//
// sequentialExample();


// ============================================================
// 33. Promise.all()
// ============================================================

// Promise.all() allows multiple promises
// to run at the same time.

async function parallelExample() {

    const start = Date.now();

    const results = await Promise.all([

        taskOneAsync(),
        taskTwoAsync()

    ]);

    console.log(results);

    console.log(
        `Parallel time: ${Date.now() - start} ms`
    );

}

parallelExample();


// ============================================================
// 34. Promise.all() with Different Results
// ============================================================

const promise1 = Promise.resolve("Blade");
const promise2 = Promise.resolve("Crystal");
const promise3 = Promise.resolve("Knight");

Promise.all([
    promise1,
    promise2,
    promise3
])
.then((results) => {

    console.log(results);

});


// ============================================================
// 35. Promise.all() Failure
// ============================================================

const success = Promise.resolve("Success");

const failure = Promise.reject(
    new Error("Something failed.")
);

Promise.all([
    success,
    failure
])
.then((results) => {

    console.log(results);

})
.catch((error) => {

    console.log(error.message);

});


// ============================================================
// 36. Promise.race()
// ============================================================

// Promise.race() returns the first settled Promise.

const fastPromise = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Fast Promise");

    }, 1000);

});

const slowPromise = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Slow Promise");

    }, 3000);

});

Promise.race([
    fastPromise,
    slowPromise
])
.then((result) => {

    console.log(result);

});


// ============================================================
// 37. Promise.allSettled()
// ============================================================

// allSettled waits for every Promise,
// whether it succeeds or fails.

const result1 = Promise.resolve("Success");
const result2 = Promise.reject("Failure");

Promise.allSettled([
    result1,
    result2
])
.then((results) => {

    console.log(results);

});


// ============================================================
// 38. Event Loop
// ============================================================

// JavaScript uses:
//
// Call Stack
// Web APIs
// Callback Queue
// Microtask Queue
// Event Loop
//
// to coordinate asynchronous operations.

console.log("Start");

setTimeout(() => {

    console.log("Timeout");

}, 0);

Promise.resolve().then(() => {

    console.log("Promise");

});

console.log("End");


// Expected order:
//
// Start
// End
// Promise
// Timeout
//
// Promise callbacks use the microtask queue,
// which is processed before timer callbacks
// in this situation.


// ============================================================
// 39. Call Stack Example
// ============================================================

function third() {

    console.log("Third");

}

function second() {

    third();

    console.log("Second");

}

function first() {

    second();

    console.log("First");

}

first();


// Output:
//
// Third
// Second
// First


// ============================================================
// 40. Microtask Example
// ============================================================

console.log("One");

Promise.resolve().then(() => {

    console.log("Two");

});

console.log("Three");


// Output:
//
// One
// Three
// Two


// ============================================================
// 41. Timer vs Promise
// ============================================================

console.log("Start");

setTimeout(() => {

    console.log("Timer");

}, 0);

Promise.resolve().then(() => {

    console.log("Promise");

});

console.log("End");


// Output:
//
// Start
// End
// Promise
// Timer


// ============================================================
// 42. Practical Loading Example
// ============================================================

function loadGameData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({

                player: "Blade",
                level: 15,
                score: 2500

            });

        }, 2000);

    });

}

async function startGame() {

    console.log("Loading game...");

    const data = await loadGameData();

    console.log("Game loaded!");

    console.log(data);

}

startGame();


// ============================================================
// 43. Practical Login Example
// ============================================================

function login(username, password) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (
                username === "Blade" &&
                password === "1234"
            ) {

                resolve("Login successful.");

            } else {

                reject(
                    new Error("Invalid username or password.")
                );

            }

        }, 1000);

    });

}

async function performLogin() {

    try {

        const message = await login(
            "Blade",
            "1234"
        );

        console.log(message);

    } catch (error) {

        console.log(error.message);

    }

}

performLogin();


// ============================================================
// 44. DOM Async Example
// ============================================================

const startButton =
    document.getElementById("startButton");

const output =
    document.getElementById("output");

startButton.addEventListener("click", () => {

    output.textContent = "Loading...";

    setTimeout(() => {

        output.textContent =
            "Async operation completed!";

    }, 2000);

});


// ============================================================
// 45. Promise Button
// ============================================================

const promiseButton =
    document.getElementById("promiseButton");

promiseButton.addEventListener("click", () => {

    output.textContent =
        "Starting Promise...";

    const promise = new Promise((resolve) => {

        setTimeout(() => {

            resolve("Promise completed!");

        }, 2000);

    });

    promise.then((message) => {

        output.textContent = message;

    });

});


// ============================================================
// 46. Async/Await Button
// ============================================================

const asyncAwaitButton =
    document.getElementById("asyncAwaitButton");

asyncAwaitButton.addEventListener(
    "click",
    async () => {

        output.textContent =
            "Running async/await...";

        try {

            const result = await new Promise(
                (resolve) => {

                    setTimeout(() => {

                        resolve(
                            "Async/await completed!"
                        );

                    }, 2000);

                }
            );

            output.textContent = result;

        } catch (error) {

            output.textContent =
                error.message;

        }

    }
);


// ============================================================
// 47. Important Reminder
// ============================================================

// async/await does NOT make JavaScript synchronous.
//
// It provides cleaner syntax for working
// with asynchronous operations.


// ============================================================
// END OF ASYNCHRONOUS JAVASCRIPT
// ============================================================