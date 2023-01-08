import { catsData } from "./data.js"

const emotionRadios = document.getElementById('emotion-radios')

// Set up a "for of" in getEmotionsArray to iterate over the data.
function getEmotionsArray(cats){
    const emotionArray = []
    for (let cat of cats){
        // console.log(cat)

        // nested "for of" to loop emotions from the emotionTags array in each object.
        for (let emotion of cat.emotionTags) {
            // push each emotion to the array
            emotionArray.push(emotion)
        }
    }
    return emotionArray
}

function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats)
    let radioItems = ``
    for (let emotion of emotions) {
        // put each emotion in a p tag
        radioItems += `
            <p>${emotion}</p>
        `
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)


