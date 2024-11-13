document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('grid-container');
  
    function createGrid(size) {
      for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');
        container.appendChild(div);
      }
    }
  
    createGrid(16); 
  });