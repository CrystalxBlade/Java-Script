
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
    console.log('Promise consumed 2');
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

const promiseFour = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        let error = true;
        if(!error)
        {
            resolve({username: "Crystal", password: "1234"});
        }
        else
        {
            reject('ERROR: Something went wrong')
        }
    }, 6000)
})

promiseFour.then((user) =>
{
    console.log(user);
    // return user.username
    return user.password
}).then((username) =>
{
    console.log(username);
}).catch((error) =>
{
    console.log(error);
}).finally(() => console.log('The promise is either resolved or rejected'));


const promiseFive =  new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        let error = true
        if(!error)
        {
            resolve({username: 'Blade', password: '1234'})
        }
        else
        {
            reject('Javascript went wrong')
        }
    },8000)
})

async function consumePromiseFive() 
{
    try
    {
        const resopone = await promiseFive
        console.log(resopone);
    }
    catch(error)
    {
        console.log(error);
    }
}

consumePromiseFive()

const promiseSix = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        let mistake = true;
        if(!mistake)
        {
            resolve({user: 'CrystalxBlade', password: 4567})
        }
        else
        {
            reject('It was a mistake')
        }
    }, 10000)
})

async function blunder()
{
    try
    {
        const fault = await promiseSix
        console.log(fault);
    }
    catch(mistake)
    {
        console.log(mistake);
    }
}

blunder()

let promiseSeven = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        val = true
        if(val)
        {
            resolve({username: 'Skull', passKey: '1406'})
        }
        else
        {
            reject('failed to pass the key')
        }
    }, 12000)
});


async function seven()
{
    try
    {
        const response = await promiseSeven
        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}

seven()