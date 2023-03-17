let playerBoard = document.getElementById("playerBoard");
let computerBoard = document.getElementById("computerBoard");

playerBoard.className = "player";
computerBoard.className = "computer";

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
gameBoard(computerBoard)

module.exports = gameBoard;