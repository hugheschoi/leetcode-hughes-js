/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  /**
   *  4   5   6   7   0   1   2   3
   *              mid
   */
  // let left = 0, right = nums.length - 1;
  // while (left < right) {
  //   let mid = Math.floor((left + right) / 2)
  //   if (nums[0] <= nums[mid] && (target > nums[right] || target < nums[0])) {
  //     // 说明在mid后面
  //     left = mid + 1
  //   } else if (target < nums[0] && target > nums[mid]) {
  //     left = mid + 1
  //   }
  // }
};
// @lc code=end

