'use strict';

const Queue = require('./practice-queue.js');

class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  preOrder(node = this.root, values = []) {
    // INPUT <-- root Node
    // OUTPUT <-- preorder output of tree nodes

    values.push(node.value);

    if (node.leftChild) this.preOrder(node.leftChild, values);

    if (node.rightChild) this.preOrder(node.rightChild, values);

    return values;
  }
}

const tree = new BinaryTree(1);
tree.root.leftChild = new Node(2);
tree.root.rightChild = new Node(6);
tree.root.leftChild.leftChild = new Node(8);
tree.root.rightChild.leftChild = new Node(12);




function breadthFirst(tree) {
  const queue = new Queue();
  queue.enqueue(tree.root);
  while (queue.front) {
    if (queue.front.value.leftChild) queue.enqueue(queue.front.value.leftChild);
    if (queue.front.value.rightChild) queue.enqueue(queue.front.value.rightChild);
    console.log(queue.dequeue().value.value);
  }

}

breadthFirst(tree);