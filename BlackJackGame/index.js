let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messagEl = document.getElementById("message-el")

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if(sum === 21) { // Is the sum strictly/exactly equal to 21?
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        console.log(message)
        isAlive = false
    }
    // Display the message
    messagEl.textContent = message
}

