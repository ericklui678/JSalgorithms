// Implementing a stack using SLL with head and tail
const SLNode = require('./SLNode');

module.exports = class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  front() {
    return this.head ? this.head.val : null;
  }
  isEmpty() {
    return this.head ? true : false;
  }
  contains(val) {
    if (!this.head) return null;
    let curr = this.head;
    while (curr) {
      if (curr.val === val) return true;
      curr = curr.next;
    }
    return false;
  }
  size() {
    let count = 0;
    let curr = this.head;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }
  enqueue(val) {
    let node = new SLNode(val);

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    this.tail = curr.next = node;
  }
  dequeue() {
    if (!this.head) return null;

    let removedNode = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      removedNode.next = null;
    }
    return removedNode;
  }
}
