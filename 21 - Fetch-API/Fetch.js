// ============================================================
// 21 - FETCH API
// ============================================================


// ============================================================
// 1. What is Fetch API?
// ============================================================

// fetch() is used to make HTTP requests.
//
// It can communicate with:
//
// - APIs
// - Servers
// - Web services
// - Databases through backend APIs
//
// fetch() returns a Promise.


// ============================================================
// 2. Basic fetch()
// ============================================================

fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then((response) => {

        console.log(response);

    });


// ============================================================
// 3. Understanding the Response
// ============================================================

fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then((response) => {

        console.log("Response:", response);

        console.log("Status:", response.status);

        console.log("OK:", response.ok);

    });


// ============================================================
// 4. Response Status
// ============================================================

fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then((response) => {

        console.log(response.status);

    });


// Common status codes:
//
// 200 = OK
// 201 = Created
// 204 = No Content
// 400 = Bad Request
// 401 = Unauthorized
// 403 = Forbidden
// 404 = Not Found
// 500 = Server Error


// ============================================================
// 5. response.ok
// ============================================================

fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then((response) => {

        if (response.ok) {

            console.log("Request successful.");

        } else {

            console.log("Request failed.");

        }

    });


// ============================================================
// 6. response.text()
// ============================================================

// response.text() reads the response body as text.

fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then((response) => {

        return response.text();

    })

    .then((data) => {

        console.log(data);

    });


// ============================================================
// 7. response.json()
// ============================================================

// Most APIs return JSON.
//
// response.json() converts the JSON response
// into a JavaScript value.

fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then((response) => {

        return response.json();

    })

    .then((data) => {

        console.log(data);

    });


// ============================================================
// 8. Shorter Promise Chain
// ============================================================

fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then((response) => response.json())

    .then((data) => {

        console.log(data);

    });


// ============================================================
// 9. Reading JSON Properties
// ============================================================

fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then((response) => response.json())

    .then((data) => {

        console.log("ID:", data.id);

        console.log("Title:", data.title);

        console.log("Body:", data.body);

    });


// ============================================================
// 10. GET Request
// ============================================================

// GET is normally used to retrieve data.

fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then((response) => {

        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }

        return response.json();

    })

    .then((data) => {

        console.log("GET data:", data);

    })

    .catch((error) => {

        console.log("Error:", error.message);

    });


// ============================================================
// 11. GET Multiple Records
// ============================================================

fetch("https://jsonplaceholder.typicode.com/posts")

    .then((response) => {

        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }

        return response.json();

    })

    .then((posts) => {

        console.log("Number of posts:", posts.length);

        console.log(posts);

    })

    .catch((error) => {

        console.log(error.message);

    });


// ============================================================
// 12. Loop Through API Data
// ============================================================

fetch("https://jsonplaceholder.typicode.com/posts")

    .then((response) => response.json())

    .then((posts) => {

        posts.forEach((post) => {

            console.log(
                `${post.id}: ${post.title}`
            );

        });

    });


// ============================================================
// 13. GET with async/await
// ============================================================

async function getPost() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }

        const data = await response.json();

        console.log("Async/Await:", data);

    } catch (error) {

        console.log(
            "Fetch error:",
            error.message
        );

    }

}

getPost();


// ============================================================
// 14. Fetch Function
// ============================================================

async function fetchPost(id) {

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {

        throw new Error(
            `Could not fetch post ${id}`
        );

    }

    return response.json();

}

fetchPost(5)

    .then((post) => {

        console.log(post);

    })

    .catch((error) => {

        console.log(error.message);

    });


// ============================================================
// 15. Request Object
// ============================================================

// fetch() can receive a Request object.

const request = new Request(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
        method: "GET"
    }
);

fetch(request)

    .then((response) => response.json())

    .then((data) => {

        console.log(data);

    });


// ============================================================
// 16. Fetch Options
// ============================================================

// fetch(url, options)

fetch("https://jsonplaceholder.typicode.com/posts/1", {

    method: "GET",

    headers: {

        "Accept": "application/json"

    }

})

.then((response) => response.json())

.then((data) => {

    console.log(data);

});


// ============================================================
// 17. HTTP Methods
// ============================================================

// GET
// POST
// PUT
// PATCH
// DELETE


