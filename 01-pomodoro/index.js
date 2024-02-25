// Create access to Time and Buttons
const timeDisplay = document.querySelector(".time-display");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");

// 25 min in seconds is 25*60 = 1500;
let interval;
let time = 10;

// Track if the timer is already running
let isRunning = false;

// Button Event Listener
startBtn.addEventListener("click", () => {
  if (!isRunning) {
    interval = setInterval( () => {
      if ( time > 0 ) {
        time--;
        let minute = Math.floor( time / 60 );
        let second = time % 60;
        timeDisplay.textContent = `${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
      } else {
        alert("Time's Up!");
        clearInterval(interval);
        time = 1500;
        timeDisplay.textContent = `25:00`;
        isRunning = false;
      }
    }, 1000);
    isRunning = true;
  }
} );

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  isRunning = false;
} );

resetBtn.addEventListener("click", () => {
  time = 1500;
  timeDisplay.textContent = `25:00`;
  isRunning = false;
} );