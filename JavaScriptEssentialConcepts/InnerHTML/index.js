// use .innerHTML to render a BUY button
const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>BUY!</button>"

// when clicked, render a paragraph under the button (in the container)
function buy() {
    container.innerHTML += "<p>Thank you for buying!</p>"
}