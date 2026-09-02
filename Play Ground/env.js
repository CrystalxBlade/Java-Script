

let num = [1, 2, 3, 4, 5];

const arr = num.reduce((prev, curr) => 
    {
        return `${prev * curr}`;
    })

console.log(arr);