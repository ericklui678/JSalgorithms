var util = require('util');

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var constructMaximumBinaryTree = function(nums) {
    if (!nums.length) return null;

    let max = maxArray(nums);
    let idx = nums.indexOf(max);
    let node = new TreeNode(max);

    let leftArr = nums.splice(0, idx);
    nums.splice(0, 1);
    let rightArr = nums;

    console.log(leftArr, rightArr);
    node.left = constructMaximumBinaryTree(leftArr);
    node.right = constructMaximumBinaryTree(rightArr);
    return node;
};

var maxArray = function(nums) {
    let max = nums[0];
    for (num of nums) {
        if (num > max) max = num;
    }
    return max;
}

nums = [3,2,1,6,0,5];
let node = constructMaximumBinaryTree(nums);
console.log(util.inspect(node, false, null))
