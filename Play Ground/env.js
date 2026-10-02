
function asyncFunc()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log('some data');
            resolve('success');
        },2000);
    });
}

let p1 = asyncFunc();
p1.then(() =>
{
    console.log((res) =>
    {
        console.log(res);
    })
})