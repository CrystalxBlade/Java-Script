

sum(Display, 4, 8);

function sum(callback, x , y)
{
    let result = x + y;
    callback(result);
}

function Display(result)
{
    console.log(result);
}