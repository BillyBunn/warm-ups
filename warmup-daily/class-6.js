'use strict';
/*
Arrays

Create an array of numbers, 1 through 10
Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.
Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.
Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forLoop = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// forLoop(numbers);

const whileLoop = (arr) => {
  let count = 0;
  while (count < arr.length) {
    console.log(arr[count]);
    count++;
  }
}
// whileLoop(numbers);

const map = (arr, cb) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
}
// map(numbers, (num) => num + 1);//?



const filter = (arr, cb) => {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) filteredArr.push(arr[i]);
  }
  return filteredArr;
}
// filter(numbers, (num) => (num % 2)); //?


const reduce = (arr, cb, initAcc) => {
  let acc = initAcc;
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i);
  }
  return acc;
}
// reduce(numbers, (acc, num, idx) => {
//   acc += num;
//   return acc;
// }, 0) //?

/*

Objects

Begin with the starter code below …
Using spread and destructuring assignment, create a new array called newPeople', which is a copy of the people` array, with a person named ‘Odie’ added to the beginning and one named ‘Garfield’ added to the end.
Using spread and destructuring assignment, create a new object called newStuff', which is a copy of the stuff object, with a new car added to the end of the cars` array within it
Create a state object with keys of people and stuff that contain the people and stuff data.
Do this using object destructuring assignment
Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)
Prove that the original people, stuff, and state are unchanged.
*/

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people: people, stuff: stuff};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'car']};
let newState = {};



// newPeople;
// newStuff;
state;
newState;

