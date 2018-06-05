const util = require("util");

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

  insert(val) {
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
    return node;
  }
}

/*
Find nth element from end of linked list

My Solution:
1) If there is no head, return null
2) Else get length of entire linked list using current / runner and incr length
3) If n is greater than length, return null
4) Else start runner at head again and iterate length - n times
5) Return node at runner

Space: O(1) since you only created length var, so constant space
Time: O(n) since you'll have to traverse through entire linked list for length

Alternative Solution:
1) Set two pointers starting at head
2) Move runner pointer n times
3) Move both pointers simultaneously until runner hits null
4) Return node at first pointer
*/
function nthElementFromEnd(head, n) {
  if (!head) return null;

  let length = 0;
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }

  if (n > length) return null;
  curr = head;
  for (let i = 0; i < length - n; i++) {
    curr = curr.next;
  }
  return curr;
}

function nthElementFromEndAlt(head, n) {
  let left = head;
  let right = head;
  for (let i = 0; i < n; i++) {
    if (right) right = right.next;
    else return null;
  }
  while (right !== null) {
    left = left.next;
    right = right.next;
  }
  return left;
}

let l1 = new SLL();
l1.insert(5);
l1.insert(4);
l1.insert(3);
l1.insert(2);
l1.insert(1);

// console.log(util.inspect(l1, false, null));

// console.log(nthElementFromEnd(l1.head, 0));
console.log(nthElementFromEndAlt(l1.head, 0));
