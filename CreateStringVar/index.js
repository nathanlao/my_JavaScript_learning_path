// Create my string
let username = "nathan"
let message = "You have three new notifications"
console.log(message + ", " + username + "!") // concatenate two strings

let messageToUser = message +  ", " + username + "!"
console.log(messageToUser) 

// Render the message on HTML page
let welcomeEl = document.getElementById("welcome-el")
let myName = "Nathan"
let greeting = "Hi, my name is "
welcomeEl.innerText = greeting + myName

// Add an emoji to the end
// welcomeEl.innerText = welcomeEl.innerText + "😛"
welcomeEl.innerText += "😛"
