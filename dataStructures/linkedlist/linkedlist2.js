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
    console.log('what is head', this.head);

    if (!this.head) {
      console.log('setting head', this);
      this.head = node;
      console.log('after set', this);
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
}

function addTwoSLL(s1, s2, s3 = new SLL()) {
  console.log(s1, s2);
  // console.log(s1.val, s2.val);
  // console.log(s3);
  if (!s1 && !s2) return s3;
  if (s1 && s2) {
    console.log('condition 1');
    console.log(s1.next, s2.next);
    s3.addToBack(s1.val + s2.val);
    addTwoSLL(s1.next, s2.next);
  }
  else if (!s1 && s2) {
    console.log('condition 2');
    s3.addToBack(s2.val);
    addTwoSLL(s1, s2.next);
  }
  else if (s1 && !s2) {
    console.log('condition 3');
    s3.addToBack(s1.val);
    addTwoSLL(s1.next, s2);
  }
  return s3;
}

let s1 = new SLL();
s1.addToBack(5).addToBack(10).addToBack(15).display();

let s2 = new SLL();
s2.addToBack(10).addToBack(20).addToBack(30).display();

console.log();
let myObj = addTwoSLL(s1.head, s2.head);
console.log(util.inspect(myObj, false, null));
