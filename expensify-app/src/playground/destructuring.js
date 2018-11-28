// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Wroclaw',
//         temp: 2
//     }
// }

// const {name: firstName = 'Anon', age} = person
// const {city, temp: temperature} = person.location

// console.log(`${firstName} is ${age}. ${city}, ${temperature}`)

// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

//
//Array destruct
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state = 'New York', zip] = address

console.log(`You are in ${city} ${state}.`)

const item = ['coffee-hot','$2.00','$2.50','$2.75'];
const [coffee, small, medium, large] = item;

console.log(`a medium ${coffee} costs ${medium}`)