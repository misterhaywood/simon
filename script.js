let computerMoves = [];
let playerMoves = [];
let player = 'blue'
let padToFlash;
let turn = document.getElementsByTagName('h2')[0];
let buttons = ['green', 'red', 'yellow', 'blue']
let allPads = document.querySelectorAll('.pad')

allPads.forEach(e => e.addEventListener('mousedown', e => e.target.classList.toggle('clicked')))
allPads.forEach(e => e.addEventListener('mouseup', e => e.target.classList.toggle('clicked')))

function getRandomColor() {
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

computerMoves = moves.slice(0, count);

function removeClass(k){
  let removeClass = setTimeout(function(){
    let thing = document.querySelector(`#${computerMoves[k]}`).classList.remove('clicked')
  }, (k+1)*700)
  return removeClass;
}

function addClass(k){
  let addClass = setTimeout(function(){
    document.querySelector(`#${computerMoves[k]}`).classList.add('clicked')
  }, k*1000)
  return addClass;
}

let theTimeout;
function highlightPad (){
  for (let k = 0; k < computerMoves.length; k++) {
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
  count++
  console.log(moves)
  console.log(count)

}

let startButton = document.querySelector('button');
startButton.addEventListener('click', playSequence)