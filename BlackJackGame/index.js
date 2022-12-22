let firstCard = 5
let secondCard = 6
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card? 😉")
} else if(sum === 21) { // Is the sum strictly/exactly equal to 21?
    console.log("Wohoo! You've got Blackjack! 😆")
} else {
    console.log("You're out of the game! 😰")
}