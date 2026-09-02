// ==========================================
// 09 - STRINGS
// ==========================================


// ------------------------------------------
// 1. Creating Strings
// ------------------------------------------

let name = "Blade";
let game = 'Hollow Knight';

console.log(name);
console.log(game);


// Template literals
let character = `Knight`;

console.log(character);


// ------------------------------------------
// 2. String with Quotes
// ------------------------------------------

let message1 = "Blade said, 'Hello!'";
let message2 = 'Crystal said, "Hello!"';

console.log(message1);
console.log(message2);


// ------------------------------------------
// 3. Escape Characters
// ------------------------------------------

let text1 = "Blade said \"Hello\"";
let text2 = 'It\'s a beautiful day';

console.log(text1);
console.log(text2);

// New line
let text3 = "Hello\nWorld";

console.log(text3);

// Tab
let text4 = "Hello\tWorld";

console.log(text4);


// ------------------------------------------
// 4. Template Literals
// ------------------------------------------

let player = "Knight";
let score = 100;

let result = `${player} scored ${score} points.`;

console.log(result);


// Expressions inside template literals
let a = 10;
let b = 20;

console.log(`The sum is ${a + b}`);


// ------------------------------------------
// 5. String Length
// ------------------------------------------

let word = "JavaScript";

console.log(word.length);


// ------------------------------------------
// 6. Accessing Characters
// ------------------------------------------

let characterName = "Hornet";

console.log(characterName[0]);
console.log(characterName[1]);
console.log(characterName[2]);

// Last character
console.log(characterName[characterName.length - 1]);


// ------------------------------------------
// 7. charAt()
// ------------------------------------------

let hero = "Knight";

console.log(hero.charAt(0));
console.log(hero.charAt(3));


// ------------------------------------------
// 8. at()
// ------------------------------------------

console.log(hero.at(0));
console.log(hero.at(-1)); // Last character
console.log(hero.at(-2));


// ------------------------------------------
// 9. toUpperCase()
// ------------------------------------------

let greeting = "hello blade";

console.log(greeting.toUpperCase());


// ------------------------------------------
// 10. toLowerCase()
// ------------------------------------------

let title = "JAVASCRIPT";

console.log(title.toLowerCase());


// ------------------------------------------
// 11. trim()
// ------------------------------------------

let username = "   Ghost   ";

console.log(username);
console.log(username.trim());


// ------------------------------------------
// 12. trimStart()
// ------------------------------------------

let text5 = "   Hello";

console.log(text5.trimStart());


// ------------------------------------------
// 13. trimEnd()
// ------------------------------------------

let text6 = "Hello   ";

console.log(text6.trimEnd());


// ------------------------------------------
// 14. includes()
// ------------------------------------------

let sentence = "Blade is learning JavaScript.";

console.log(sentence.includes("JavaScript"));
console.log(sentence.includes("Python"));


// ------------------------------------------
// 15. startsWith()
// ------------------------------------------

console.log(sentence.startsWith("Blade"));
console.log(sentence.startsWith("JavaScript"));


// ------------------------------------------
// 16. endsWith()
// ------------------------------------------

console.log(sentence.endsWith("JavaScript."));
console.log(sentence.endsWith("Blade"));


// ------------------------------------------
// 17. indexOf()
// ------------------------------------------

let language = "JavaScript";

console.log(language.indexOf("J"));
console.log(language.indexOf("Script"));
console.log(language.indexOf("Python"));


// -1 means the text was not found


// ------------------------------------------
// 18. lastIndexOf()
// ------------------------------------------

let repeated = "hello hello";

console.log(repeated.indexOf("hello"));
console.log(repeated.lastIndexOf("hello"));


// ------------------------------------------
// 19. slice()
// ------------------------------------------

let fruit = "Pineapple";

console.log(fruit.slice(0, 4));
console.log(fruit.slice(4));


// Negative index
console.log(fruit.slice(-5));


// ------------------------------------------
// 20. substring()
// ------------------------------------------

let word2 = "JavaScript";

console.log(word2.substring(0, 4));
console.log(word2.substring(4));


