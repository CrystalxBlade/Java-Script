let btn1 = document.querySelector("#first");

btn1.onclick = (evt) =>
{
    console.log(evt);
    console.log(evt.type)
    console.log(evt.clientX, evt.clientY)
    console.log(evt.target)
}

let box = document.querySelector("div");

box.onmouseover = () =>
{
    box.style.backgroundColor = "green";
}