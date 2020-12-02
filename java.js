
const etchContainer = document.querySelector('.etchContainer');
let x = 16

function etchGrid() {
    const y = x * x;
    const measure = 640/x;

    for (let i = 0; i < y; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "sketch";
        newDiv.style.width = `${measure}px`;
        newDiv.style.height = `${measure}px`;
        etchContainer.appendChild(newDiv);
    }
    defaultColor();
}

const defaultColorButton = document.getElementById("defaultColor");

    defaultColorButton.addEventListener("click", function() {
        defaultColor();
    })

    function defaultColor() {
        const sketch = document.querySelectorAll('.sketch');
            sketch.forEach((sketch) => {
            sketch.addEventListener("mouseover", function() {
                sketch.style.background = 'black';
            });
        });
    };

const rainbowButton = document.getElementById("rainbow");

    rainbowButton.addEventListener("click", function() {
        rainbow();
    })

    function rainbow() {
        const sketch = document.querySelectorAll('.sketch');
        sketch.forEach((sketch) => {
            sketch.addEventListener("mouseover", function() {
            let rainbowColor = Math.floor(Math.random() * 300);
            sketch.style.background = `hsl(${rainbowColor}, 100%, 50%)`;
            });
        })
    }

const reset = document.getElementById('resetButton');

    reset.addEventListener("click", function() {
        newGrid();
    })

    function newGrid() {
        x = (prompt("How big would you like?"))
        if (x <= 100) {
            clear();
            etchGrid(x);
        } else {
            alert("Number is too big, try again.")
        }
    }

function clear() {
    while (etchContainer.firstChild) {
        etchContainer.removeChild(etchContainer.firstChild);
    }
};

etchGrid();
