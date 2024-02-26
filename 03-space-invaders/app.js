const grid = document.querySelector(".grid");
const results = document.querySelector(".results");
const width = 15;

for (let i = 0; i < width * width; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}

// Create an array from the squares so we can work with it in the JS file
// This selects all "divs" that live inside the one with class grid
const squares = Array.from(document.querySelectorAll(".grid div"));


// Add the grid number into alienInvaders
const alienInvaders = [
  0,1,2,3,4,5,6,7,8,9,
  15,16,17,18,19,20,21,22,23,24,
  30,31,32,33,34,35,36,37,38,39
]

// loops through alienInvaders in order. This is clever
// because all the elements are numbers so it'll go through
// alienInvaders[i] and become that number which is then used
// in squares[alienInvaders[i]]
function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.add("invader");
  }
}

draw();

console.log(squares);