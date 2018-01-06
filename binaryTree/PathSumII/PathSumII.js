/**
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let result = [];
  if (!root) {
    return result;
  }

  (recursive = function(node, target, soFar) {
    soFar.push(node.val);
    if (!node.left && !node.right && node.val === target) {
      result.push(soFar);
      return;
    }
    target -= node.val;
    if (node.left) {
      recursive(node.left, target, soFar.slice());
    }
    if (node.right) {
      recursive(node.right, target, soFar.slice());
    }
  })(root, sum, []);
  return result;
};
