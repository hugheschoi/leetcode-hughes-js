/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
	var res = []
	var subres = []
	function combineSub(start, subres) {
		if (subres.length === k) {
			res.push(subres.slice(0))
			return
		}
		for (let i = start; i<=n;i++) {
			subres.push(i)
			combineSub(i+1,subres)
			subres.pop()
		}
	}
	combineSub(1,subres)
	return res
}
// @lc code=end

