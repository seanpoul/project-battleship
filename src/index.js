let playerBoard = document.getElementById("playerBoard");
let enemyBoard = document.getElementById("enemyBoard");

playerBoard.className = "player";
enemyBoard.className = "enemy";

class Ship {
    constructor(lengths, pos1, pos2) {
        this.length = lengths;
        this.pos1 = pos1;
        this.pos2 = pos2;
        this.hits = [];
        this.isSunk = false;
    }
}

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
        handleClick();
        makeFleet();
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

function makeFleet() {
    let fleet = [];

    for (let a = 2; a < 7; a++) {
        let pos1 = Math.floor(Math.random() * 10);
        let pos2 = pos1;
        if (pos2 + a > 9) {
            pos2 = pos1 - a;
        } else {
            pos2 = pos1 + a - 1;
        }
        fleet.push(new Ship(a, pos1, pos2));
    }
    console.log(fleet)
    return fleet
}

function hit(event) {
    event.target.style.backgroundColor = "red";
    // if boat and click are the same then its a hit
    // else its a miss
}

function isSunk() {

}

function place() {

}