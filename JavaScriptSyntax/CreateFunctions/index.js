// Setting up the count down
function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown()

// Create my function 
function myPrintFunction() {
    console.log(42)
}

myPrintFunction()

// Global Scope variable
let lap1 = 10
let lap2 = 20
let lap3 = 30
// Create a function that logs out the sum 
function logSum() {
    let total = lap1 + lap2 + lap3
    console.log(total)
}

logSum()

// Increment function
let lapsCompleted = 0
function incrementLap() {
    lapsCompleted = lapsCompleted + 1
}

incrementLap()
incrementLap()
incrementLap()
console.log(lapsCompleted)