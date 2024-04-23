const buttons = document.querySelectorAll('div.container button');
const scroll = document.querySelector('input#size');

scroll.addEventListener('change', updateSize);
scroll.addEventListener('mousemove', updateSize);

function updateSize() {
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${this.dataset.unit}`);
}


const tallyObj = {
  win: 0,
  lose: 0,
  tie: 0,
}

buttons.forEach((button) => {
  if (button.id) button.addEventListener('click', startMatch);
});

function startMatch(e) {
  const rps = ['rock', 'paper', 'scissors'];
  const random = Math.floor( Math.random()*3 );
  const playerChoice = e.target.id;
  const computerChoice = rps[random];
  
  checkWinner(playerChoice, computerChoice);
}

function checkWinner(player, computer) {
  if (player === computer) {
    tallyObj.tie++;
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    tallyObj.win++;
  } else {
    tallyObj.lose++;
  }

  displayResult(tallyObj);
}

function displayResult(obj) {
  const displays = document.querySelectorAll('.result-container span');
  displays.forEach(display => {
    if (display.id === 'player-display') display.textContent = obj.win;
    else if (display.id === 'computer-display') display.textContent = obj.lose;
    else display.textContent = obj.tie;
  });
}