// querySelector more easily target pseudo elements like :checked
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', function(){
    //log out the value of the checked radio option
    const radioChecked = document.querySelector('input[type="radio"]:checked')
    console.log(radioChecked.value)
})