'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
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
    return this.head;
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this.head;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return this.head;
  }
}

const ll = new LinkedList();

[9, 8, 7, 6, 5, 4, 3, 2, 1].forEach((val) => ll.insert(val));

function print(ll) {
  if(!ll.head) null;
  let curr = ll.head;
  while(curr) {
    console.log(curr.value);
    curr = curr.next;
  }
}

print(ll);
