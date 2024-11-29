function getRandomColor() {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

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
    gridDiv.className = 'box grid-square';

    gridDiv.addEventListener('touchstart', function (e) {
      e.preventDefault();
      changeColor(e, gridDiv);
    });

    gridDiv.addEventListener('touchmove', function (e) {
      e.preventDefault();
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target && target.classList.contains('grid-square')) {
        changeColor(e, target);
      }
    });

    gridDiv.addEventListener('mouseover', function (e) {
      if (e.buttons === 1) {
        changeColor(e, gridDiv);
      }
    });

    grid.appendChild(gridDiv);
  }

  grid.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
}

reset.addEventListener('click', resetGrid);

function resetGrid() {
  createGrid();
}

function changeColor(e, target) { 
  if (type === "randomColorMode") {
    target.style.backgroundColor = getRandomColor();
  } else if (type === "defaultColorMode") {
    target.style.backgroundColor = 'black';
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

createGrid();
