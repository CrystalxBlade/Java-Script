

const testPromise = new Promise((resolve, reject) =>
{
    const result = 5 + 4;
    if(result === 10)
    {
        resolve('Fulfilled')
    }
    else
    {
        reject({message : 'something went wrong 404'})
    }
}); 

testPromise.then(message =>
{
    console.log(message);
}).catch(message =>
{
    console.log(message);
}
)