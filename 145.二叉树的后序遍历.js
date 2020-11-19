/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const res = []
    const stack = []
    let curr = root
    while (curr !== null || stack.length) {
      // while (curr) {
      //   stack.push(curr)
      //   res.unshift(curr.val)
      //   curr = curr.right
      // }
      // let node = stack.pop()
      // curr = node.left
      if (curr) {
        stack.push(curr)
        res.unshift(curr.val)
        curr = curr.right
      } else {
        let node = stack.pop()
        curr = node.left
      }
    }
    return res
};
// @lc code=end

