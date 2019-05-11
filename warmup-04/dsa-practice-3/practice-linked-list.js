'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  append(value) {
    let node = new Node(value);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let vals = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let ll = new LinkedList();

for (let i = 0; i < vals.length; i++) {
  ll.insert(vals[i]);
  ll.append(vals[i]);
}

ll.print();