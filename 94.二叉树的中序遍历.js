/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 中序遍历 left=>root=>right,遍历事先找左子树，再到根，最后到右子树
 * @param {TreeNode} root
 * @return {number[]}
 */
// 题解1: 递归遍历，树的结构用递归合适，递归的条件就是中序遍历的规则
var inorderTraversal = function(root) {
    var res = []
    function findVal (tree) {
        if (tree) {
            if (tree.left) {
                findVal(tree.left)
            }
            res.push(tree.val)
            if (tree.right) {
                findVal(tree.right)
            }
        }
    }
    findVal(root)
    return res
};
// @lc code=end

