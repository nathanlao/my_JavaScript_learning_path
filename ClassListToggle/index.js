const sortBtn = document.getElementById('sort-btn')
const container = document.getElementById('container') 
       
sortBtn.addEventListener('click', function(){

/*
1. Make the Sort by Price button 
   reverse the order of the paintings.
*/ 
    container.classList.toggle('reverse')

})
