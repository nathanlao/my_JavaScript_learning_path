// Falsy value
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JS signlaizes emptiness
// NaN


// null -> how you as a developer signalize emptiness
let currentViewers = null

currentViewers = ["Jane", "Nick"]
if (currentViewers) {
    console.log("We have viewers")
}

// JS -> undefined
let people
console.log(people)

// Check if the value is truthy or falsy
let trueOrFalse = Boolean("HELLO")
