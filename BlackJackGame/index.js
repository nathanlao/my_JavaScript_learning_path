let cards = [] // Creating arrays - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messagEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// New way of grabbing elementes from the DOM: querySelector
// A more dynamic method, need to pass in #(id selector)
// Tell querySelector (selector -> CSS selector) that is the element with ID 

// let sumEl = document.querySelector("#sum-el")


// Creating an Object
let player = {
    name: "Nathan",
    chips: 100
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1 // Range from 1 to 13
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10 ) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    // render the first and second card on the page
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i++ ) {
        cardsEl.textContent += cards[i] + " "
    }

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
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard
    
        // Push new card to the array
        cards.push(newCard)
    }

    renderGame()
}

