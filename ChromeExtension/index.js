let myLeads = ["one", "two"]

// const: can not be reassigned, If possible use const
const inputEl = document.getElementById("input-el")

// old school way:
// function saveLead() {
//     console.log("button clicked")
// }

// new way:
// hook a event listener onto btn
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


// 1st param: "click" event, 2nd: do sth when user click
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// render the leads in the unordered list
for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i] + " "
}