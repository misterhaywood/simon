
let computerMoves = [];
let playerMoves = [];
let player = 'blue'
let padToFlash;
let turn = document.getElementsByTagName('h2')[0];

let allPads = document.querySelectorAll('.pad')

allPads.forEach(e => e.addEventListener('mousedown', e => e.target.classList.toggle('clicked')))
allPads.forEach(e => e.addEventListener('mouseup', e => e.target.classList.toggle('clicked')))

function getRandomColor() {
    let buttons = ['green', 'red', 'yellow', 'blue']
    let randomNumber = Math.floor(Math.random() * Math.floor(4));
    return buttons[randomNumber];
}

let count = 0;

let moves = [];
function getMoves(){
  for (let i = 0; i < 10; i++) {
    moves.push(getRandomColor());
  }
}

function removeClass(){
  let aVariableWhatever = setTimeout(function(){
    padToFlash.classList.remove('clicked')
  }, 1000)
  return aVariableWhatever;
}

let theTimeout;
function highlightPad (){
  for (let k = 0; k < moves.length; k++) {
    padToFlash = document.querySelector(`#${moves[k]}`)
    console.log(padToFlash)

    padToFlash.classList.add('clicked')
    console.log(padToFlash)
    removeClass()
  }
  clearInterval(theTimeout)
}

function playSequence(e) {
  e.preventDefault()

  getMoves();
  highlightPad();
  console.log(moves)
  moves = [];
}

let startButton = document.querySelector('button');
startButton.addEventListener('click', playSequence)