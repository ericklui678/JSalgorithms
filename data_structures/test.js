const util = require('util');
const Trie = require('./trie');

let t1 = new Trie();
t1.insert('hello');
// t1.insert('hey');
// t1.insert('he');
// t1.insert('play')
// t1.insert('plaza');
console.log(util.inspect(t1, false, null));
