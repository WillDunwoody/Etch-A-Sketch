
let etchContainer = document.querySelector('.etchContainer');
const x = 16;
let y = x * x;

function etchGrid() {
    for (let i = 0; i < y; i++) {
        let newDiv = document.createElement('div');
          etchContainer.appendChild(newDiv)
    }
}

    

/*
let clearGrid = () => {
    $('.grid').remove();
}

let newGrid = () => {



}Clas*/

etchGrid(y)