
// ============================================================
// 22 - JSON IN JAVASCRIPT
// ============================================================


// ============================================================
// 1. What is JSON?
// ============================================================

// JSON = JavaScript Object Notation.
//
// JSON is a text format used to store and exchange data.
//
// Example JSON:
//
// {
//     "name": "Blade",
//     "level": 25
// }


// ============================================================
// 2. JavaScript Object vs JSON
// ============================================================

// JavaScript object:

const player = {
    name: "Blade",
    level: 25,
    score: 1500
};

console.log(player);


// JSON representation:
//
// {
//     "name": "Blade",
//     "level": 25,
//     "score": 1500
// }


// ============================================================
// 3. JSON.stringify()
// ============================================================

// Converts a JavaScript value into a JSON string.

const playerJSON = JSON.stringify(player);

console.log(playerJSON);

console.log(typeof playerJSON);


// Output type:
//
// string


// ============================================================
// 4. JSON.stringify() with Arrays
// ============================================================

const characters = [
    "Blade",
    "Crystal",
    "Knight",
    "Ghost"
];

const charactersJSON = JSON.stringify(characters);

console.log(charactersJSON);


// ============================================================
// 5. JSON.stringify() with Numbers and Booleans
// ============================================================

console.log(JSON.stringify(100));

console.log(JSON.stringify(true));

console.log(JSON.stringify(null));


// ============================================================
// 6. Pretty-Printed JSON
// ============================================================

// The third argument controls indentation.

const prettyJSON = JSON.stringify(
    player,
    null,
    4
);

console.log(prettyJSON);


// ============================================================
// 7. JSON.parse()
// ============================================================

// Converts a JSON string into a JavaScript value.

const jsonString = '{"name":"Crystal","level":30}';

const parsedPlayer = JSON.parse(jsonString);

console.log(parsedPlayer);

console.log(parsedPlayer.name);

console.log(parsedPlayer.level);


// ============================================================
// 8. JSON.parse() with Arrays
// ============================================================

const namesJSON = '["Blade","Crystal","Knight"]';

const names = JSON.parse(namesJSON);

console.log(names);

console.log(names[0]);


// ============================================================
// 9. JSON.parse() with Different JSON Values
// ============================================================

console.log(JSON.parse("100"));

console.log(JSON.parse("true"));

console.log(JSON.parse("null"));

console.log(JSON.parse('"Ghost"'));


// ============================================================
// 10. JSON Syntax Rules
// ============================================================

// Valid JSON:

const validJSON = '{"name":"Blade","level":25}';

console.log(JSON.parse(validJSON));


// Invalid JSON examples:
//
// {name: "Blade"}         Keys need double quotes.
// {'name': "Blade"}       Strings need double quotes.
// {"level": 25,}          Trailing comma is invalid.
// {"level": undefined}    undefined is not a JSON value.
// {"level": 25 // comment} Comments are not allowed.


// ============================================================
// 11. JSON Data Types
// ============================================================

// JSON supports:
//
// String
// Number
// Boolean
// null
// Object
// Array

const dataTypesJSON = `{
    "name": "Knight",
    "level": 20,
    "active": true,
    "reward": null,
    "skills": ["jump", "attack"],
    "equipment": {
        "weapon": "sword"
    }
}`;

const dataTypes = JSON.parse(dataTypesJSON);

console.log(dataTypes);


// ============================================================
// 12. Accessing Nested JSON Data
// ============================================================

const gameJSON = `{
    "player": {
        "name": "Ghost",
        "level": 40
    },
    "inventory": {
        "weapon": "rifle",
        "potions": 3
    }
}`;

const gameData = JSON.parse(gameJSON);

console.log(gameData.player.name);

console.log(gameData.player.level);

console.log(gameData.inventory.weapon);

console.log(gameData.inventory.potions);


// ============================================================
// 13. JSON with Arrays of Objects
// ============================================================

const teamJSON = `[
    {
        "name": "Blade",
        "score": 900
    },
    {
        "name": "Crystal",
        "score": 1200
    },
    {
        "name": "Knight",
        "score": 750
    }
]`;

const team = JSON.parse(teamJSON);

console.log(team);

console.log(team[0].name);

console.log(team[1].score);


// ============================================================
// 14. Looping Through Parsed JSON
// ============================================================

team.forEach((member) => {
    console.log(member.name, member.score);
});


// ============================================================
// 15. map() with JSON Data
// ============================================================

const teamNames = team.map((member) => {
    return member.name;
});

console.log(teamNames);


// ============================================================
// 16. filter() with JSON Data
// ============================================================

const highScorers = team.filter((member) => {
    return member.score >= 900;
});

console.log(highScorers);


// ============================================================
// 17. Updating Parsed JSON Data
// ============================================================

const storedPlayerJSON = '{"name":"Blade","level":10}';

const storedPlayer = JSON.parse(storedPlayerJSON);

storedPlayer.level = 11;

storedPlayer.score = 500;

console.log(storedPlayer);


// ============================================================
// 18. Convert Updated Data Back to JSON
// ============================================================

const updatedPlayerJSON = JSON.stringify(storedPlayer);

console.log(updatedPlayerJSON);


// ============================================================
// 19. JSON.parse() Error Handling
// ============================================================

