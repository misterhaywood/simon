
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

let count = 1;

let moves = [];
function getMoves(){
  for (let i = 0; i < 10; i++) {
    moves.push(getRandomColor());
  }
}

function removeClass(k){
  let removeClass = setTimeout(function(){
    console.log(moves[k])
    let thing = document.querySelector(`#${moves[k]}`).classList.remove('clicked')
    console.log(`remove Class`)
  }, (k+1)*800)
  return removeClass;
}

function addClass(k){
  let addClass = setTimeout(function(){
    document.querySelector(`#${moves[k]}`).classList.add('clicked')
    console.log(`add Class ${k}`)
  }, k*1000)
  return addClass;
}

let theTimeout;
function highlightPad (){
  for (let k = 0; k < moves.length; k++) {
    addClass(k)

    removeClass(k)
    setTimeout(() => console.log('jelly'), 500)
  }
  clearInterval(theTimeout)
}

function playSequence(e) {
  e.preventDefault()

  getMoves();
  highlightPad();
  console.log(moves)
}

let startButton = document.querySelector('button');
startButton.addEventListener('click', playSequence)