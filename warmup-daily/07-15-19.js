// Arrays

// Create an array of numbers, 1 through 10

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.

function forLoop(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.

function whileLoop(arr) {
  var i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}

// Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.

function map(arr, cb) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return result;
}

function filter(arr, cb) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) result.push(arr[i]);
  }
  return result;
}

function reduce(arr, cb, init) {
  for (var i = 0; i < arr.length; i++) {
    init = cb(init, arr[i], i);
  }
  return init;
}

console.log('forLoop()');
forLoop(nums);
console.log('------------------\n\n');

console.log('whileLoop()');
whileLoop(nums);
console.log('------------------\n\n');

console.log('map()');
let squares = map(nums, val => val * val);
console.log({ squares });
console.log('------------------\n\n');

console.log('filter()');
let odds = filter(nums, val => !!(val % 2));
console.log({ odds });
console.log('------------------\n\n');

console.log('reduce()');
let sum = reduce(
  nums,
  (acc, num) => {
    acc += num;
    return acc;
  },
  0
);

console.log({ sum });
console.log('------------------\n\n');

// Objects

// Begin with the starter code below ...
const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
};

// Using spread and destructuring assignment, create a new array called `newPeople', which is a copy of the `people` array, with a person named 'Odie' added to the beginning and one named 'Garfield' added to the end.

let newPeople = ['Odie', ...people, 'Garfield'];

// Using spread and destructuring assignment, create a new object called `newStuff', which is a copy of the `stuff` object, with a new car added to the end of the `cars` array within it

const newStuff = { ...stuff, cars: [...stuff.cars, 'Maserati'] };

// Create a `state` object with keys of people and stuff that contain the `people` and `stuff` data.
// Do this using object destructuring assignment

let state = { people, stuff };

// Using spread and destructuring assignments, create a new object called `newSate`, repeating the `newPeople` and `newStuff` steps above but directly within the people and stuff nodes of the state object (don't just spread in `newPeople` and `newStuff`)

let newState = {
  ...state,
  people: ['Odie', ...state.people, 'Garfield'],
  stuff: { ...state.stuff, cars: [...state.stuff.cars, 'Lamborghini'] }
};

// Prove that the original people, stuff, and state are unchanged.

console.log({ people });
console.log('------------------\n\n');

console.log({ newPeople });
console.log('------------------\n\n');

console.log({ stuff });
console.log('------------------\n\n');

console.log({ newStuff });
console.log('------------------\n\n');

console.log({ state });
console.log('------------------\n\n');

console.log({ newState });
console.log('------------------\n\n');
