'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.front) {
      this.back.next = node;
      this.back = node;
    } else {
      this.front = node;
      this.back = node;
    }
  }
  dequeue() {
    if (this.front) {
      const node = this.front;
      this.front = this.front.next;
      return node;
    } else {
      return null;
    }
  }
}
module.exports = Queue;

const processQueue = arr => {
  // fill queue
  let q = new Queue();
  for(let i =0; i<arr.length; i++) {
    q.enqueue(arr[i]);
  }

  // empty queue, print values
  while (q.front) {
    console.log(q.dequeue().value);
  }
}

let vals = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
processQueue(vals);
