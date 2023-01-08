const loginForm = document.getElementById('login-form')

// event params 
// -> represent the event which cause this eventListener to trigger (submit in this case)
loginForm.addEventListener('submit', function(event){
    // Built in JS function to prevent the default browser behaviour
    event.preventDefault()

    // Use FormData to get object from a submit event
    // FormData is a constructor functoin -> need a 'new' keyword
    const loginFormData = new FormData(loginForm)
})