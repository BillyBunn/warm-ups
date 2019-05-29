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


const queue = new Queue();

[9, 8, 7, 6, 5, 4, 3, 2, 1].forEach((val) => queue.enqueue(val));

function printAndEmpty(queue) {
  let current = queue.front;
  while (current) {
    console.log(queue.dequeue().value);
    current = current.next;
  }
}
// printAndEmpty(queue);

module.exports = Queue;