'use strict';

const Queue = require('./practice-queue.js');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new Node('a');
root.left = new Node('b');
root.right = new Node('c');
root.left.left = new Node('d');
root.left.right = new Node('e');
root.right.left = new Node('f');
root.right.right = new Node('g');

// Breath First
const breadthFirst = root => {
  let q = new Queue();
  q.enqueue(root);

  while (q.front) {
    let current = q.dequeue().value;
    console.log(current.value);
    if (current.left) q.enqueue(current.left);
    if (current.right) q.enqueue(current.right);
  }
}
// breadthFirst(root);

// Depth First: Pre-Order
const preOrder = root => {
  // visit node
  console.log(root.value);
  // traverse left subtree
  if (root.left) preOrder(root.left);
  // traverse the right
  if (root.right) preOrder(root.right);
}
// preOrder(root);

// Depth First: In-Order
const inOrder = root => {
  // traverse left subtree
  if (root.left) inOrder(root.left);
  // visit node
  console.log(root.value);
  // traverse the right
  if (root.right) inOrder(root.right);
}
// inOrder(root);


// Depth First: Post-Order
const postOrder = root => {
  // traverse left subtree
  if (root.left) postOrder(root.left);
  // traverse the right
  if (root.right) postOrder(root.right);
  // visit node
  console.log(root.value);
}
postOrder(root);
