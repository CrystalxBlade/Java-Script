let btn1 = document.querySelector("#first");

btn1.onclick = (e) =>
{
    console.log(e);
}

let box = document.querySelector("div");

box.onmouseover = () =>
{
    box.style.backgroundColor = "green";
}