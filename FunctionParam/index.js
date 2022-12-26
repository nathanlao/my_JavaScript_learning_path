function add(first, second) {
    return first + second
}

console.log(add(3, 4))

// Arrays as parameters
function getFirst(array) {
    return array[0]
}

let first = getFirst([10, 1])
console.log(first)