// ==========================================
// 1. What is an Error?
// ==========================================

// An error is a problem that occurs while JavaScript is running.

console.log("Program started");

// Uncomment this to see an error:
//
// console.log(unknownVariable);

console.log("Program ended");


// ==========================================
// 2. Syntax Error
// ==========================================

// A syntax error happens when JavaScript code does not follow
// the correct syntax.

// Example:
//
// if (true {
//     console.log("Hello");
// }

// The missing ')' causes a SyntaxError.


// ==========================================
// 3. ReferenceError
// ==========================================

// A ReferenceError happens when we try to access
// a variable that does not exist.

try
{
    console.log(unknownPlayer);
}
catch (error)
{
    console.log("A ReferenceError occurred.");
}


// ==========================================
// 4. TypeError
// ==========================================

// A TypeError happens when we perform an operation
// on a value that does not support that operation.

try
{
    let player = null;

    console.log(player.name);
}
catch (error)
{
    console.log("A TypeError occurred.");
}


// ==========================================
// 5. Error Object
// ==========================================

try
{
    console.log(unknownVariable);
}
catch (error)
{
    console.log(error);
}


// ==========================================
// 6. error.name
// ==========================================

try
{
    console.log(unknownVariable);
}
catch (error)
{
    console.log(error.name);
}


// ==========================================
// 7. error.message
// ==========================================

try
{
    console.log(unknownVariable);
}
catch (error)
{
    console.log(error.message);
}


// ==========================================
// 8. error.stack
// ==========================================

try
{
    console.log(unknownVariable);
}
catch (error)
{
    console.log(error.stack);
}


// ==========================================
// 9. try...catch
// ==========================================

// Code that might produce an error is placed inside try.
//
// If an error occurs, catch handles it.

try
{
    let score = 100;

    console.log(score);
    console.log(unknownPlayer);
}
catch (error)
{
    console.log("Something went wrong.");
}


// ==========================================
// 10. try...catch with the Error Object
// ==========================================

try
{
    console.log(unknownPlayer);
}
catch (error)
{
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}


// ==========================================
// 11. finally
// ==========================================

// finally runs whether an error occurs or not.

try
{
    console.log("Trying something...");
}
catch (error)
{
    console.log("An error occurred.");
}
finally
{
    console.log("This always runs.");
}


// ==========================================
// 12. finally after an Error
// ==========================================

try
{
    console.log(unknownPlayer);
}
catch (error)
{
    console.log("Error handled.");
}
finally
{
    console.log("Cleanup completed.");
}


// ==========================================
// 13. try + catch + finally
// ==========================================

try
{
    let player = "Blade";

    console.log(player);
}
catch (error)
{
    console.log("Something went wrong.");
}
finally
{
    console.log("Operation finished.");
}


// ==========================================
// 14. throw
// ==========================================

// We can manually create an error using throw.

try
{
    throw new Error("Something went wrong!");
}
catch (error)
{
    console.log(error.message);
}


// ==========================================
// 15. Throwing a String
// ==========================================

// JavaScript technically allows throwing different values.
//
// However, throwing an Error object is recommended.

try
{
    throw "Game Over";
}
catch (error)
{
    console.log(error);
}


// ==========================================
// 16. Throwing an Error Object
// ==========================================

try
{
    throw new Error("Player health reached zero.");
}
catch (error)
{
    console.log(error.message);
}


// ==========================================
// 17. Validation with throw
// ==========================================

function checkAge(age)
{
    if (age < 18)
    {
        throw new Error("You must be at least 18 years old.");
    }

    console.log("Access granted.");
}

try
{
    checkAge(15);
}
catch (error)
{
    console.log(error.message);
}


// ==========================================
// 18. Another Validation Example
// ==========================================

function withdrawMoney(balance, amount)
{
    if (amount <= 0)
    {
        throw new Error("Amount must be greater than zero.");
    }

    if (amount > balance)
    {
        throw new Error("Insufficient balance.");
    }

    return balance - amount;
}

try
{
    let remainingBalance = withdrawMoney(5000, 7000);

    console.log("Remaining Balance:", remainingBalance);
}
catch (error)
{
    console.log("Transaction failed:", error.message);
}


// ==========================================
// 19. Custom Error Messages
// ==========================================

