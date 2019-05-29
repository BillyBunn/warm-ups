'use strict';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// QuickSort
const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const position = partitionRandom(arr, low, high); // partition the array
    quickSort(arr, position - 1, high); // sort left
    quickSort(arr, position + 1, high); // sort right
  }
  return arr;
}

/*
partition_r(arr[], lo, hi)
    r = Random Number from lo to hi
    Swap arr[r] and arr[hi]
    return partition(arr, lo, hi)
*/
const partitionRandom = (arr, low, high) => {
  const rand = getRandomIntInclusive(low, high);
  swap(arr, rand, high);
  return partition(arr, low, high);
}

const partition = (arr, low, high) => {
  let pivot = arr[high]
  let i = low;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, high)
  return i;
}

const swap = (arr, left, right) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}


let nums = [9, 7, 8, 3, 4, 5, 2, 6, 1];

quickSort(nums); //?



// MergeSort
// InsertionSort