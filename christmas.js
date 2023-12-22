const colors = ["#4d084b", "#00873E", "#D6001C", "rgb(245,245,245)", "#F1D900", "#2A8FBD ", "#C0C0C0", "#DAA520"];
/*  Christmas Colours button */

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

