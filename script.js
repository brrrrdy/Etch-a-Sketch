const grid = document.querySelector('.grid');
const reset = document.querySelector('.reset');

const defaultColor = document.querySelector('.default');
const randomColor = document.querySelector('.color');

const presetButtons = document.querySelectorAll('.preset');
let numSquares = 8;
let type = "defaultColorMode";  


presetButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    numSquares = parseInt(e.target.dataset.size);
    createGrid();
  });
});


function createGrid() {
  grid.innerHTML = ''; 

  let gridSize = numSquares * numSquares;
  

  for (let i = 0; i < gridSize; ++i) {
    let gridDiv = document.createElement('div');
    gridDiv.className = 'box';
    gridDiv.addEventListener('mouseover', changeColor);
    gridDiv.addEventListener('touchstart', startDrawing, { passive: true });  
    gridDiv.addEventListener('touchmove', continueDrawing, { passive: true }); 
    gridDiv.addEventListener('mousedown', startDrawing);
    gridDiv.addEventListener('mousemove', continueDrawing);
    grid.appendChild(gridDiv);
  }


  grid.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
}


reset.addEventListener('click', resetGrid);

function resetGrid() {
  createGrid();
}


function startDrawing(e) {
  e.preventDefault(); 
  changeColor(e); 
  isDrawing = true;
}

function continueDrawing(e) {
  if (!isDrawing) return;
  e.preventDefault();
  changeColor(e);
}
function changeColor(e) {
  if (type === "randomColorMode") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (type === "defaultColorMode") {
    e.target.style.backgroundColor = 'black';
  }
}
defaultColor.addEventListener("click", function() {
  type = "defaultColorMode"; 
  this.classList.add("active");
  randomColor.classList.remove("active");
});


randomColor.addEventListener("click", function() {
  type = "randomColorMode"; 
  this.classList.add("active");
  defaultColor.classList.remove("active");
});


let isDrawing = false; 
createGrid();
