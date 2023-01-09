document.addEventListener('click', function(e){

    // add CSS class to clasList of its parentElement
    document.getElementById(e.target.id).parentElement.classList.add('read')

    /*
    1. Remove the "unread" class from the 
       parentElement of the clicked element.
    */
    document.getElementById(e.target.id).parentElement.classList.remove('unread')
})