const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')

// log out the msg after 1.5 sec delay
setTimeout(function() {
    // console.log("Modal opened!")
    modal.style.display = "inline"
}, 1500)

// close the modal when btn is clicked (change the element.style. ...)
modalCloseBtn.addEventListener('click', function() {
    modal.style.display = "none"
})

// Prevent the default behaviou that trigger the refresh
consentForm.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log("form submited")
})
