document.addEventListener('click', function(event) {
    // event -> target -> dataset
    // get access to the data that we stored on that event which is the ID of the element
    if (event.target.dataset.share) { // check if the data exists on the target element
        console.log(event.target.dataset.share)
    } else if (event.target.dataset.heart) {
        console.log(event.target.dataset.heart)
    }

    // Aside: Dont use uppercase letters when naming data attributes in HTML
    // JS will flattened it out to lowercase, may cause problems
})