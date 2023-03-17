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

module.exports = ship;