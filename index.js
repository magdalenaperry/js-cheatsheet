const myPets = ['Dog', 'Cat', 'Bird', 'Turtle'];
myPets.indexOf('Cat')  // 1

myPets.join(' ') // Dog Cat Hamster
myPets.join(' and ') // Dog and Cat and Hamster

myPets.slice(1) // ['Cat', 'Hamster'];
myPets.slice(1, 2) // ['Cat'];


myPets.splice(1, 2, 'Lizard') // ['Dog', 'Lizard'];

const myFish = ['Fish'];
const myGerbil = ['Gerbil']

const allPets = myPets.concat(myFish, myGerbil) // ['Dog', 'Cat', 'Bird', 'Turtle', 'Fish', 'Gerbil']

myPets.forEach(pet => console.log.log(pet));

const threeLetterPets = myPets.filter( pet.length === 3)

const lovedPets = myPets.map(pet => `${pet} is the best pet`)


const numbers = [1, 2, [7, 3], 4, [1], 6]

console.log(values.flat()) // [1, 2, 7, 3, 4, 1, 6]

const total = values.reduce((total, currentVal) => total + currentNum) // total = 


const people = 
[
    {name: 'Magdalena'},
    {name: 'Brad'}, 
    {name: 'Caleb'},
    {name: 'David'}, 
    {name: 'America'}
]

const bradIndex = people.findIndex(person => person.name === 'Brad') // 1

console.log(values.every(val => val < 8)) //true


firstValueOverSix = values.find(val => val > 6) // 7

console.log(values.some(val => val > 6)) // true

values.sort((a, b) => a - b); // [1, 1, 2, 3, 4, 6, 7]  
myPets.sort(); // ['Bird', 'Cat', 'Dog', 'Turtle']