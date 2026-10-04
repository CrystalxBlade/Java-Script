
let promiseOne = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(() =>
{
    console.log("Promise consumed");
});

new Promise((resolve, reject) =>
{
    setTimeout(() => 
        {
            console.log('Async Task 2');
            resolve();
        },1000)
}).then(() =>
{
    console.log('Promise consumed 2');
})