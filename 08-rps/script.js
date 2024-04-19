const buttons = document.querySelectorAll('div.container button');

buttons.forEach((button) => button.addEventListener('click', startMatch));

function startMatch(e) {
  const rps = ['rock', 'paper', 'scissors'];
  const random = Math.floor( Math.random()*3 );
  const playerChoice = e.target.id;
  const computerChoice = rps[random];
  
  checkWinner(playerChoice, computerChoice);
}

function checkWinner(player, computer) {
  // console.log(`Player chose ${player}. Computer chose ${computer}`);
  if (player === computer) console.log('draw!');
  else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) console.log('player wins!');
  else console.log('computer wins!');
}