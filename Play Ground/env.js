

let promiseOne = new Promise((resolve, reject) =>
{
    setTimeout(() => 
    {
        const val = true
        if(!val)
        {
            resolve({username: 'Blade', passKey: 1234});
        }
        else
        {
            reject();
        }

    }, 2000)
});


async function PlayGround()
{
    try
    {
        const exp = await promiseOne
        console.log(exp); 
    }
    catch(error)
    {
        console.log('You got', error)
    }
}

PlayGround()