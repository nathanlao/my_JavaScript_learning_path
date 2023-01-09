// .filter() -> getting only the elements we want from an array

const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

// .filter() needs a functoin -> this function is going to hold the test that
// we going to call on each element on array
const adults = ages.filter(function(age) {
    // if (age >= 18) {
    //     return true
    // } else {
    //     return false
    // }

    // simpilify logic
    return age >= 18
})

const children = ages.filter(function(age) {
    return age < 18
})

console.log(adults.length)
console.log(children)

// .filter() on Array of objects
const series = [
    {
        name: 'The Wire',
        location: 'Baltimore',
        lengthInHours : 60,
        genres: ['action', 'thriller', 'detective', 'suspense']
    },
    {
        name: 'Game of Thromes',
        location: 'Westeros and Essos',
        lengthInHours : 70.25,
        genres: ['fantasy', 'action', 'tragedy']
    },
    {
        name: 'Friends',
        location: 'New York',
        lengthInHours : 85,
        genres: ['comedy', 'romance', 'drama']
    },
    {
        name: 'The Walking Dead',
        location: 'Atlanta',
        lengthInHours : 131,
        genres: ['zombie', 'apocalypse', 'thriller', 'suspense']
    },
    {
        name: 'The Big Bang Theory',
        location: 'Pasadena',
        lengthInHours : 139.66,
        genres: ['comedy', 'nerd', 'romance']
    },
]

const thrillers = series.filter(function(show) {
    return show.genres.includes('thriller')
})

console.log(thrillers)