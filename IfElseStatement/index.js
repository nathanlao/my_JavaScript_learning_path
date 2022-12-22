let age = 22

if (age <= 20) {
    console.log("You can not enter the club")
} else {
    console.log("Welcome!")
}

let age2 = 100
if (age2 < 100) {
    console.log("Not elegible")
} else if (age2 === 100) { // double equal == is less strict (ignore the fact that is string(data type))
    console.log("Here is your birthday card from the king!")
} else {
    console.log("Not elegible, you have gotten one")
}