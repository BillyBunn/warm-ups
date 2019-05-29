# Daily Warmup

## Setup

- On each day, create a new branch of this repo with the date
  - e.g., `11-22-2018`
- In the `warmup-daily` folder, copy the `template.js` file and give it the same date name
  - e.g., `11-22-2018.js`
- Follow the instructions below in that file (also included as comments inside the template file)
- Timebox this to 15 minutes

## Warm-Up Exercises

**Arrays**

- Create an array of numbers, 1 through 10
- Write a function, called `forLoop` that takes an array as a parameter, runs the array through a `for(...)` loop and does a `console.log()` of each element.
- Write a function, called `whileLoop` that takes an array as a parameter, runs the array through a `while(...)` loop and does a `console.log()` of each element.
- Implement `.map()`, `.filter()`, `.reduce()` as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.

**Objects**

- Begin with the starter code below ...
- Using spread and destructuring assignment, create a new array called `newPeople', which is a copy of the`people` array, with a person named 'Odie' added to the beginning and one named 'Garfield' added to the end.
- Using spread and destructuring assignment, create a new object called `newStuff', which is a copy of the`stuff`object, with a new car added to the end of the`cars` array within it
- Create a `state` object with keys of `people` and `stuff` that contain the `people` and `stuff` data.
  - Do this using object destructuring assignment
- Using spread and destructuring assignments, create a new object called `newSate`, repeating the `newPeople` and `newStuff` steps above but directly within the `people` and `stuff` nodes of the state object (don't just spread in newPeople and newStuff)
- Prove that the original `people`, `stuff`, and `state` are unchanged.

```
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = [];
const newStuff = {};
let newState = {};
```
