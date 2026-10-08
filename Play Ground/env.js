

let promiseOne = new Promise((resolve, reject) =>
{
    setTimeout(() => 
    {
        const val = true
        if(val)
        {
            resolve({username: 'Blade', passKey: 1234});
        }
        else
        {
            reject('Error 404 : ');
        }

    }, 2000)
});

promiseOne.then((info) => 
    {
        console.log('info', info);
    })
    .then(() =>
    {
        console.log('Code is working fine');
    })
    .then(() =>
    {
        console.log('Everything looks good until now');
    })
    .catch((error) =>
    {
        console.log(error, 'Somthing went wrong in the code');
    })
    .finally(() =>
    {
        console.log('Promise is either rejected or resolved IDK');
    })