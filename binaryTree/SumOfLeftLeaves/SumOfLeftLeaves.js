/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let result = 0;

    (function internalSum(current) {
        if (!current) {
            return;
        }
        if (current.left) {
            if (current.left.left === null && current.left.right === null) {
                result += current.left.val;
            }
            internalSum(current.left);
        }
        if (current.right) {
            internalSum(current.right);
        }

    })(root);

    return result;
};