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