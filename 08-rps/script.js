const buttons = document.querySelectorAll('div.container button');
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

// function displayResults(player, computer) {
//   const playerDisplay = document.querySelector('#player-display');
//   const computerDisplay = document.querySelector('#computer-display');
//   const resultDisplay = document.querySelector('#result-display');

//   playerDisplay.textContent = `Player chose ${player}`;
//   computerDisplay.textContent = `Computer chose ${computer}`;

//   const finalResult = checkWinner(player, computer);
//   resultDisplay.textContent = finalResult;
// }

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
  const resultContainer = document.querySelector('.result-container');
  const playerResult = document.createElement('p');
  const computerResult = document.createElement('p');
  const tieResult = document.createElement('p');
  
  playerResult.textContent = `Player Score: ${obj.win}`;
  computerResult.textContent = `Computer Score: ${obj.lose}`;
  tieResult.textContent = `Ties: ${obj.tie}`;

  resultContainer.textContent = '';
  resultContainer.appendChild(playerResult);
  resultContainer.appendChild(computerResult);
  resultContainer.appendChild(tieResult);
}