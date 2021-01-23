const pads = ['green', 'red', 'yellow', 'blue'];
let sequence = [];
let playerSequence = [];
let round = 0;


const startButton = document.querySelector('button');


let resetGame = () => {
  console.log('Game Reset');
  sequence = [];
  playerSequence = [];
  round = 0;
}
startButton.addEventListener('click', resetGame);