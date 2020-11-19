/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
  let queue = []
  const res = []
  if (root) {
    queue.push(root)
  }
  while(queue.length) {
    // 循环queue，找到最大值存入res中
    let children = []
    let max = queue[0].val
    for (let i = 0; i < queue.length; i++) {
      const curr = queue[i]
      if (curr.left) {
        children.push(curr.left)
      }
      if (curr.right) {
        children.push(curr.right)
      }
      max = Math.max(max, curr.val)
    }
    res.push(max)
    queue = children
  }
  return res
};
// @lc code=end

