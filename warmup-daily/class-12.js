'use strict';

/*
Arrays

Create an array of numbers, 1 through 10
Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.
Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.
Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.
Objects
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function forLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
forLoop(numbers);


function whileLoop(arr) {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}
whileLoop(numbers);


function map(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr));
  }
  return result;
}
map(numbers, (val, idx, arr) => {
  return val + idx + arr[0];
});


function filter(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) result.push(arr[i]);
  }
  return result;
}
filter(numbers, (element, index, array) => {
  return element > array[0] && index % 2;
})


function reduce(array, callback, initialValue) {
let result = initialValue;
for (let i = 0; i < array.length; i++) {
  result = callback(result, array[i], i, array);
}
return result;
}

reduce(numbers, (accumulator, currentValue, currentIndex, array) => {
  accumulator.currentValues+=currentValue;
  accumulator.currentIndexes+=currentIndex;
  accumulator.arrays+=array[0];
  return accumulator;
}, {
  currentValues: 0,
  currentIndexes: 0,
  arrays: 0
}) //?

/*

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

let newPeople = ['Odie', ...people, 'Garfield']; //?
const newStuff = {...stuff, cars: [...stuff.cars, 'Saab']}; //?


let state = {people, stuff}; //?
state.people; //?
state.stuff; //?

let newState = {
  people: ['Odie', ...state.people, 'Garfield'],
  stuff: {...state.stuff, cars: [...state.stuff.cars, 'Saab']}
}; //?

