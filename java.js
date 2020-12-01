
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
    sketch()
}

function sketch() {
    let sketch = document.querySelectorAll('.sketch');
    console.log(sketch)
    sketch.forEach((sketch) => {
    sketch.addEventListener("mouseover", function() {
        sketch.style.background = 'black';
    });
});
};

function clear() {
    while (etchContainer.firstChild) {
        etchContainer.removeChild(etchContainer.firstChild);
    }
};

function newGrid() {
    x = (prompt("How big would you like?"))
    if (x < 100) {
        clear();
        etchGrid(x);
    } else {
        alert("Number is too big, try again.")
    }
}

const reset = document.getElementById('resetButton');

reset.addEventListener("click", function() {
    newGrid();
})


etchGrid();
