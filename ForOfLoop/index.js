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

// Remember? This is modern JS features (ES6)
// For of -> a nicer way of iterating
for (let character of characters) {
    console.log(character.powers) // a list of titles...

    // Nested for to loop over powers array
    for (let power of character.powers) {
        console.log(power)
    }
}

