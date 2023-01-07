// Target an element's style with JS by using element.style. ...

const revealBtn = document.getElementById('reveal-btn')
const answer = document.getElementById('answer')
const question = document.getElementById('question')

revealBtn.addEventListener('click', function(){

    // take answer and access the style (display) property
    // and change it
    answer.style.display = 'block'
    question.style.backgroundColor = '#68e1fd'
    question.style.color = '#1434A4'
    revealBtn.style.display = 'none'
})