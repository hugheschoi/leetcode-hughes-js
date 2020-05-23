/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const ans = []
  if (nums === null || nums.length < 4) return ans
  nums.sort((a,b) => a-b)
  const len = nums.length
  for (let k = 0; k < len - 3; k++) {
    if (k > 0 && nums[k] === nums[k-1]) continue
    let min = nums[k]+nums[k+1]+nums[k+2]+nums[k+3]
    if (min > target) {
      break
    }
    let max = nums[k]+nums[len - 1]+nums[len - 2]+nums[len - 3]
    if (max < target) {
      break
    }
    for (let i = k + 1; i < len - 2; i++) {
      
    }
  }
};
// @lc code=end

