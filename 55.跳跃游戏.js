/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums === null) return false
  let end = nums.length - 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= end) {
      end = i
    }
  }
  return end === 0
};
// @lc code=end

