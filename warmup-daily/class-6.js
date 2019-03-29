'use strict';

// Arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forLoop = (arr) => {
  for (let i = 0; i < arr.length; i++) console.log(arr[i]);
}
forLoop(numbers); //?

const whileLoop = (arr) => {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i])
    i++;
  }
}
// test
whileLoop(numbers);

const map = (arr, cb) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(cb(arr[i]));
  }
  return output;
}
// test
map(numbers, (val) => val - 1); //?

const filter = (arr, cb) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]); //?
    if (cb(arr[i])) {
      output.push(arr[i]); //?
    }
  }
  return output;
}
// test
filter(numbers, (val) => {if (val < 6) return true}); //?

const reduce = (arr, cb, init) => {
  let acc = init;
  for (let i = 0; i < arr.length; i++) {
    arr[i]; //?
    acc = cb(acc, arr[i], i);
  }
  return acc;
}

// test
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

reduce(numbers, (acc, val, idx) => {
  acc.values.push(val);
  acc.indexes.push(idx);
  return acc;
}, {
  values: [],
  indexes: []
});
