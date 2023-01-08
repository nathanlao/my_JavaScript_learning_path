const loginForm = document.getElementById('login-form')

// event params 
// -> represent the event which cause this eventListener to trigger (submit in this case)
loginForm.addEventListener('submit', function(event){
    // Built in JS function to prevent the default browser behaviour
    event.preventDefault()

    // Use FormData to get object from a submit event
    // FormData is a constructor functoin -> need a 'new' keyword
    const loginFormData = new FormData(loginForm)

    // Take the object we created (FormData), and get the name field from the object
    const name = loginFormData.get('astronautName')
    const email = loginFormData.get('astronautEmail')
    const password = loginFormData.get('astronautPassword')
    console.log(name, email, password)
})