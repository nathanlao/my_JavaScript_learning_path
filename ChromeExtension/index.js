// old school way:
// function saveLead() {
//     console.log("button clicked")
// }

// new way:
// hook a event listener onto btn
let inputBtn = document.getElementById("input-btn")

// 1st param: "click" event, 2nd: do sth when user click
inputBtn.addEventListener("click", function() {
    console.log("button clicked from addEventListener")
})