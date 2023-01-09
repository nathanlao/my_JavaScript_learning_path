import { catsData } from "./data.js"

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifCheckBox = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')

// event listerner detects the button 'change' and get the id (by calling function)
emotionRadios.addEventListener('change', highlightCheckedOption)

memeModalCloseBtn.addEventListener('click', closeModal)

getImageBtn.addEventListener('click', renderCat)

function highlightCheckedOption(event) {
    // Grab the whole class with 'radio' and loop thru, remove the 'highlight' class
    // radiosArray is actually a HTML collection
    const radiosArray = document.getElementsByClassName('radio')
    for (let radio of radiosArray) {
        radio.classList.remove('highlight')
    }

    document.getElementById(event.target.id).parentElement.classList.add('highlight')
}

function closeModal() {
    memeModal.style.display = 'none'
}

function renderCat(){
    const catObject = getSingleCatObject()
    let catString = `
        <img 
            class="cat-img" 
            src="./images/${catObject.image}"
            alt="${catObject.alt}"
        >`

    memeModalInner.innerHTML = catString
    memeModal.style.display = 'flex'
}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()

    if (catsArray.length === 1) {
        // get the single object (not an object array)
        return catsArray[0]
    } else {
        // select a random object from the array if more than 1
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
    }
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


