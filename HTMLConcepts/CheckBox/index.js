const continueBtn = document.getElementById('continue-btn')
const acceptTerms = document.getElementById('accept-terms')
const mailList = document.getElementById('add-mail-list')

continueBtn.addEventListener('click', function(){
    
/*
1. Add a second checkbox to see if a user
   wants to be added to the mailing list.
2. If they do, log out "mail accepted" when 
   the continue button is clicked. If they
   don't, log out "mail not accapted."
*/
    if (acceptTerms.checked){
        console.log("Terms accepted!")    
    } else{
        console.log("Terms refused!")         
    }

    if (mailList.checked) {
        console.log("Added") 
    } else {
        console.log("Not accepted")
    }
})