/*
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root){
        return root;
    }
    if(root.left && root.right){
        let newNode = new TreeNode(0);
        newNode.val = root.left.val
        newNode.left = root.left.left;
        newNode.right = root.left.right;

        root.left = root.right;
        root.right = newNode;

        invertTree(root.left );
        invertTree(root.right);
    } else if( root.left ){
        root.right = root.left;
        root.left = null;
        invertTree(root.right);
    } else if( root.right ){
        root.left = root.right;
        root.right = null;
        invertTree(root.left);
    }
    return root;
};