// GET:
// Retrieve data.
//
// POST:
// Create new data.
//
// PUT:
// Replace/update an entire resource.
//
// PATCH:
// Partially update a resource.
//
// DELETE:
// Delete a resource.


// ============================================================
// 18. POST Request
// ============================================================

// POST sends data to the server.

const newPost = {

    title: "Blade's Post",

    body: "Learning Fetch API.",

    userId: 1

};

fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",

    headers: {

        "Content-Type": "application/json"

    },

    body: JSON.stringify(newPost)

})

.then((response) => {

    if (!response.ok) {

        throw new Error(
            `HTTP error: ${response.status}`
        );

    }

    return response.json();

})

.then((data) => {

    console.log("Created:", data);

})

.catch((error) => {

    console.log(error.message);

});


// ============================================================
// 19. POST with async/await
// ============================================================

async function createPost() {

    const post = {

        title: "Crystal's Post",

        body: "Learning JavaScript APIs.",

        userId: 1

    };

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(post)

            }
        );

        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }

        const data = await response.json();

        console.log("Created post:", data);

    } catch (error) {

        console.log(
            "Create error:",
            error.message
        );

    }

}

createPost();


// ============================================================
// 20. PUT Request
// ============================================================

// PUT generally replaces the resource.

const updatedPost = {

    id: 1,

    title: "Updated Title",

    body: "Updated body.",

    userId: 1

};

fetch("https://jsonplaceholder.typicode.com/posts/1", {

    method: "PUT",

    headers: {

        "Content-Type": "application/json"

    },

    body: JSON.stringify(updatedPost)

})

.then((response) => {

    if (!response.ok) {

        throw new Error(
            `HTTP error: ${response.status}`
        );

    }

    return response.json();

})

.then((data) => {

    console.log("Updated:", data);

})

.catch((error) => {

    console.log(error.message);

});


// ============================================================
// 21. PATCH Request
// ============================================================

// PATCH changes only selected properties.

const partialUpdate = {

    title: "New Title Only"

};

fetch("https://jsonplaceholder.typicode.com/posts/1", {

    method: "PATCH",

    headers: {

        "Content-Type": "application/json"

    },

    body: JSON.stringify(partialUpdate)

})

.then((response) => response.json())

.then((data) => {

    console.log("Patched:", data);

});


// ============================================================
// 22. DELETE Request
// ============================================================

fetch("https://jsonplaceholder.typicode.com/posts/1", {

    method: "DELETE"

})

.then((response) => {

    if (!response.ok) {

        throw new Error(
            `HTTP error: ${response.status}`
        );

    }

    console.log("Delete request successful.");

})

.catch((error) => {

    console.log(error.message);

});


// ============================================================
// 23. DELETE with async/await
// ============================================================

async function deletePost(id) {

    try {

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }

        console.log(
            `Post ${id} deleted.`
        );

    } catch (error) {

        console.log(
            "Delete error:",
            error.message
        );

    }

}

deletePost(2);


// ============================================================
// 24. Request Headers
// ============================================================

fetch("https://jsonplaceholder.typicode.com/posts/1", {

    headers: {

        "Accept": "application/json"

    }

})

.then((response) => response.json())

.then((data) => {

    console.log(data);

});


// ============================================================
// 25. Content-Type
// ============================================================

// When sending JSON:
//
// Content-Type tells the server:
//
// "The body contains JSON."

const dataToSend = {

    name: "Knight",

    score: 900

};

fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",

    headers: {

        "Content-Type": "application/json"

    },

    body: JSON.stringify(dataToSend)

})

.then((response) => response.json())

.then((data) => {

    console.log(data);

});


// ============================================================
// 26. JSON.stringify()
// ============================================================

const player = {

    name: "Hornet",

    level: 25

};

const jsonString = JSON.stringify(player);

console.log(jsonString);


// JSON:
//
// {"name":"Hornet","level":25}


// ============================================================
// 27. JSON.parse()
// ============================================================

const jsonData =
    '{"name":"Ghost","level":30}';

const javascriptObject =
    JSON.parse(jsonData);

console.log(javascriptObject);

console.log(
    javascriptObject.name
);


// ============================================================
// 28. Response Headers
// ============================================================

fetch("https://jsonplaceholder.typicode.com/posts/1")

