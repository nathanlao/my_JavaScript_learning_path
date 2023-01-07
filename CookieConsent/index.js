const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')

// log out the msg after 1.5 sec delay
setTimeout(function() {
    // console.log("Modal opened!")
    modal.style.display = "inline"
}, 1500)

// close the modal when btn is clicked (change the element.style. ...)
modalCloseBtn.addEventListener('click', function() {
    modal.style.display = "none"
})

// Prevent the default behaviour that trigger the refresh
consentForm.addEventListener('submit', function(event) {
    event.preventDefault()
    // console.log("form submited")
    let string = 
    `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p class="upload-text" id="upload-text">
            Uploading your data to the dark web...
        </p>
    </div>
    `
    modalText.innerHTML = string

    setTimeout(function() {
        document.getElementById('upload-text').textContent = "Making the sale..."
    }, 1500)
})
