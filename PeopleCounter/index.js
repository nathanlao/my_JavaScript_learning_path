// document.getElementById("count-el").innerText = 10 // Use js to get element by its id

// // 1. create a variable
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch

// console.log(count)

// // 2. math operation
// let age = 25
// let humanDogRatio = 7 
// let myDogAge = age * humanDogRatio
// console.log(myDogAge)

// // 3. Reassign variable
// count = 10
// console.log(count)

// // 4. Increment var
// count = count + 1
// console.log(count)

// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// // Create a functnon for click event listener
// function increment() {
//     console.log("The button is clicked")
// }

/*
* DOM: Document Object Model (aka how you use JavaScript to modify a website)
* Document: Interacting with HTML document
* Object: Document keyword in JS is of the data type object -> Take the HTML do and shoved
*         it into a JS object.
* Model: A representation -> HTML element, then a JS model (the representation that have 
*        over the element in JS)
*/

// Asking for html element
let countEl = document.getElementById("count-el") // pass in argument
let saveEl = document.getElementById("save-el")

let count = 0
// Create a functnon for incrementing the count (click event listener)
function incrementCount() {
    count += 1
    // Text inside of tags, we want it to be the count
    countEl.textContent = count // Render the variable using innerText, but innerText is 
                                // computationally expensive, use textContent instead
    // Note: innerText is aware of styling and wont return the text of "hidden" elements
    console.log(count)
}

// Create a function for saving the count
function save() {
    let countRecordStr = count + " - "
    saveEl.textContent += countRecordStr // textContent: gets the content of all elements
    console.log(count)
}

