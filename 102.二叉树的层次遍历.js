/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
/**
 * [3,9,6,null,null,15,7]
 * return {number[][]}
 *            3
 *         9     6
 *            15   7
 * 
 * res    []  [[3]] [[3],[9,6]] [[3]] [[3],[9,6], [15,7]]
 * queue  [3] [9,6] [15,7]      [] 
 * level  [3] [9,6] [15,7]      s
 */
var levelOrder = function (root) {
  const res = []
  const queue = []
  if (root) {
    queue.push(root)
  }
  while (queue.length !== 0) {
    const len = queue.length
    const level = []
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      level.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    res.push(level)
  }
  return res
};
// @lc code=end

