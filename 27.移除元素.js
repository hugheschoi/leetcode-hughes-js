/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 *           y        
 * 0,1,3,0,4,0,4,2
 *               i          
 */
var removeElement = function(nums, val) {
  // 
  let y = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[y++] = nums[i];
    }
  }
  return y;
};
// @lc code=end

