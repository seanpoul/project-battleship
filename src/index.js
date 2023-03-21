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
    let a = 0
    for (let i = 0; i < 10; i++) {
        let column = document.createElement("div");
        board.appendChild(column);
        for (let j = 10; j > 0; j--) {
            let row = document.createElement("div");
            row.classList.add("row")
            row.classList.add(a)
            // row.innerHTML = "X";
            column.appendChild(row);
            a++
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
    let count = 1

    for (let a = 1; a < 6; a++) {
        let pos1 = Math.floor(Math.random() * 100);
        let pos2 = pos1 + count;
        fleet.push(new Ship(a, pos1, pos2));
        if (fleet.length == 5) {
            place(fleet)
        }
        count++
    }
}

function place(fleet) {
    console.log(...fleet)
    // console.log(enemyBoard.getElementsByClassName(fleet[0].pos1)[0])
    // console.log(enemyBoard.getElementsByClassName(fleet[0].pos1 + 1)[0])

    let c = 0
    for (let i = fleet[c].pos1; i < fleet[c].pos2; i++) {
        for (let z = 0; z < 5; z++) {
            enemyBoard.getElementsByClassName(fleet[z].pos1)[0].style.backgroundColor = "blue";
            enemyBoard.getElementsByClassName(fleet[z].pos1 + z)[0].style.backgroundColor = "blue";
            console.log(enemyBoard.getElementsByClassName(fleet[z].pos1)[0])
            console.log(enemyBoard.getElementsByClassName(fleet[z].pos1 + c)[0])
        }
        c++
    }


    // pos1 is equal to column
    // pos2 is equal to row
    // add ship length to row axis
}

function hit(event) {
    event.target.style.backgroundColor = "red";
    // if boat and click are the same then its a hit
    // else its a miss
}

function isSunk() {
    // if fleet[#].length == hit.length
    // then boat is sunk
}