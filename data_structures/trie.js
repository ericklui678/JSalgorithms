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
      return false;
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
  find(word) {
    if (typeof word !== 'string') {
      console.log(`Cannot find ${word}. Word must be string typed`);
      return false;
    }
    let curr = this.root;
    for (let letter of word) {
      if (curr.children[letter]) {
        curr = curr.children[letter];
      } else {
        return false;
      }
    }
    return true;
  }
}

module.exports = Trie;
