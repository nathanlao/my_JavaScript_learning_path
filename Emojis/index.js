const myEmojis = ["👨‍💻", "⛷", "🍲"]

const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")

for (myemoji of myEmojis) {
    const emoji = document.createElement("span")
    emoji.textContent = myemoji
    emojiContainer.append(emoji)
}

pushBtn.addEventListener("click", function() {
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = " "
    }
})

