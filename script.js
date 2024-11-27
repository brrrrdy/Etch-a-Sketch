(function etchASketch () {
document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('grid-container');
  const containerSize = 500; 

  function createGrid(size) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    const squareSize = containerSize / size;

    for (let i = 0; i < size * size; i++) {
      const div = document.createElement('div');
      div.classList.add('grid-square');

      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`

      div.addEventListener('mouseenter', function () {
        div.style.backgroundColor = getRandomColor();
      });

      div.addEventListener('touchstart', function () {
        div.style.backgroundColor = getRandomColor ();
      });

      div.addEventListener('touchmove', function (e) {
        const touch = e.touches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (target && target.classList.contains('grid-square')) {
          target.style.backgroundColor = getRandomColor();
        }
      });

      container.appendChild(div);
    }
  }

  window.setResolution = function (resolution) {
    if (resolution === 'low') {
      createGrid(8); 
    } else if (resolution === 'medium') {
      createGrid(16);
    } else if (resolution === 'high') {
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

  createGrid(16); 
});
})();

  /* 

1. Create grid. /

2. Use flexbox. /

3. Created hover effect on grid square /

4. Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad. 

CAN MALICIOUS CODE BE INJECTED HERE?

  */