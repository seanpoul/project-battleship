let board = document.getElementById("board");

(function gameBoard() {
    for (let i = 0; i < 10; i++) {
        let row = document.createElement("div");
        board.appendChild(row);
        for (let j = 0; j < 10; j++) {
            let column = document.createElement("div");
            column.innerHTML = "H";
            row.appendChild(column);
        }
    }



})()

module.exports = gameBoard;