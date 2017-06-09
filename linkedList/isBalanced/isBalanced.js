/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree
in which the depth of the two subtrees of every node never differ by more than 1.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root){
        return true;
    }
    var helper = function(node){

        var left = node.left ? helper(node.left) : 0;
        if(left === -1){
            return -1;
        }
        var right = node.right ? helper(node.right) : 0;
        if(right === -1){
            return -1;
        }

        return Math.abs(right - left) < 2 ? Math.max(left,right) + 1 : -1;
    };

    return helper(root) !== -1;
};
