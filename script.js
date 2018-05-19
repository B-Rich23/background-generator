var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function startGradient() {
    color1.setAttribute('value', '#ff0000');
    color2.setAttribute('value', '#ffff00');
    
    
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";"
}

startGradient();

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

