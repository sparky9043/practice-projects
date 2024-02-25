// Create access to Time and Buttons
const timeDisplay = document.querySelector(".time-display");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");

// 25 min in seconds is 25*60 = 1500;
let interval;
let time = 1500;

// Button Event Listener
startBtn.addEventListener("click", () => {
  interval = setInterval( () => {
    time--;
    let minute = Math.floor( time / 60 );
    let second = time % 60;
    timeDisplay.textContent = `${minute}:${second}`;
  }, 1000)
} );

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
} );

resetBtn.addEventListener("click", () => {
  console.log("reset");
} );