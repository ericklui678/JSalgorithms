const util = require('util');

class TreeNode {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
};

class Tree {
  constructor() {
    this.root = null;
  };

  add(val, parent) {
    let node = new TreeNode(val);
    let foundParent = this.findBFS(parent);

    if (foundParent) {
      foundParent.children.push(node);
    } else if (!this.root) {
      this.root = node;
    } else {
      return `Node ${parent} not found in tree`;
    }
  };

  findBFS(val) {
    if (!this.root) return null;

    let queue = [this.root];
    while (queue.length) {
      let curr = queue.shift();
      if (val === curr.val) {
        return curr;
      }
      for (let child of curr.children) {
        queue.push(child);
      }
    }
    return null;
  }
};

let t1 = new Tree();
t1.add(1, 1);
t1.add(2, 1);
t1.add(3, 1);
t1.add(4, 2);
t1.add(5, 10);
console.log(t1.findBFS(4));
console.log(util.inspect(t1, false, null));
