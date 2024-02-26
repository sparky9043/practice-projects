const grid = document.querySelector(".grid");
const results = document.querySelector(".results");
const width = 15;

for (let i = 0; i < width * width; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}