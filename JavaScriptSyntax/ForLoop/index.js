for (let count = 1; count < 11; count+=1 ) {
    console.log(count)
}

for (let count = 10; count < 21; count += 1) {
    console.log(count)
}

for (let i = 10; i < 101; i += 10) {
    console.log(i)
}

// For loop with arrays
let cards = [7, 3, 9]
for (let i = 0; i < cards.length; i++) {
    console.log(cards[i])
}

// For loops, arrays and DOM
let sentence = ["Hello", "my", "name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}

