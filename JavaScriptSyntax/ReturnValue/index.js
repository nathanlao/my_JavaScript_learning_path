let one = 10
let two = 20

function getTotal() {
    return one + two
}

let total = getTotal()
console.log(total)

// Generating random numbers
let randomNumber = Math.random() // -> generate a number between 0 and 1 (excluding 1)
console.log(randomNumber)

// Floor number
let flooredNumber = Math.floor(3.45632) // -> removes the decimals
console.log(flooredNumber)

// Combine and modify range from 1 to 6 
// let randomNum = Math.floor( Math.random() * 6 ) // -> 0 1 2 3 4 5
let randomNum = Math.floor( Math.random() * 6 ) + 1  // -> 1 2 3 4 5 6
console.log(randomNum)


// function return random number from 1 to 6
function rollDice() {
    return Math.floor( Math.random() * 6 ) + 1
}