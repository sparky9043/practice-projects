// Create access to Time and Buttons
const timeDisplay = document.querySelector(".time-display");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");

// 25 min in seconds is 25*60 = 1500;
let time = 1500;

let minute = Math.floor( time / 60 );
let second = time % 60;

// Button Event Listener
startBtn.addEventListener("click", () => {
  console.log("start");
} );
stopBtn.addEventListener("click", () => {
  console.log("stop");
} );
resetBtn.addEventListener("click", () => {
  console.log("reset");
} );