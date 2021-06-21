let gridItem = document.querySelector('grid');
let test = document.getElementById("test");
//createGrid(squareSize);

function createDivs(size) {
    const div = document.createElement('div');
  
    return div;
}

function createGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            
        }
    }
}

gridItem.addEventListener('mouseover', function (e) {
    e.target.style.color = "orange";
})

test.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "orange";
});
