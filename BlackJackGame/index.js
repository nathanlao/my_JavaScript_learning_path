let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard] // Creating arrays - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messagEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// New way of grabbing elementes from the DOM: querySelector
// A more dynamic method, need to pass in #(id selector)
// Tell querySelector (selector -> CSS selector) that is the element with ID 

// let sumEl = document.querySelector("#sum-el")

function startGame() {
    renderGame()
}

function renderGame() {
    // render the first and second card on the page
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    // render the sum on the page
    sumEl.textContent = "Sum: " + sum

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
    // render the message
    messagEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card")
    let newCard = 7
    sum += newCard

    // Push new card to the array
    cards.push(newCard)

    renderGame()
}

