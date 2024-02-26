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

console.log(squares);