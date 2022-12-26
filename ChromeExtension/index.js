let myLeads = [] // `["example"]` -> Turn array to string (everything in localStorage has to be string)

// myLeads = JSON.parse(myLeads) // turn string into an array
// myLeads.push("new") // push new value to array
// myLeads = JSON.stringify(myLeads) // turn array to string 
// console.log(typeof myLeads) // typeof to verify that its a string

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)

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

// Persisting data across each refresh (use of localStorage)
// setItem: 1st -> key , 2nd -> value
// localStorage.setItem("myLeads", "www.example.com")
// console.log( localStorage.getItem("myLeads"))
// localStorage.clear()

// 1st param: "click" event, 2nd: do sth when user click
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)

    // clear out the input field
    inputEl.value = ""
    
    // Save myLeads array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    // render the leads
    renderLeads()
})

function renderLeads() {
    // render the leads in the unordered list and use <li> tags
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // old way
        // render <li> with innerHTML
        // add ancor tag <a> -> defines a hyperlink
        // make href open in new tab -> target blank
        // Use template strings/literals
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
        
        // new way of innerHTML:
        // create list element
        // const li = document.createElement("li")
        // // set text content
        // li.textContent = myLeads[i]
        // // append to ul
        // ulEl.append(li)
    }
    // DOM manipulation has a cost, do it one time better than three times in the for loop
    ulEl.innerHTML = listItems
}