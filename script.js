let pads = ['green', 'red', 'yellow', 'blue'];
let sequence = [];
let playerSequence = [];
let round = 0;
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')


let allPads = document.querySelectorAll('.pad');
let container = document.querySelector('.container');

let startButton = document.querySelector('button');

let resetGame = () => {
  sequence = [];
  playerSequence = [];
  round = 0;
}
startButton.addEventListener('click', resetGame);

let animatePad = (color) => {
  let pad = document.querySelector(`#${color}`);
  let sound = document.querySelector(`[data-sound='${color}']`);

  pad.classList.add('clicked');
  sound.play();

  setTimeout(() => {
    pad.classList.remove('clicked');
  }, 300);
}

let turnBanner = (level) => {
  h2.innerText = `Round: ${level}`;
}

let nextMove = () => {
  let nextColor = pads[Math.floor(Math.random() * pads.length)];
  return nextColor;
}

let playRound = (nextSequence) => {
  nextSequence.forEach((color, i) => {
    setTimeout(() => {
      animatePad(color);
    }, (i + 1) * 700);
  });
}

function nextRound() {
  round++;
  let nextSequence = [...sequence];
  nextSequence.push(nextMove());
  playRound(nextSequence);

  sequence = [...nextSequence];
  setTimeout(() => {
    turnBanner(round);
  }, round * 600 + 1000);
}

let handleClick = (pad) => {
  let i = playerSequence.push(pad) - 1;
  let sound = document.querySelector(`[data-sound='${pad}']`);
  animatePad(pad)
  sound.play();

  let movesLeft = sequence.length - playerSequence.length;

  if (playerSequence[i] !== sequence[i]) {
    h2.innerText = `Game Over`;
    h3.innerText = `Press Start to try again`;
    console.log(playerSequence, sequence);
    resetGame();
    return;
  }

  if (playerSequence.length === sequence.length) {
    if (playerSequence.length === 20) {
      h2.innerText = 'Winner Winner!';
      h3.innerText = 'Chicken Dinner!';
      return
    }

    playerSequence = [];

    setTimeout(() => nextRound(), 1000);
    return;
  }

  h2.innerText = `Your turn`;
}

container.addEventListener('click', event => {
  let pad = event.target.id
  if (pad) handleClick(pad);
});

startButton.addEventListener('click', nextRound);