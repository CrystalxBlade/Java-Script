
let promiseOne = new Promise((resolve,reject) =>
{
    setTimeout(() =>
    {
        console.log('Async task 1 completed');
        resolve();
    }, 2000)
});

promiseOne.then(() =>
{
    console.log('Promise consumed 1');
})

new Promise((resolve, reject) =>
{
    setTimeout(() => 
        {
            console.log('Async taske 2 completed');
            resolve();
        },4000)
}).then(() =>
{
    console.log('Promisde consumed 2');
})

const promiseThree = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        resolve({username: "Blade", email: "crystal@Blade.com",})
    })
})

promiseThree.then((user) => 
{
    console.log(user);
})