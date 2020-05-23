/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let temp = []
  for (let index = 0; index < nums.length; index++) {
    let diff = target - nums[index]
    if (temp[diff] !== undefined) {
      return [temp[diff], index]
    }
    temp[nums[index]] = index
  }
};
// @lc code=en
// 解法一： hash表， 时间复杂度On, 空间复杂度On
var twoSum = function (nums, target) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i]
    if (hash[nums[i]] !== undefined) {
      return [hash[nums[i]], i]
    }
    hash[dif] = i
  }
}
var nums = [2, 7, 11, 15]
console.log(twoSum(nums, 9))

/*
{
  7: 0

}
*/
// // 解法二： 暴力法， 时间复杂度On2, 空间复杂度O1
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++ ) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