// ------------------------------------------
// 21. replace()
// ------------------------------------------

let sentence2 = "I like JavaScript.";

let newSentence = sentence2.replace("JavaScript", "C#");

console.log(newSentence);


// ------------------------------------------
// 22. replaceAll()
// ------------------------------------------

let sentence3 = "JavaScript is fun. JavaScript is powerful.";

console.log(sentence3.replaceAll("JavaScript", "JS"));


// ------------------------------------------
// 23. split()
// ------------------------------------------

let names = "Blade,Crystal,Knight,Hornet";

let nameArray = names.split(",");

console.log(nameArray);


// Split every character
let word3 = "Blade";

console.log(word3.split(""));


// ------------------------------------------
// 24. concat()
// ------------------------------------------

let firstName = "Nikko";
let lastName = "Bellic";

let fullName = firstName.concat(" ", lastName);

console.log(fullName);


// ------------------------------------------
// 25. repeat()
// ------------------------------------------

let laugh = "Ha ";

console.log(laugh.repeat(3));


// ------------------------------------------
// 26. padStart()
// ------------------------------------------

let number = "5";

console.log(number.padStart(3, "0"));


// ------------------------------------------
// 27. padEnd()
// ------------------------------------------

console.log(number.padEnd(3, "0"));


// ------------------------------------------
// 28. String Comparison
// ------------------------------------------

let x = "apple";
let y = "banana";

console.log(x === y);
console.log(x === "apple");


// ------------------------------------------
// 29. Case-Sensitive Comparison
// ------------------------------------------

let password = "Blade123";

console.log(password === "Blade123");
console.log(password === "blade123");


// ------------------------------------------
// 30. Convert String to Number
// ------------------------------------------

let numString = "100";

console.log(Number(numString));
console.log(typeof Number(numString));


// parseInt()
let integerString = "50px";

console.log(parseInt(integerString));


// parseFloat()
let decimalString = "25.50px";

console.log(parseFloat(decimalString));


// ------------------------------------------
// 31. Convert Number to String
// ------------------------------------------

let numberValue = 100;

let stringValue = String(numberValue);

console.log(stringValue);
console.log(typeof stringValue);


// toString()
let scoreValue = 500;

console.log(scoreValue.toString());


// ------------------------------------------
// 32. Checking Empty Strings
// ------------------------------------------

let empty = "";

console.log(empty.length);

if (empty.length === 0)
{
    console.log("String is empty");
}


// ------------------------------------------
// 33. Loop Through a String
// ------------------------------------------

let playerName = "Ghost";

for (let character of playerName)
{
    console.log(character);
}


// ------------------------------------------
// 34. Searching Inside a String
// ------------------------------------------

let sentence4 = "Crystal is learning JavaScript.";

if (sentence4.includes("JavaScript"))
{
    console.log("JavaScript was found!");
}


// ------------------------------------------
// 35. Practical Example: Count Vowels
// ------------------------------------------

let input = "JavaScript";

let vowels = 0;

for (let character of input.toLowerCase())
{
    if (
        character === "a" ||
        character === "e" ||
        character === "i" ||
        character === "o" ||
        character === "u"
    )
    {
        vowels++;
    }
}

console.log("Number of vowels:", vowels);


// ------------------------------------------
// 36. Reverse a String
// ------------------------------------------

let original = "Blade";

let reversed = original
    .split("")
    .reverse()
    .join("");

console.log(reversed);


// ------------------------------------------
// 37. Check Palindrome
// ------------------------------------------

let palindrome = "madam";

let reversedPalindrome = palindrome
    .split("")
    .reverse()
    .join("");

if (palindrome === reversedPalindrome)
{
    console.log("Palindrome");
}
else
{
    console.log("Not a palindrome");
}


// ------------------------------------------
// 38. Strings Are Immutable
// ------------------------------------------

let originalName = "Blade";

// This does NOT change the original string
originalName[0] = "C";

console.log(originalName);


// Strings cannot be changed directly.
// A new string must be created.

originalName = "Crystal";

console.log(originalName);


// ------------------------------------------
// END OF STRINGS
// ------------------------------------------