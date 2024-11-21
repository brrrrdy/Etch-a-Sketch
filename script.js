document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('grid-container');

  function createGrid(size) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement('div');
      div.classList.add('grid-square');
      container.appendChild(div);
    }
  }

  createGrid(16); 
});

  /* 

1. Create grid. /

2. Use flexbox. /

3. Created hover effect on grid square /

4. Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad. 

CAN MALICIOUS CODE BE INJECTED HERE?

  */