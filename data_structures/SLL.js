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

  add(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
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

  isPalindrome(start = this.head, length = this.getLength()) {
    if (length < 0) return true;
    let end = start;
    for (let i = 0; i < length-1; i++) {
      end = end.next;
    }
    if (start.val !== end.val) return false;
    return this.isPalindrome(start.next, length - 2);
  }
}

function sumTwoSLL(head1, head2, sll3 = new SLL()) {
  if (!head1 && !head2) return sll3;
  if (head1 && !head2) {
    sll3.add(head1.val);
    sumTwoSLL(head1.next, head2, sll3);
  }
  if (!head1 && head2) {
    sll3.add(head2.val);
    sumTwoSLL(head1, head2.next, sll3);
  }
  if (head1 && head2) {
    sll3.add(head1.val + head2.val);
    sumTwoSLL(head1.next, head2.next, sll3);
  }
  return sll3;
}

let s1 = new SLL();
s1.add(1).add(2).display();

let s2 = new SLL();
s2.add(4).display();

let sll3 = sumTwoSLL(s1.head, s2.head);
sll3.display();

// console.log(util.inspect(myObj, false, null));