function login(username, password)
{
    if (username === "")
    {
        throw new Error("Username cannot be empty.");
    }

    if (password === "")
    {
        throw new Error("Password cannot be empty.");
    }

    return "Login successful.";
}

try
{
    console.log(login("Knight", ""));
}
catch (error)
{
    console.log(error.message);
}


// ==========================================
// 20. Built-in Error Types
// ==========================================

// JavaScript provides several built-in error types.

// ReferenceError
try
{
    console.log(notDefined);
}
catch (error)
{
    console.log(error.name);
}

// TypeError
try
{
    let value = null;
    value.toString();
}
catch (error)
{
    console.log(error.name);
}

// RangeError
try
{
    let number = 10;

    if (number > 5)
    {
        throw new RangeError("Number is outside the allowed range.");
    }
}
catch (error)
{
    console.log(error.name);
}


// ==========================================
// 21. RangeError Example
// ==========================================

try
{
    let array = new Array(-1);
}
catch (error)
{
    console.log(error.name);
    console.log(error.message);
}


// ==========================================
// 22. URIError
// ==========================================

// URIError can occur when an invalid URI is used.

try
{
    decodeURIComponent("%");
}
catch (error)
{
    console.log(error.name);
}


// ==========================================
// 23. JSON.parse() Error
// ==========================================

// Invalid JSON can produce a SyntaxError.

try
{
    let data = JSON.parse("{invalid json}");
    console.log(data);
}
catch (error)
{
    console.log("Invalid JSON:", error.message);
}


// ==========================================
// 24. Handling Different Errors
// ==========================================

try
{
    let player = null;

    console.log(player.name);
}
catch (error)
{
    if (error instanceof TypeError)
    {
        console.log("A TypeError occurred.");
    }
    else
    {
        console.log("Some other error occurred.");
    }
}


// ==========================================
// 25. instanceof Error
// ==========================================

try
{
    throw new Error("Test error");
}
catch (error)
{
    console.log(error instanceof Error);
}


// ==========================================
// 26. Custom Error Class
// ==========================================

class GameError extends Error
{
    constructor(message)
    {
        super(message);

        this.name = "GameError";
    }
}

try
{
    throw new GameError("Game failed to start.");
}
catch (error)
{
    console.log(error.name);
    console.log(error.message);
}


// ==========================================
// 27. Function with Error Handling
// ==========================================

function divideNumbers(a, b)
{
    if (b === 0)
    {
        throw new Error("Cannot divide by zero.");
    }

    return a / b;
}

try
{
    console.log(divideNumbers(10, 2));
}
catch (error)
{
    console.log(error.message);
}

try
{
    console.log(divideNumbers(10, 0));
}
catch (error)
{
    console.log(error.message);
}


// ==========================================
// 28. Error Handling in a Practical Example
// ==========================================

function buyItem(balance, price)
{
    if (price <= 0)
    {
        throw new Error("Invalid item price.");
    }

    if (price > balance)
    {
        throw new Error("Not enough money.");
    }

    return balance - price;
}

try
{
    let balance = 5000;

    balance = buyItem(balance, 1200);

    console.log("Purchase successful.");
    console.log("Remaining balance:", balance);
}
catch (error)
{
    console.log("Purchase failed:", error.message);
}


// ==========================================
// 29. Nested try...catch
// ==========================================

try
{
    try
    {
        console.log(unknownPlayer);
    }
    catch (error)
    {
        console.log("Inner catch handled the error.");
    }

    console.log("Outer try continues.");
}
catch (error)
{
    console.log("Outer catch handled the error.");
}


// ==========================================
// 30. Error Handling Does Not Fix the Error
// ==========================================

// catch handles the error, but it does not magically fix
// the original problem.

try
{
    let number = unknownVariable;

    console.log(number);
}
catch (error)
{
    console.log("The program detected and handled the error.");
}


// ==========================================
// 31. Practical Example: Player Health
// ==========================================

function damagePlayer(health, damage)
{
    if (damage < 0)
    {
        throw new Error("Damage cannot be negative.");
    }

    let newHealth = health - damage;

    if (newHealth < 0)
    {
        newHealth = 0;
    }

    return newHealth;
}

try
{
    let health = 100;

    health = damagePlayer(health, 40);

    console.log("Player Health:", health);
}
catch (error)
{
    console.log("Error:", error.message);
}