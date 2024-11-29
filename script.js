(function etchASketch() {
  document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('grid-container');
    const containerSize = 500;
    let isMulticolorMode = false; 

    function createGrid(size) {

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    
    
      const squareSize = Math.floor(containerSize / size);
    
     
      container.style.width = `${squareSize * size}px`;
      container.style.height = `${squareSize * size}px`;
    
      for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');
    
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
    
        div.addEventListener('mouseenter', function () {
          div.style.backgroundColor = isMulticolorMode ? getRandomColor() : '#000';
        });
    
        div.addEventListener('touchstart', function (e) {
          e.preventDefault(); 
          div.style.backgroundColor = isMulticolorMode ? getRandomColor() : '#000';
        });
    
        div.addEventListener('touchmove', function (e) {
          e.preventDefault();
          const touch = e.touches[0];
          const target = document.elementFromPoint(touch.clientX, touch.clientY);
          if (target && target.classList.contains('grid-square')) {
            target.style.backgroundColor = isMulticolorMode ? getRandomColor() : '#000';
          }
        });
    
        container.appendChild(div);
      }
    }

    window.setResolution = function (resolution) {
      if (resolution === 'small') {
        createGrid(8);
      } else if (resolution === 'medium') {
        createGrid(16);
      } else if (resolution === 'big') {
        createGrid(32);
      }
    };

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    document.getElementById('toggle-mode').addEventListener('click', function () {
      isMulticolorMode = !isMulticolorMode; 
      this.textContent = isMulticolorMode ? 'Switch to Black' : 'Switch to Multicolor'; 
    });

    createGrid(16); 
  });
})();
