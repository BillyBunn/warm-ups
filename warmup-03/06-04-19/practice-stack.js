'use strict';

// Process a Stack in the correct order

class Stack {
  constructor() {
    this.stack = [];
  }

  // Adds an item to the top of the stack
  push(item) {
    this.stack.push(item);
  }

  // Removes an item from the top of the stack
  pop() {
    if (this._isEmpty()) null
    return this.stack.pop();
  }

  // Returns the item at the top of the stack
  peek() {
    if (this._isEmpty()) null
    return this.stack[this.stack.length - 1];
  }

  // Helper method, returns boolean
  _isEmpty() {
    return !this.stack.length;
  }
}

let stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);
stack.push(10);

function clear(stack) {
  stack.peek(); 
  while(stack.peek()) { 
    console.log(stack.pop());
  }
}

clear(stack);