const invalidJSON = '{"name":"Blade",}';

try {
    const result = JSON.parse(invalidJSON);

    console.log(result);
} catch (error) {
    console.log("Invalid JSON:", error.message);
}


// ============================================================
// 20. Safe JSON Parsing with a Function
// ============================================================

function safeJSONParse(text) {
    try {
        return {
            success: true,
            data: JSON.parse(text)
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

console.log(safeJSONParse('{"name":"Ghost"}'));

console.log(safeJSONParse('{"name":}'));

// Note:
// This function catches syntax errors.
// It does not check whether the parsed data
// has the properties or types your application needs.


// ============================================================
// 21. JSON.stringify() and undefined
// ============================================================

const exampleObject = {
    name: "Crystal",
    nickname: undefined
};

console.log(JSON.stringify(exampleObject));

// The nickname property is omitted from JSON.


// ============================================================
// 22. undefined in Arrays
// ============================================================

const exampleArray = [
    "Blade",
    undefined,
    "Ghost"
];

console.log(JSON.stringify(exampleArray));

// undefined array entries become null.


// ============================================================
// 23. Functions in Objects
// ============================================================

const character = {
    name: "Knight",

    attack: function () {
        console.log("Attack!");
    }
};

console.log(JSON.stringify(character));

// Functions are omitted from JSON objects.


// ============================================================
// 24. Date Objects and JSON
// ============================================================

const gameSession = {
    player: "Blade",
    startedAt: new Date("2026-01-01T10:00:00Z")
};

const sessionJSON = JSON.stringify(gameSession);

console.log(sessionJSON);

// Date objects normally serialize to ISO date strings.


// ============================================================
// 25. JSON.stringify() Replacer
// ============================================================

// A replacer array selects properties to include.

const characterInfo = {
    name: "Ghost",
    level: 40,
    score: 5000
};

const selectedJSON = JSON.stringify(
    characterInfo,
    ["name", "score"],
    2
);

console.log(selectedJSON);


// ============================================================
// 26. JSON.stringify() Replacer Function
// ============================================================

const filteredJSON = JSON.stringify(
    characterInfo,
    (key, value) => {
        if (key === "score") {
            return undefined;
        }

        return value;
    },
    2
);

console.log(filteredJSON);


// ============================================================
// 27. JSON.parse() Reviver
// ============================================================

// A reviver can transform parsed values.

const dateJSON = '{"name":"Blade","level":25}';

const revivedData = JSON.parse(
    dateJSON,
    (key, value) => {
        if (key === "level") {
            return value + 1;
        }

        return value;
    }
);

console.log(revivedData);


// ============================================================
// 28. JSON and Fetch API
// ============================================================

async function loadPlayerFromAPI() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        // Fetch response body is JSON text.
        // response.json() reads and parses it.
        const data = await response.json();

        console.log(data.name);
        console.log(data.email);
    } catch (error) {
        console.log("API error:", error.message);
    }
}

loadPlayerFromAPI();


// ============================================================
// 29. JSON.stringify() Before Sending Data
// ============================================================

async function sendPlayerData() {
    const newPlayer = {
        name: "Blade",
        level: 25,
        score: 1500
    };

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(newPlayer)
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const result = await response.json();

        console.log("Server response:", result);
    } catch (error) {
        console.log("Send error:", error.message);
    }
}

sendPlayerData();


// ============================================================
// 30. JSON Button: Parse
// ============================================================

const parseButton = document.getElementById("parseButton");
const parseOutput = document.getElementById("parseOutput");

parseButton.addEventListener("click", () => {
    const json = '{"name":"Blade","level":25,"active":true}';

    try {
        const data = JSON.parse(json);

        parseOutput.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        parseOutput.textContent = error.message;
    }
});


// ============================================================
// 31. JSON Button: Stringify
// ============================================================

const stringifyButton = document.getElementById("stringifyButton");
const stringifyOutput = document.getElementById("stringifyOutput");

stringifyButton.addEventListener("click", () => {
    const playerData = {
        name: "Crystal",
        level: 30,
        skills: ["jump", "attack"]
    };

    stringifyOutput.textContent = JSON.stringify(
        playerData,
        null,
        4
    );
});


// ============================================================
// 32. JSON Button: Validate
// ============================================================

const validateButton = document.getElementById("validateButton");
const jsonInput = document.getElementById("jsonInput");
const validationOutput = document.getElementById("validationOutput");

validateButton.addEventListener("click", () => {
    try {
        const data = JSON.parse(jsonInput.value);

        validationOutput.textContent =
            `Valid JSON! Parsed type: ${
                Array.isArray(data) ? "array" : typeof data
            }`;
    } catch (error) {
        validationOutput.textContent =
            `Invalid JSON: ${error.message}`;
    }
});


// ============================================================
// 33. JSON Button: Fetch API
// ============================================================

const apiButton = document.getElementById("apiButton");
const apiOutput = document.getElementById("apiOutput");

apiButton.addEventListener("click", async () => {
    apiOutput.textContent = "Loading...";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const user = await response.json();

        apiOutput.textContent = JSON.stringify(user, null, 2);
    } catch (error) {
        apiOutput.textContent = `Error: ${error.message}`;
    }
});


// ============================================================
// END OF JSON
// ============================================================
