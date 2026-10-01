
let pr = new Promise((resolve, reject) =>
{
    console.log("I am a promise");
    reject("Some error");
})