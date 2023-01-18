/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  /**         i
   *  0,1,2,3,4,1,2,1,3,0
   *                    y
   */
  let i = 1;
  let y = 1;
  while (y < nums.length) {
    if (nums[y] !== nums[y - 1]) {
      nums[i] = nums[y];
      ++i;
    }
    ++y;
  }
  return i;
};
// @lc code=end

