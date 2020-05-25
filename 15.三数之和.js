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
// 题解一： 暴力法： 三重循环
var threeSum = function(nums) {
  if (nums === null || nums.length <= 2) return []
  nums.sort((a, b) => a - b)
  let result = []
  let map = new Map()
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let cur = [nums[i], nums[j], nums[k]]
          if (!map.has(JSON.stringify(cur))) {
            result.push(cur)
            map.set(JSON.stringify(cur))
          }
        }
      }
    }
  }
  return result
}
var test = [-1,0,1,2,-1,-4]
console.log(threeSum(test))
/*
 * 解法2：变为有序数组，循环，并用双指针查找（两边夹逼）
 * 排除重复条件，当下一个元素与当前元素相同时，便会出现重复
 * 当最左侧元素已经大于 0，和不可能为0，那就不用再查找了，
 * 时间复杂度 Onlogn， 空间复杂度 On
 * 解题方法总结：
 * 1、当有求符合条件时，变为有序数组是一条思路，方便求的符合条件
 * 2、双指针是一维数组问题的常用解法
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

