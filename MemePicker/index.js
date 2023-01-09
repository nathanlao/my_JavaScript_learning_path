import { catsData } from "./data.js"

const emotionRadios = document.getElementById('emotion-radios')

// event listerner detects the button 'change' and get the id (by calling function)
emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(event) {
    document.getElementById(event.target.id).parentElement.classList.add('highlight')
}

// Set up a "for of" in getEmotionsArray to iterate over the data.
function getEmotionsArray(cats){
    const emotionArray = []
    for (let cat of cats){
        // console.log(cat)

        // nested "for of" to loop emotions from the emotionTags array in each object.
        for (let emotion of cat.emotionTags) {
            // Does emotionArray include the emtion aleady?
            if (!emotionArray.includes(emotion)){
                // push each emotion to the array
                emotionArray.push(emotion)
            }
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
            <div class="radio">
                <label for="${emotion}">${emotion}</label>
                <input
                    type="radio"
                    id="${emotion}"
                    values="${emotion}"
                    name="emotions"
                />
            </div>
        `
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)


