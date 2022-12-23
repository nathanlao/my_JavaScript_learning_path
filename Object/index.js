// Objects - store data in depth - composite / complex data type
// key-value pairs

let course = {
    title: "CSS",
    lessons: 16,
    creater: "Juno",
    length: 100,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

// dot notaion to access the values of object
console.log( course.tags )

// bracket notation
console.log( course["tags"] )

//
let airbnb = {
    isAvailable: true,
    title: "Live like a king in my castle",
    score: 30,
    image: ["img/one.png", "img/two.png"]
}

console.log(airbnb.title)
console.log(airbnb.image)

// Practice
let person = {
    name: "Nathan",
    age: 25,
    country: "HongKong",
}

function logData() {
    console.log(person.name + " " + person.country)
}

logData()

// Arrays
let countries = ["China", "India", "USA"]
for (let i = 0; i < countries.length; i++) {
    console.log("- " + countries[i])
}

//push & pop -> add/remove item at the end of array
//unshift & shift -> add/remove item at the start of array
let testArray = ["Monaco", "India", "USA"]
testArray.pop()
testArray.shift()
testArray.unshift("China")

// function to return a random item in array
let hands = ["rock", " paper", "scissor"]
function getHand() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}
