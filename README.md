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
// Use these arrays for the examples below:
const myPets = ["Dog", "Cat", "Bird", "Turtle"];
const myFish = ["Fish"];
const myGerbil = ["Gerbil"];
const newArray = ["Zebra", "Giraffe"];
```

```js
push(); & unshift();

MUTATION OF ARRAY

// push adds Hippo to the end of the array to change and return newArray = ['Zebra','Giraffe','Hippo']
newArray.push('Hippo');

// unshift adds Hippo to the beginning of the array to change and return newArray = ['Hippo', 'Zebra', 'Giraffe']
newArray.unshift('Hippo')
```


---

```js
pop(); & shift();

MUTATION OF ARRAY

// removes and returns the last item of the array, ['Giraffe']
newArray.pop();
// removes and returns the first item of the array, ['Zebra']
newArray.shift();

newArray will now only return ["Giraffe"]

```

---

```js

indexOf();

READ ONLY

// finds the index of the item Cat inside myPets array
myPets.indexOf("Cat"); // 1
```

---

```js

join();

NEW COPY

// joins the items in the array myPets, and adds a space (" ") 
myPets.join(" ");

// joins the items in the array myPets, and adds " and " between each item.
myPets.join(" and ");

```

---

```js

slice();

NEW COPY

// removes the items prior to the index number 1 and returns a COPY of myPets
myPets.slice(1); // ["Cat", "Bird", "Turtle"]

// removes the items prior to the index 1, and  items with index 2 and after and returns a COPY of myPets
myPets.slice(1, 2); // ['Cat']
```

---

```js

splice(startatindex, numberofitemstodelete, "replacement");

MUTATION OF ARRAY

// splice returns deleted items; 
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




REGEX
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
