const Queue = require('./queue');

class BinaryTree {
  constructor(val) {
    this.val = val;
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
    console.log(curr.val);
    this.inOrder(curr.right);
  }
  preOrder(curr = this) {
    if (!curr) return;
    console.log(curr.val);
    this.preOrder(curr.left);
    this.preOrder(curr.right);
  }
  postOrder(curr = this) {
    if (!curr) return;
    this.postOrder(curr.left);
    this.postOrder(curr.right);
    console.log(curr.val);
  }
  reverse(root = this) {
    if (!root) return null;
    let temp = root.left;
    root.left = this.reverse(root.right);
    root.right = this.reverse(temp);
    return root;
  }
  sumLeftLeaves(root = this) {
    let sum = 0;

    const findLeftLeaves = (root) => {
      if (!root) return;
      if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val;
      }
      findLeftLeaves(root.left);
      findLeftLeaves(root.right);
    }
    findLeftLeaves(root);
    return sum;
  }
}

let t1 = new BinaryTree(4);
t1.insert(2);
t1.insert(7);
t1.insert(1);
t1.insert(3);
t1.insert(6);
t1.insert(9);

/*
Average Levels

if (!root) return;
    counts[level] = counts[level] || { sum: 0, nodes: 0 };
    counts[level].sum += root.val;
    counts[level].nodes++;
    averageOfLevels(root.left, level + 1, counts);
    averageOfLevels(root.right, level + 1, counts);
    return counts.map(count => count.sum / count.nodes);
*/
