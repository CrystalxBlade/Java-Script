
let sum = 0
function Vow(val)
{
    for(const chr of val)
    {
        let ch = chr.toLowerCase();

        if(ch == 'a' || ch == 'e' || ch=='i' || ch == 'o' || ch == 'u')
        {
            sum++;
        }
    }

    return sum;
}

let val = Vow("OrystalxIlade");
console.log("This string has : ", val, "vowels");


