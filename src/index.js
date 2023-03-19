let playerBoard = document.getElementById("playerBoard");
let enemyBoard = document.getElementById("enemyBoard");

playerBoard.className = "player";
enemyBoard.className = "enemy";

function gameBoard(board) {
    for (let i = 0; i < 10; i++) {
        let column = document.createElement("div");
        // column.classList.add("column" + i);
        board.appendChild(column);
        for (let j = 0; j < 10; j++) {
            let row = document.createElement("div");
            row.classList.add(board.id);
            row.classList.add("column" + i);
            row.classList.add("row" + j);
            row.innerHTML = "X";
            column.appendChild(row);
        }
    }
}

gameBoard(playerBoard)
gameBoard(enemyBoard)


let clicked = document.getElementById("enemyBoard");

clicked.addEventListener("click", function (event) {
    console.log(event.target.classList)
    hit(event)
})

function ship(length) {
    let ship = {
        length: length,
        hits: [],
        isSunk: false
    }
    return ship
}

function hit(event) {
    event.target.style.backgroundColor = "red";
    // if boat and click are the same then its a hit
    // else its a miss
}

function isSunk() {

}



let spawnShip = [];

let pos1 = Math.floor(Math.random()*10);
let po2 = pos1 + ship.length;
console.log(pos1);

console.log("yes")
// console.log(ship.length)

function place() {


}