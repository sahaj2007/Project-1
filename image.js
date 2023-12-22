const images = ['url(wonder1.jpg)', 'url(wonder2.jpg)', 'url(wonder3.jpg)', 'url(wonder4.jpg)', 'url(wonder5.jpg)', 'url(wonder6.jpg)', 'url(wonder7.jpg)'];
/*background Image button*/


const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    body.style.backgroundImage = images[randomNumber];
    color.textContent = images[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * images.length);
}

var body = document.getElementsByTagName('body')[0];