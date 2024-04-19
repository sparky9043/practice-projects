const buttons = document.querySelectorAll('div.container button');
const rps = ['rock', 'paper', 'scissors'];

buttons.forEach((button) => button.addEventListener('click', startMatch));

function startMatch(e) {
  const random = Math.floor( Math.random()*3 );
  const playerChoice = this.id;
  const computerChoice = rps[random];
  
  console.log(playerChoice, computerChoice);
}