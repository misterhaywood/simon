let pads = ['green', 'red', 'yellow', 'blue'];
let sequence = [];
let playerSequence = [];
let round = 0;


let startButton = document.querySelector('button');


let resetGame = () => {
  console.log('Game Reset');
  sequence = [];
  playerSequence = [];
  round = 0;
}
startButton.addEventListener('click', resetGame);

function animatePad(color) {
  const tile = document.querySelector(`[data-tile='${color}']`);
  const sound = document.querySelector(`[data-sound='${color}']`);

  tile.classList.add('activated');
  sound.play();

  setTimeout(() => {
    tile.classList.remove('activated');
  }, 300);
}