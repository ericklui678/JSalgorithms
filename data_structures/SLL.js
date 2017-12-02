const util = require('util');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addToBack(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        // console.log('inside while');
        curr = curr.next;
      }
      curr.next = node;
    }
    return this;
  }

  contains(val, curr = this.head) {
    while (curr) {
      if (curr.val === val) return true;
      else curr = curr.next;
    }
    return false;
  }

  removeFront() {
    if (!this.head) return null;

    this.head = this.head.next;
    return this.head;
  }

  length(curr = this.head) {
    if (!curr) return 0;

    let count = 0;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  average(curr = this.head) {
    if (!curr) return 0;

    let avg = 0;
    let count = 0;
    while (curr) {
      avg += curr.val;
      count++;
      curr = curr.next;
    }
    return avg / count;
  }

  display(curr = this.head) {
    while (curr) {
      process.stdout.write(`${curr.val} -> `)
      curr = curr.next
    }
    console.log();
  }

  getLength(curr = this.head, length = 0) {
    while (curr) {
      length++;
      curr = curr.next
    }
    return length;
  }

  checkPalindrome(start = this.head, length = this.getLength()) {
    if (length < 0) return true;
    let end = start;
    for (let i = 0; i < length-1; i++) {
      end = end.next;
    }
    console.log(start.val, end.val, length);
    if (start.val !== end.val) return false;
    return this.checkPalindrome(start.next, length - 2);
  }
}


let s1 = new SLL();
s1.addToBack(1).addToBack(2).addToBack(10).addToBack(3).addToBack(1).display();
console.log(s1.checkPalindrome());

// console.log(util.inspect(myObj, false, null));
