// Benefits of Linked List?
//   + Add and remove items from the beginning of the list in constant time
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(val) {
    // create new node
    let node = new Node(val);
    // if empty SLL, head points to the new node
    if (this.head === null) {
      this.head = node;
    } else { // else, last points to new node
      let last = this.head;
      while (last.next) {
        last = last.next;
      }
      last.next = node;
    }
    return this; // allow function chaining
  }

  deleteNode(val) {
    // if first node contains value, move head to next node
    if (this.head.val === val) {
      this.head = this.head.next;
    } else { // else have prev node point to next node
      let i = this.head;
      while (i.next !== null) {
        if (i.next.val === val) {
          i.next = i.next.next;
          return;
        }
        i = i.next;
      }
    }
  }

  display() {
    let i = this.head;
    process.stdout.write("head -> ");
    while (i) {
      process.stdout.write(i.val + " -> ");
      i = i.next;
    }
    console.log();
  }
  // INTERVIEW FUNCTIONS ------------------------------------------
  // Remove duplicates from an unsorted linked list
  removeDuplicatesWithDict() {
    // if there is at least one node, add the value to dict
    if (this.head !== null) {
      let dict = {}
      dict[this.head.val] = true;
      let i = this.head;
      while (i.next !== null) {
        // if val is in dict, remove node
        if (i.next.val in dict) {
          i.next = i.next.next;
        } else { // else add node val to dict
          dict[i.val] = i.val;
          i = i.next;
        }
      }
    }
  }
  // Remove duplicates without additional memory (using 2 pointers)
  removeDuplicatesNoMem() {
    if (this.head !== null) {
      let current = this.head;
      while (current !== null) {
        let runner = current;
        while (runner.next !== null) {
          if (current.val === runner.next.val) {
            runner.next = runner.next.next;
          } else {
            runner = runner.next;
          }
        }
        current = current.next;
      }
    }
  }
  // Return kth to last element in SLL
  kToLastRecur(k, current) {

  }
  // O(n) + O(n - k)
  kToLastNoRecur(k) {
    if (this.head !== null) {
      var current = this.head;
      var length = 0;
      while (current !== null) {
        length++;
        current = current.next;
      }
    }
    current = this.head;
    for (var i = 1; i < length - k; i++) {
      current = current.next;
    }
    return current;
  }

}

let l1 = new LinkedList();
l1.addNode(1).addNode(2).addNode(3).addNode(4).addNode(5);
console.log(l1.kToLastRecur(3));
// console.log(l1.kToLastNoRecur(5));
