
let computerMoves = [];
let playerMoves = [];
let player = 'blue'
let turn = document.getElementsByTagName('h2')[0];

let allCells = document.querySelectorAll('.rbyg')

allCells.forEach(e => e.addEventListener('mousedown', changeOnClick(e)))

allCells.forEach(e => e.addEventListener('mouseup', (e)=>console.log(e)))

let count = 0;

let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', reset)

for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener('click', runGame) //, {once: true})
}

reset()

function getRandomColor() {
    let buttons = ['green', 'red', 'yellow', 'blue']
    let randomNumber = Math.floor(Math.random() * Math.floor(4));
    return buttons[randomNumber];
}

function changeOnClick(event){
    event.style.opacity = 0.5
}

function revertBackOnClick(event){
    console.log(event)
    event.style.opacity = 1
}

console.log(getRandomColor());

function runGame(event) {
    count++;
    event.preventDefault();

    // computers' turn
    if (player == 'blue') {
        computerMoves.push(this.id)
        changeOnClick(this)

        player = 'red'
        turn.innerText = "My Turn"
    }
    // players' turn
    else if (player == 'red') {
        for (let i = 0; i < computerMoves.length; i++) {
            console.log(this.id)
            console.log(`before ${playerMoves}`)
            playerMoves.push(this.id)
            console.log(`after ${playerMoves}`)
        }


        player = 'blue'
        turn.innerText = "Your Turn"
        playerMoves = [];
    }

    console.log(computerMoves, playerMoves);
    // checkWinner()
}

function checkWinner(){
    if (computerMoves.length > 0){
        if (computerMoves == playerMoves) {
            console.log(computerMoves, playerMoves);
        }
    }
}

function reset(){
    count = 0;
    computerMoves = [];
    player = 'blue'
    turn.innerText = "My Turn"

    for (let i = 0; i < allCells.length; i++) {
        // console.log(allCells[i].classList)
        // allCells[i].classList.remove('red')
        // allCells[i].classList.remove('blue')
        allCells[i].addEventListener('click', runGame, {once: true})
    }

}