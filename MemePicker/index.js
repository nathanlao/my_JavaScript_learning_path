import { catsData } from "./data.js"

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifCheckBox = document.getElementById('gifs-only-option')

getImageBtn.addEventListener('click', getMatchingCatsArray)

// event listerner detects the button 'change' and get the id (by calling function)
emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(event) {
    // Grab the whole class with 'radio' and loop thru, remove the 'highlight' class
    // radiosArray is actually a HTML collection
    const radiosArray = document.getElementsByClassName('radio')
    for (let radio of radiosArray) {
        radio.classList.remove('highlight')
    }

    document.getElementById(event.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray() {
    
    if (document.querySelector('input[type="radio"]:checked')) {
        // Get radio checked value and if the gif checkbox is checked
        
        // querySelector allows specfic pseudo selector
        const checkedRadio = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifCheckBox.checked

        // Use filter to find matches in the array of catsData objects
        const matchingCatsArray = catsData.filter(function(cat) {
            // gif box is checked?
            if (isGif) {
                return cat.emotionTags.includes(checkedRadio) && cat.isGif
            } else {
                return cat.emotionTags.includes(checkedRadio)
            }
        })
        return matchingCatsArray
    }
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
                    value="${emotion}"
                    name="emotions"
                />
            </div>
        `
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)


