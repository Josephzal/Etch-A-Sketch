// Variables


var w = document.getElementById('whole')
var color = "original";
var e = document.getElementsByClassName("grid-container")[0];
var sliderValues = [2, 4, 8, 16, 32, 64];
var gridNums = 32;
var input = document.getElementById('input');

// Performs required functions for mouse control
input.oninput = function() {

  // Determine what value is chosen from slider
  gridNums = sliderValues[this.value];
 
  
  // Functions will reset grid and create a new one
  // based on the selected number via slider
  
  resetGrid();
  createGrid(gridNums);
  updateGrid(gridNums);

  // Determine which color(s) grid squares will be
  // based on what the color var is 
  $(".gridItem").on('mouseover', function () {
    if(color === "erase") {
      $(this).css("background-color", 'rgb(8, 8, 70)');
      console.log(color);
    }
    else if (color === "original") {
      $(this).css("background-color", 'rgba(205, 43, 226)');
    }
    else if (color ==="crazy"){
      $(this).css("background-color", getRandomColor());
    }
    
  });
};
     
// Return random color from array
function getRandomColor() {
  var colors = ['red', 'Chartreuse', 'turquoise', 'indigo', 'yellow', 'blue', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Functions to determine what the color var is,
// which in turn will determine what color the 
// grid squares will be
function randomColor() {
  color = "crazy";
}
function eraser(){
  color = "erase";
}
function original() {
  color = "original";
  
}
input.oninput();

// Removes elements from grid to give fresh
// grid when creating new
function resetGrid() {
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
  
}

// Create grid based on selected number via slider
function createGrid(nums) {
  for(let i = 0; i < (nums*nums); i++) {
    var row = document.createElement("div");
    row.className = "gridItem";
    e.appendChild(row);
  }
};
     
// Styles the grid rows and columns according to 
// selected number via slider
function updateGrid(nums){
  original();
  document.getElementById("grid").style.gridTemplateColumns = "repeat("+nums+", 2fr)";
  document.getElementById("grid").style.gridTemplateRows = "repeat("+nums+", 2fr)";
};



