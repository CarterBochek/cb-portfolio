//These are the fixed colors in an array
const fixedColors = ['red', 'blue', 'yellow', 'mediumspringgreen', 'purple', 'orange'];
//Selecting the ElementId fixed-btn
const fixedBtn = document.getElementById('fixed-btn');
const currentColor = document.getElementById('current-color');
fixedBtn.addEventListener('click', function() {
    //Select a random number in the fixedColors array between 0 and 5
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = fixedColors[randomNumber];
    currentColor.textContent = fixedColors[randomNumber];
    currentColor.style.color = fixedColors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * fixedColors.length);
}