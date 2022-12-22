// Arrays
let featurePosts = [
    "one", 
    "two", 
    "three"
]

let newFeature = "four"
featurePosts.push(newFeature)

// Use for loop
for (let i = 0; i < featurePosts.length; i += 1) {
    console.log(featurePosts[i])
}

console.log( featurePosts.length )

let myLinkin = [
    "third year student",
    "SFU",
    "JavaScript"
]

console.log(myLinkin[1])
console.log(myLinkin[0])

// Arrays with composite/complex data type
let myself = ["Nathan", 25, true]

// Adding and remiving items from arrays
let cards = [7, 4]
cards.push(6)

// remove the last item in an array
cards.pop()
