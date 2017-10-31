const util = require('util');

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  inOrder(curr = this.root) {
    if (!curr) return;
    this.inOrder(curr.left);
    console.log(curr.val);
    this.inOrder(curr.right);
  }

  preOrder(curr = this.root) {
    if (!curr) return;
    console.log(curr.val);
    this.preOrder(curr.left);
    this.preOrder(curr.right);
  }

  postOrder(curr = this.root) {
    if (!curr) return;
    this.postOrder(curr.left);
    this.postOrder(curr.right);
    console.log(curr.val);
  }

  insert(val) {
    let node = new TreeNode(val);

    if (!this.root) {
      this.root = node;
      return this;
    }
    let curr = this.root;
    while (curr) {
      if (val < curr.val) {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = node;
        }
      } else if (val > curr.val) {
        if (curr.right) {
          curr = curr.right;
        } else {
          curr.right = node;
        }
      } else {
        return 'Value already exists';
      }
    }
    return this;
  }

  contains(val, curr = this.root) {
    while (curr) {
      console.log(curr.val);
      if (val === curr.val) {
        return true;
      } else if (val < curr.val) {
        curr = curr.left;
      } else if (val > curr.val) {
        curr = curr.right;
      }
    }
    return false;
  }

  min(curr = this.root) {
    if (!curr) return null;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.val;
  }

  max(curr = this.root) {
    if (!curr) return null;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.val;
  }

  size(curr = this.root) {
    if (!curr) return 0;
    return this.size(curr.left) + this.size(curr.right) + 1;
  }

  empty() {
    return this.root? false: true;
  }

  maxHeight(curr = this.root) {
    if (!curr) return -1;
    let leftHeight = this.maxHeight(curr.left);
    let rightHeight = this.maxHeight(curr.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  isBalanced(curr = this.root) {
    if (!curr) return -1;

    let leftHeight = this.maxHeight(curr.left) + 1;
    let rightHeight = this.maxHeight(curr.right) + 1;
    return Math.abs(leftHeight - rightHeight) > 1? false: true;
  }

  convertToStr(curr = this.root) {
    if (!curr) {
      return ''
    }
    if (!curr.left && !curr.right) {
      return curr.val + '';
    }
    if (!curr.right) {
      return curr.val + '(' + this.convertToStr(curr.left) + ')';
    }
    return curr.val + '(' + this.convertToStr(curr.left) + ')' + '(' + this.convertToStr(curr.right) + ')';
  }

  inOrderToArr(curr = this.root, arr) {
    if (!curr) return;
    arr = arr || [];

    this.inOrderToArr(curr.left, arr);
    arr.push(curr.val);
    this.inOrderToArr(curr.right, arr);
    return arr;
  }

  trimBST(L, R, curr = this.root) {
    if (!curr) return null;
    if (curr.val > R) return this.trimBST(L, R, curr.left);
    if (curr.val < L) return this.trimBST(L, R, curr.right);

    // console.log(curr.val);
    curr.left = this.trimBST(L, R, curr.left);
    curr.right = this.trimBST(L, R, curr.right);
    return curr;
  }

  // DFS through BST and stores sums of all levels in object
  averageLevels(curr = this.root, level = 0, counts = []) {
    if (!curr) return;
    counts[level] = counts[level] || { sum: 0, nodes: 0 };
    counts[level].sum += curr.val;
    counts[level].nodes++;
    this.averageLevels(curr.left, level + 1, counts);
    this.averageLevels(curr.right, level + 1, counts);
    return counts.map(count => count.sum / count.nodes);
  }

  remove(val) {
    const removeNode = function(node, val) {
      if (!node) return null;

      if (val === node.val) {
        // node has no children
        if (!node.left && !node.right) {
          return null;
        }
        // node has no left child
        if (!node.left) {
          return node.right;
        }
        // node has no right child
        if (!node.right) {
          return node.left;
        }
        // node has two children
        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.val = tempNode.val;
        node.right = removeNode(node.right, tempNode.val);
        return node;
      } else if (val < node.val) {
        node.left = removeNode(node.left, val);
        return node;
      } else if (val > node.val) {
        node.right = removeNode(node.right, val);
        return node;
      }
    }
    this.root = removeNode(this.root, val);
  }

}

let b1 = new BST();
b1.insert(50);
b1.insert(17);
b1.insert(72);
b1.insert(12);
b1.insert(23);
b1.insert(54);
b1.insert(76);
b1.insert(9);
b1.insert(14);
b1.insert(19);
b1.insert(67);
console.log(b1.inOrderToArr());

b1.remove(17);
console.log(b1.inOrderToArr());
