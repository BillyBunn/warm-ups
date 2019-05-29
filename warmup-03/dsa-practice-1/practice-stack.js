'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    if (this.top) {
      node.next = this.top;
      this.top = node;
    } else {
      this.top = node;
    }
  }

  pop() {
    if (this.top) {
      let popped = this.top.value;
      this.top = this.top.next;
      return popped;
    } else {
      return null;
    }
  }

  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      return null;
    }
  }
}

function traverseStack(stack, cb) {
  let curr = stack.top;
  while (curr) {
    cb(curr);
    curr = curr.next;
  }
}

const stack = new Stack();

[9, 8, 7, 6, 5, 4, 3, 2, 1].forEach((val) => stack.push(val));

traverseStack(stack, (curr) => console.log(curr.value));
traverseStack(stack, (curr) => console.log(curr.value * 2));