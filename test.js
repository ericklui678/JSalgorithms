const util = require('util');

function quickSort(arr, pivot, start, end) {
  if (arr.length < 2) return arr;
}

let unsortedArr = [4,2,6,5,3,9];
quickSort(unsortedArr);

// const map = {
//   'asdlfkj': 3,
//   'ssalkfnan': 0,
//   'a1d': 0,
//   'asdkd': 1
// }
//
// let keyArr = Object.keys(map).sort(function (a, b) {
//   return b.length - a.length;
// });
// console.log(keyArr);

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
//
// class BST {
//   constructor() {
//     this.root = null;
//   }
//
//   insert(val, curr = this.root) {
//     let node = new Node(val);
//
//     if (!this.root) {
//       this.root = node;
//       return;
//     }
//
//     while (curr) {
//       if (val < curr.val) {
//         if (curr.left) {
//           curr = curr.left;
//         } else {
//           curr.left = node;
//           return;
//         }
//       } else if (val > curr.val) {
//         if (curr.right) {
//           curr = curr.right;
//         } else {
//           curr.right = node;
//           return;
//         }
//       } else {
//         console.log('cannot insert duplicate values');
//         return;
//       }
//     }
//   }
//
//   inOrder(curr = this.root) {
//     if (!curr) return;
//
//     this.inOrder(curr.left);
//     console.log(curr.val);
//     this.inOrder(curr.right);
//   }
//
//   preOrder(curr = this.root) {
//     if (!curr) return;
//
//     console.log(curr.val);
//     this.preOrder(curr.left);
//     this.preOrder(curr.right);
//   }
//
//   postOrder(curr = this.root) {
//     if (!curr) return;
//
//     this.postOrder(curr.left);
//     this.postOrder(curr.right);
//     console.log(curr.val);
//   }
//
//   leftToRightBFS() {
//     if (!this.root) return;
//
//     let result = [];
//     let queue = [this.root];
//     let curr;
//     while (queue.length) {
//       curr = queue.shift();
//       result.push(curr.val);
//       curr.left && queue.push(curr.left);
//       curr.right && queue.push(curr.right);
//     }
//     return result;
//   }
//
//   maxHeight(curr = this.root) {
//     if (!curr) return -1;
//
//     let leftHeight = this.maxHeight(curr.left) + 1;
//     let rightHeight = this.maxHeight(curr.right) + 1;
//     return Math.max(leftHeight, rightHeight);
//   }
//
//   isBalanced(curr = this.root) {
//     if (!curr) return true;
//
//     let balanced = false;
//     let leftHeight = this.maxHeight(curr.left);
//     let rightHeight = this.maxHeight(curr.right);
//     let dif = Math.abs(leftHeight - rightHeight);
//
//     if (dif <= 1) {
//       balanced = true;
//     }
//
//     return balanced && this.isBalanced(curr.left) && this.isBalanced(curr.right);
//   }
//
//   sumPerLevel(curr = this.root, level = 0, visited = []) {
//     if (!curr) return;
//
//     // visited[level] = visited[level] + curr.val || curr.val;
//     visited[level] = visited[level] || {'sum': 0, 'count': 0};
//     visited[level].sum += curr.val;
//     visited[level].count++;
//
//     this.sumPerLevel(curr.left, level + 1, visited);
//     this.sumPerLevel(curr.right, level + 1, visited);
//
//     return visited.map(key => (key.sum / key.count));
//   }
//
//   sumPerNode(curr = this.root, visited = {}) {
//     if (!curr) return;
//
//     let sum = curr.val
//     if (curr.left && curr.right) {
//       sum += curr.left.val + curr.right.val;
//     } else if (curr.left && !curr.right) {
//       sum += curr.left.val;
//     } else if (curr.right && !curr.left) {
//       sum += curr.right.val;
//     }
//
//
//     if (sum in visited) {
//       visited[sum]++;
//     } else {
//       visited[sum] = 1;
//     }
//
//
//     this.sumPerNode(curr.left, visited);
//     this.sumPerNode(curr.right, visited);
//     return Object.keys(visited).sort(function (a, b) {
//       return visited[b] - visited[a];
//     });
//   }
//
// }
//
// let b1 = new BST();
// b1.insert(10);
// b1.insert(20);
// b1.insert(30);
// b1.insert(5);
// b1.insert(7);
// b1.insert(25);
// b1.insert(35);
// b1.insert(15);

// console.log(b1.sumPerNode());
// console.log(b1.isBalanced());
// console.log(b1.sumPerLevel());
