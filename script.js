
let computerMoves = [];
let playerMoves = [];
let player = 'blue'
let turn = document.getElementsByTagName('h2')[0];

let allCells = document.querySelectorAll('.rbyg')

allCells.forEach(e => e.addEventListener('mousedown', e => e.classList.toggle('clicked')))
allCells.forEach(e => e.addEventListener('mouseup', e => e.classList.toggle('clicked')))

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

let moves = [];
for (let i = 0; i < 10; i++) {
    moves.push(getRandomColor());
    console.log(moves)
}

function runGame(event) {
    count++;
    event.preventDefault();

    // computers' turn
    if (player == 'blue') {
        computerMoves.push(this.id)
        changeOnClick(this)
        // console.log(`computerMoves: ${computerMoves}`)

        player = 'red'
        turn.innerText = "My Turn"
    }
    // players' turn
    else if (player == 'red') {
        for (let i = 0; i < computerMoves.length; i++) {
            playerMoves.push(this.id)
            // console.log(`playerMoves: ${playerMoves}`)

        }


        player = 'blue'
        turn.innerText = "Your Turn"
        playerMoves = [];
    }

    // console.log(computerMoves, playerMoves);
    // checkWinner()
}

// function checkWinner(){
//     if (computerMoves.length > 0){
//         if (computerMoves == playerMoves) {
//             console.log(computerMoves, playerMoves);
//         }
//     }
// }

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