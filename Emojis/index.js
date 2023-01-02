const myEmojis = ["👨‍💻", "⛷", "🍲"]

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")

function renderEmoji() {
    emojiContainer.innerHTML = ""
    for (myemoji of myEmojis) {
        const emoji = document.createElement("span")
        emoji.textContent = myemoji
        emojiContainer.append(emoji)
    }
}

renderEmoji()

pushBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = " "   
        renderEmoji()
    }
})

unshiftBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = " "
        renderEmoji()
    }
})

