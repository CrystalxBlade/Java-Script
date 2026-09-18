

let cart  = document.querySelector("div");
console.dir(cart);

let h = document.querySelector("h1");

let at = h.getAttribute("id");
console.dir(at);

let crystal = document.querySelector("h2");

let prop = document.querySelector("p")
console.log(prop.getAttribute("class"));


let box = document.querySelector(".box");
console.dir(box);

box.style.backgroundColor = "cyan";
box.style.fontSize = "2.4em";
box.innerText = "Cube";

let newBtn = document.createElement("button");
console.log(newBtn);
newBtn.innerText = "Click Here";