import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
// console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const cars = [
    {
    brand: 'Nissan',
    model: 'Leaf',
    price: 3000,
    uuid: '4fb2b6b7-c7ee-4c80-8de1-390e89f43d7f'
    }, 
    {
    brand: 'Toyota',
    model: 'Prius',
    price: 6000,
    uuid: '82a13f62-d239-46a2-a94f-020189338e1a'
    }, 
] 

/**
 * UUID: universally unique identifiers
 * What is UUID?
 * A string of 36 chars
 * often used to identify pieces of data
 * highly likely to be globally unique
 * 
 * 
 * Versoin 4 UUID:
 * randomly generated chars
 */


cars.push({
    brand: 'Tesla',
    model: 'S',
    price: 2222,
    uuid: uuidv4()
})

console.log(cars)
