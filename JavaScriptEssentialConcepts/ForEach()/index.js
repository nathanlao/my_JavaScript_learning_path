const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    { 
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },  
    { 
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]

// Old way:

// for (let character of characters){
//     console.log(character)
// }

// forEach -> Another JS method for iterating over arrays
// Take in an anonymous function -> the function receive a paramter (each element in the array)

characters.forEach(function(character) {
    console.log(character)
    console.log(character.title)

    // Nested forEach for individual element in the array inside the array
    character.powers.forEach(function(power) {
        console.log(power)
    })
})

// Another feature -> get the index
characters.forEach(function(character, index) {
    console.log(index, character.title)
})