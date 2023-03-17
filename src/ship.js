let clicked = document.getElementById("playerBoard");

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
}

function isSunk() {

}

module.exports = ship;