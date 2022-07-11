/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let dfs = (node, leftBoundary, rightBoundary) => {
        if (!node) return true;
        else if (leftBoundary>=node.val | rightBoundary<=node.val) return false;
        else {
            return (dfs(node.left, leftBoundary, node.val) & dfs(node.right, node.val, rightBoundary))
        }
    }
    
    return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};