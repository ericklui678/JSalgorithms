const util = require('util');

class TrieNode {
  constructor(letter = '') {
    this.val = letter;
    this.children = {};
    this.isCompleteWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    if (typeof word !== 'string') {
      console.log(`Cannot insert ${word}. Word must be string typed`);
      return;
    }
    let curr = this.root;
    for (let letter of word) {
      if (!(curr.children[letter])) {
        curr.children[letter] = new TrieNode(letter);
      }
      curr = curr.children[letter];
    }
    curr.isCompleteWord = true;
  }
}

let t1 = new Trie();
t1.insert('hell');
t1.insert('hello');
t1.insert('hey');
console.log(util.inspect(t1.root.children, false, null));