.then((response) => {

    console.log(
        "Content Type:",
        response.headers.get("content-type")
    );

});


// ============================================================
// 29. Checking a Header
// ============================================================

fetch("https://jsonplaceholder.typicode.com/posts/1")

.then((response) => {

    if (
        response.headers.has("content-type")
    ) {

        console.log(
            "Content-Type header exists."
        );

    }

});


// ============================================================
// 30. URL Object
// ============================================================

const apiUrl = new URL(
    "https://jsonplaceholder.typicode.com/posts"
);

apiUrl.searchParams.set(
    "userId",
    "1"
);

console.log(apiUrl.href);


// ============================================================
// 31. Fetch with Query Parameters
// ============================================================

const postsUrl = new URL(
    "https://jsonplaceholder.typicode.com/posts"
);

postsUrl.searchParams.set(
    "userId",
    "1"
);

fetch(postsUrl)

.then((response) => response.json())

.then((posts) => {

    console.log(
        "Filtered posts:",
        posts
    );

});


// ============================================================
// 32. Multiple Query Parameters
// ============================================================

const searchUrl = new URL(
    "https://jsonplaceholder.typicode.com/posts"
);

searchUrl.searchParams.set(
    "userId",
    "1"
);

searchUrl.searchParams.set(
    "_limit",
    "5"
);

console.log(searchUrl.href);


// ============================================================
// 33. Promise.all() with Fetch
// ============================================================

async function getMultiplePosts() {

    try {

        const responses = await Promise.all([

            fetch(
                "https://jsonplaceholder.typicode.com/posts/1"
            ),

            fetch(
                "https://jsonplaceholder.typicode.com/posts/2"
            ),

            fetch(
                "https://jsonplaceholder.typicode.com/posts/3"
            )

        ]);

        for (const response of responses) {

            if (!response.ok) {

                throw new Error(
                    `HTTP error: ${response.status}`
                );

            }

        }

        const posts = await Promise.all(
            responses.map(
                (response) => response.json()
            )
        );

        console.log(posts);

    } catch (error) {

        console.log(error.message);

    }

}

getMultiplePosts();


// ============================================================
// 34. Fetch Multiple URLs
// ============================================================

async function loadMultipleData() {

    const urls = [

        "https://jsonplaceholder.typicode.com/posts/1",

        "https://jsonplaceholder.typicode.com/posts/2",

        "https://jsonplaceholder.typicode.com/posts/3"

    ];

    try {

        const responses = await Promise.all(

            urls.map((url) => fetch(url))

        );

        const data = await Promise.all(

            responses.map(
                (response) => response.json()
            )

        );

        console.log(data);

    } catch (error) {

        console.log(error.message);

    }

}

loadMultipleData();


// ============================================================
// 35. Handling HTTP Errors
// ============================================================

// IMPORTANT:
//
// fetch() does NOT automatically reject its Promise
// for HTTP errors such as 404 or 500.
//
// We should check response.ok ourselves.

fetch(
    "https://jsonplaceholder.typicode.com/posts/999999"
)

.then((response) => {

    if (!response.ok) {

        throw new Error(
            `Request failed with status ${response.status}`
        );

    }

    return response.json();

})

.then((data) => {

    console.log(data);

})

.catch((error) => {

    console.log(
        "Handled error:",
        error.message
    );

});


// ============================================================
// 36. Network Error
// ============================================================

// A network-level failure can cause fetch()
// to reject.
//
// Example pattern:

async function networkExample() {

    try {

        const response = await fetch(
            "https://example.invalid"
        );

        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(
            "Network/fetch error:",
            error.message
        );

    }

}


// networkExample();


// ============================================================
// 37. Displaying API Data in the DOM
// ============================================================

const getButton =
    document.getElementById("getButton");

const getStatus =
    document.getElementById("getStatus");

const getOutput =
    document.getElementById("getOutput");

getButton.addEventListener(
    "click",
    async () => {

        getStatus.textContent =
            "Loading...";

        getOutput.textContent = "";

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts/1"
            );

            if (!response.ok) {

                throw new Error(
                    `HTTP error: ${response.status}`
                );

            }

            const data =
                await response.json();

            getStatus.textContent =
                "Data loaded successfully.";

            getOutput.textContent =
                JSON.stringify(
                    data,
                    null,
                    2
                );

        } catch (error) {

            getStatus.textContent =
                "Failed to load data.";

            getOutput.textContent =
                error.message;

        }

    }
);


