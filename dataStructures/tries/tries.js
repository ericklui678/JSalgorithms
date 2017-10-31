const util = require('util');

class Node {
  constructor(val){
    this.val = val;
    this.isWord = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node('');
  }

  add(word, curr = this.root) {
    if (!word) {
      return null;
    }
    let letter = word[0];
    let child = curr.children[letter];

    // if letter is new child, create new child, otherwise skip
    if (!child) {
      child = new Node(letter);
      curr.children[letter] = child;
    }

    let remainder = word.substring(1);
    if(!remainder) {
      child.isWord = true;
    }
    this.add(remainder, child);
  }
}

let t1 = new Trie();
t1.add('hello');
console.log(util.inspect(t1, false, null));
t1.add('hellos');

// console.log(util.inspect(t1, false, null));

// console.log(util.inspect(t1.root.children, false, null));
console.log(util.inspect(t1, false, null));
