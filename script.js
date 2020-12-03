
const etchContainer = document.querySelector('.etchContainer');
let userInput = 16;

function etchGrid() {
    const divAmount = userInput * userInput;
    const divSize = 640/userInput;

    for (let i = 0; i < divAmount; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "sketch";
        newDiv.style.width = `${divSize}px`;
        newDiv.style.height = `${divSize}px`;
        etchContainer.appendChild(newDiv);
    };
    defaultColor();
};

const defaultColorButton = document.getElementById("defaultColor");

    defaultColorButton.addEventListener("click", defaultColor);

    function defaultColor() {
        const sketch = document.querySelectorAll('.sketch');
            sketch.forEach((sketch) => {
            sketch.addEventListener("mouseover", function() {
                sketch.style.background = 'black';
            });
        });
    };

const rainbowButton = document.getElementById("rainbow");

    rainbowButton.addEventListener("click", rainbow);

    function rainbow() {
        const sketch = document.querySelectorAll('.sketch');
        sketch.forEach((sketch) => {
            sketch.addEventListener("mouseover", function() {
            let rainbowColor = Math.floor(Math.random() * 300);
            sketch.style.background = `hsl(${rainbowColor}, 100%, 50%)`;
            });
        });
    };

const reset = document.getElementById('resetButton');

    reset.addEventListener("click", newGrid);

    function newGrid() {
        userInput = (prompt("Choose how big you would like between 1 - 100?"))
        if (userInput > 100 || userInput <= 0 || isNaN(userInput)) {
            alert("I'm sorry we can't do that, please try again");
        } else {
            clear();
            etchGrid(userInput);
        };
    };

function clear() {
    while (etchContainer.firstChild) {
        etchContainer.removeChild(etchContainer.firstChild);
    };
};

etchGrid();