// ============================================================
// 38. POST Button
// ============================================================

const postButton =
    document.getElementById("postButton");

const postOutput =
    document.getElementById("postOutput");

postButton.addEventListener(
    "click",
    async () => {

        const post = {

            title: "Blade's New Post",

            body: "This was sent using Fetch API.",

            userId: 1

        };

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(post)

                }
            );

            if (!response.ok) {

                throw new Error(
                    `HTTP error: ${response.status}`
                );

            }

            const data =
                await response.json();

            postOutput.textContent =
                JSON.stringify(
                    data,
                    null,
                    2
                );

        } catch (error) {

            postOutput.textContent =
                error.message;

        }

    }
);


// ============================================================
// 39. PUT Button
// ============================================================

const putButton =
    document.getElementById("putButton");

const putOutput =
    document.getElementById("putOutput");

putButton.addEventListener(
    "click",
    async () => {

        const updatedPost = {

            id: 1,

            title: "Updated by Blade",

            body: "This post was updated.",

            userId: 1

        };

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts/1",
                {

                    method: "PUT",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(
                            updatedPost
                        )

                }
            );

            if (!response.ok) {

                throw new Error(
                    `HTTP error: ${response.status}`
                );

            }

            const data =
                await response.json();

            putOutput.textContent =
                JSON.stringify(
                    data,
                    null,
                    2
                );

        } catch (error) {

            putOutput.textContent =
                error.message;

        }

    }
);


// ============================================================
// 40. DELETE Button
// ============================================================

const deleteButton =
    document.getElementById("deleteButton");

const deleteOutput =
    document.getElementById("deleteOutput");

deleteButton.addEventListener(
    "click",
    async () => {

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts/1",
                {
                    method: "DELETE"
                }
            );

            if (!response.ok) {

                throw new Error(
                    `HTTP error: ${response.status}`
                );

            }

            deleteOutput.textContent =
                "Post deleted successfully.";

        } catch (error) {

            deleteOutput.textContent =
                error.message;

        }

    }
);


// ============================================================
// 41. Async/Await Button
// ============================================================

const asyncButton =
    document.getElementById("asyncButton");

const asyncOutput =
    document.getElementById("asyncOutput");

asyncButton.addEventListener(
    "click",
    async () => {

        asyncOutput.textContent =
            "Loading...";

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users/1"
            );

            if (!response.ok) {

                throw new Error(
                    `HTTP error: ${response.status}`
                );

            }

            const user =
                await response.json();

            asyncOutput.textContent =
                JSON.stringify(
                    user,
                    null,
                    2
                );

        } catch (error) {

            asyncOutput.textContent =
                `Error: ${error.message}`;

        }

    }
);


// ============================================================
// 42. Fetch + Array Methods
// ============================================================

async function getPostTitles() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }

        const posts =
            await response.json();

        const titles = posts.map(
            (post) => post.title
        );

        console.log(titles);

    } catch (error) {

        console.log(error.message);

    }

}

getPostTitles();


// ============================================================
// 43. Fetch + filter()
// ============================================================

async function getUserPosts() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const posts =
            await response.json();

        const userPosts = posts.filter(
            (post) => post.userId === 1
        );

        console.log(userPosts);

    } catch (error) {

        console.log(error.message);

    }

}

getUserPosts();


// ============================================================
// 44. Fetch + find()
// ============================================================

async function findPost() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const posts =
            await response.json();

        const post = posts.find(
            (post) => post.id === 5
        );

        console.log(post);

    } catch (error) {

        console.log(error.message);

    }

}

findPost();


// ============================================================
// 45. Loading State
// ============================================================

async function loadWithStatus() {

    console.log("Loading...");

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {

            throw new Error(
                "Could not load data."
            );

        }

        const data =
            await response.json();

        console.log("Success:", data);

    } catch (error) {

        console.log(
            "Failed:",
            error.message
        );

    } finally {

        console.log(
            "Loading process finished."
        );

    }

}

loadWithStatus();


// ============================================================
// END OF FETCH API
// ============================================================