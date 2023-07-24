# JavaScript CheatSheet

![](https://img.shields.io/badge/License-MIT-white.svg)

## Table of Contents

1. [Description](#description)
2. [Array Methods](#array)
3. [Usage](#usage)
4. [License](#license)
5. [Contributions](#contributions)
6. [Tests](#tests)
7. [Questions](#questions)

## Description

---

This is an Array Method CheatSheet for JavaScript.

---

### Array

```js
// ARRAYS
const myPets = ["Dog", "Cat", "Bird", "Turtle"];
const myFish = ["Fish"];
const myGerbil = ["Gerbil"];
const newArray = ["Zebra", "Giraffe"];
```

---

```js
    push(); & unshift();
newArray.push('Hippo');
// newArray = ['Zebra','Giraffe','Hippo']

newArray.unshift('Hippo')
// new Array = ['Hippo', 'Zebra', 'Giraffe']
```

---

```js
    pop(); & shift();
newArray.pop();
// new Array = ['Zebra']
newArray.shift();
// new Array = ['Giraffe']

```

---

```js
indexOf();

myPets.indexOf("Cat"); // 1
```

---

```js
join();

myPets.join(" "); // Dog Cat Hamster

myPets.join(" and "); // Dog and Cat and Hamster
```

---

```js
slice();

myPets.slice(1); // ['Cat', 'Hamster']

myPets.slice(1, 2); // ['Cat']
```

---

```js
splice();

myPets.splice(1, 2, "Lizard"); // ['Dog', 'Lizard'];
```

---

```js
concat();

const allPets = myPets.concat(myFish, myGerbil); // ['Dog', 'Cat', 'Bird', 'Turtle', 'Fish', 'Gerbil']
```

---

```js
forEach();

myPets.forEach((pet) => console.log(pet));
```

---

```js
filter();

const threeLetterPets = myPets.filter(pet.length === 3);
```

---

```js
map();

const lovedPets = myPets.map((pet) => `${pet} is the best pet`);
```

---

```js
const values = [1, 2, [7, 3], 4, [1], 6];

const people = [
  { name: "Magdalena" },
  { name: "Brad" },
  { name: "Caleb" },
  { name: "David" },
  { name: "America" },
];
```

---

```js
flat();

console.log(values.flat()); // [1, 2, 7, 3, 4, 1, 6]
```

---

```js
reduce();

const total = values.reduce((total, currentVal) => total + currentNum); // total =
```

---

```js
every();
console.log(values.every((val) => val < 8)); //true
```

---

```js
findIndex();
const bradIndex = people.findIndex((person) => person.name === "Brad"); // 1
```

---

```js
find();
firstValueOverSix = values.find((val) => val > 6); // 7
```

---

```js
some();
console.log(values.some((val) => val > 6)); // true
```

---

```js
sort();
values.sort((a, b) => a - b); // [1, 1, 2, 3, 4, 6, 7]
myPets.sort(); // ['Bird', 'Cat', 'Dog', 'Turtle']
```

                    \D captures non numeric
                    \d captures digits
                    .  matches any character
                    \. skips first character and then matches next character
                    \ is an escape
                    ^.+\. moves everything back and ending with a period
                    [A-Z]
                    [a-z]
                    z{2,5}
                    \s picks up space
                    ^ starts
                    $ ends

email validators in expression
([a-z\.\+\-])+@([a-z]+\.[a-z]+)
