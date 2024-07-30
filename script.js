const cont = document.querySelector('.container');
let column = document.createElement('div'); 
column.className = 'column'; 

function makeGrid(x) {
    cont.innerHTML = '';

    for (let i = 0; i < x; i++) {
        const column = document.createElement('div');
        column.className = 'column';
        
        for (let j = 0; j < x; j++) {
            const grid = document.createElement('div');
            grid.className = 'grid';
            column.appendChild(grid);
        }
        cont.appendChild(column);
    }

    document.querySelectorAll('.grid').forEach(grid => {
        grid.style.width = `calc(400px / ${x} - 2px)`;
        grid.style.height = `calc(400px / ${x} - 2px)`;
    });
}
makeGrid(5);


const button = document.querySelector('.button');
button.onclick = () => {
    const userInput = prompt("Enter a number between 1-100");
    if(userInput >= 1 && userInput <= 100){
        x = userInput;
        makeGrid(x);
    }
    else{
        const userInput = prompt("Invalid, Enter a number between 1-100");
    }
}

cont.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('grid')) {
        e.target.style.backgroundColor = 'black';
    }
});