/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  const path_to_x = (root, x) => {
    if (!root) return null;
    if (root.val === x) return [root];

    let left_path = path_to_x(root.left, x);

    if (left_path !== null) {
      left_path.push(root);
      return left_path;
    }

    let right_path = path_to_x(root.right, x);
    if (right_path !== null) {
      right_path.push(root);
      return right_path;
    }
    return null;
  };

  let path_p = path_to_x(root, p.val);
  let path_q = path_to_x(root, q.val);

  if (!path_p || !path_q) return null;

  let lca_to_return = null;
  while (path_p.length && path_q.length) {
    let p_pop = path_p.pop();
    let q_pop = path_q.pop();
    if (p_pop.val === q_pop.val) lca_to_return = p_pop;
  }
  return lca_to_return;
};

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
