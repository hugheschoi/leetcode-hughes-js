/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
// 	let n = nums.length
// 	let res = []
// 	let subres = []
// 	function helper (subres) {
// 		// 终结条件
// 		if (subres.length === n) {
// 			res.push(subres)
// 			return
// 		}
// 		for (let i = 0; i <n; i++) {
// 			if (!subres.includes(nums[i])) {
// 				subres.push(nums[i])
// 				helper(subres.slice(0))
// 				subres.pop()
// 			}
// 		}
// 	}
// 	helper(subres)
// 	return res
// }
function backtrack(list, tempList, nums) {
  if (tempList.length === nums.length) return list.push([...tempList]);
  for(let i = 0; i < nums.length; i++) {
      if (tempList.includes(nums[i])) continue;
      tempList.push(nums[i]);
      backtrack(list, tempList, nums);
      tempList.pop();
  }
}
/**
* @param {number[]} nums
* @return {number[][]}
*/
var permute = function(nums) {
  const list = [];
  backtrack(list, [], nums)
  return list
};ß
// @lc code=end

