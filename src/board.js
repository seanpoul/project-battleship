let playerBoard = document.getElementById("playerBoard");
let computerBoard = document.getElementById("computerBoard");

function gameBoard(board) {
    for (let i = 0; i < 10; i++) {
        let row = document.createElement("div");
        row.className = "row"
        board.appendChild(row);
        for (let j = 0; j < 10; j++) {
            let column = document.createElement("div");
            column.className = "column";
            column.innerHTML = "X";
            row.appendChild(column);
        }
    }
}

gameBoard(playerBoard)
gameBoard(computerBoard)

module.exports = gameBoard;