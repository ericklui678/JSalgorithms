// Implementing a stack using SLL with head and tail
const SLNode = require('./SLNode');

module.exports = class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
  push(val) {
    let node = new SLNode(val);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      let curr = this.head;
      while (curr.next) curr = curr.next;
      this.tail = curr.next = node;
    }
    this.length++;
    return node.val;
  }
  shift() {
    if (!this.head) return null;

    let removedNode = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      removedNode.next = null;
    }
    this.length--;
    return removedNode.val;
  }
  display() {
    let str = `head -> `;
    if (this.head) {
      let curr = this.head;
      while (curr) {
        if (!curr.next) str += `${curr.val} `;
        else str += `${curr.val} -> `;
        curr = curr.next;
      }
    }
    str += `<- tail`
    console.log(str);
  }
}
