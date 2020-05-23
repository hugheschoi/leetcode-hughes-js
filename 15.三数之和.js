/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
 * 解法1：变为有序数组，循环，并用双指针查找
 * 排除重复条件，当下一个元素与当前元素相同时，便会出现重复
 * 当最左侧元素已经大于 0，和不可能为0，那就不用再查找了，
 * 复杂度 Onlogn
 */
var threeSum = function(nums) {
  let result = []
  const len = nums.length;
  if (!nums || len < 3) return result
  nums.sort((a,b) => a-b)
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i-1]) continue
    let L = i + 1
    let R = len - 1
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        result.push([nums[i], nums[L], nums[R]])
        while(L<R && nums[L] === nums[L+1]) L++;
        while(L<R && nums[R] === nums[R-1]) R--;
        L++
        R--
      } else if (sum < 0) {
        L++
      } else if (sum > 0) {
        R--
      }
    }
  }
  return result
};
// @lc code=end

