const buttons = document.querySelectorAll('div.container button');
let win = 0;
let lose = 0;
let draw = 0;

buttons.forEach((button) => {
  if (button.id) button.addEventListener('click', startMatch);
});

function startMatch(e) {
  const rps = ['rock', 'paper', 'scissors'];
  const random = Math.floor( Math.random()*3 );
  const playerChoice = e.target.id;
  const computerChoice = rps[random];
  
  displayResults(playerChoice, computerChoice);
}

function displayResults(player, computer) {
  const playerDisplay = document.querySelector('#player-display');
  const computerDisplay = document.querySelector('#computer-display');
  const resultDisplay = document.querySelector('#result-display');

  playerDisplay.textContent = `Player chose ${player}`;
  computerDisplay.textContent = `Computer chose ${computer}`;

  const finalResult = checkWinner(player, computer);
  resultDisplay.textContent = finalResult;
}

function checkWinner(player, computer) {
  if (player === computer) {
    draw++;
    return `It's a draw!`;
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    win++;
    return `Player wins!`;
  } else {
    lose++;
    return `Computer wins!`;
  }
}