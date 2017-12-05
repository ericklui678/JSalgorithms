const Queue = require('./queue');

class BinaryTree {
  constructor(val) {
    this.root = val;
    this.left = null;
    this.right = null;
  }
  insert(val) {
    let queue = new Queue();
    queue.push(this)
    const newNode = new BinaryTree(val);

    while(true) {
      let curr = queue.shift();

      if (!curr.left) {
        curr.left = newNode;
        return;
      } else {
        queue.push(curr.left)
      }

      if (!curr.right) {
        curr.right = newNode;
        return;
      } else {
        queue.push(curr.right)
      }
    }
  }
  inOrder(curr = this) {
    if (!curr) return;
    this.inOrder(curr.left);
    console.log(curr.root);
    this.inOrder(curr.right);
  }
  preOrder(curr = this) {
    if (!curr) return;
    console.log(curr.root);
    this.preOrder(curr.left);
    this.preOrder(curr.right);
  }
  postOrder(curr = this) {
    if (!curr) return;
    this.postOrder(curr.left);
    this.postOrder(curr.right);
    console.log(curr.root);
  }
}

let t1 = new BinaryTree(5);
t1.insert(4);
t1.insert(3);
t1.insert(2);
t1.insert(1);

t1.inOrder();
// t1.preOrder();
// t1.postOrder();
