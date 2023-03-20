let playerBoard = document.getElementById("playerBoard");
let enemyBoard = document.getElementById("enemyBoard");

playerBoard.className = "player";
enemyBoard.className = "enemy";

function gameBoard(board) {
    for (let i = 0; i < 10; i++) {
        let column = document.createElement("div");
        board.appendChild(column);
        for (let j = 0; j < 10; j++) {
            let row = document.createElement("div");
            // row.classList.add(board.id);
            row.classList.add("column" + i);
            row.classList.add("row" + j);
            row.innerHTML = "X";
            column.appendChild(row);
        }
    }
    if (board == enemyBoard) {
        handleClick()
    }
}

gameBoard(playerBoard)
gameBoard(enemyBoard)


function handleClick() {
    let clicked = document.getElementById("enemyBoard");

    clicked.addEventListener("click", function (event) {
        console.log(event.target.classList)
        hit(event)
    })
}


class Ship {
    constructor(lengths, pos1, pos2) {
        this.length = lengths;
        this.pos1 = pos1;
        this.pos2 = pos2;
        this.hits = [];
        this.isSunk = false;
    }
}

function makeFleet(){
    let shipOne = new Ship(1);
    let shipTwo = new Ship(2);
    let shipThree = new Ship(3);
    let shipFour = new Ship(4);
    let shipFive = new Ship(5);
}


function hit(event) {
    event.target.style.backgroundColor = "red";
    // if boat and click are the same then its a hit
    // else its a miss
}

function isSunk() {

}



let spawnShip = [];

let pos1 = Math.floor(Math.random() * 10);
// let po2 = pos1 + ship.length;
// console.log(pos1);

// console.log("yes")
// console.log(ship.length)

function place() {


}