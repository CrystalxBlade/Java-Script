

let arr = [250, 645, 300, 900, 50];

for(let i = 0; i < arr.length; i++)
{    
    let discount = (arr[i] * 10)/100;
    let finalPrice =  arr[i] - discount;
    console.log(`10% off on ${arr[i]} = ${finalPrice}`);
}
