const loginForm = document.getElementById('login-form')

// event params 
// -> represent the event which cause this eventListener to trigger (submit in this case)
loginForm.addEventListener('submit', function(event){
    // Built in JS function to prevent the default browser behaviour
    event.preventDefault()
})