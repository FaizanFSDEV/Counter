const counter = document.querySelector(".counter");
const followers = document.querySelector(".followers");
const image = document.querySelector("img")

let count = 1;

setInterval(() => {
    if (count<1000) {
    count++;
    counter.innerText = count;   
    }   
}, 1);

setTimeout(() => {
    followers.innerText = "Followers on Instagram!";
    followers.style.color = "red"
    image.style.border = "3px solid red"

}, 4500);