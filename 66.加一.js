/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  /*
      1   2   9
              r
          3   0
      
   */
  if (digits.length === 0) return [1]
	let addNum = 1
	for (var i = digits.length - 1; i >=0; i--) {
		if (digits[i] + addNum > 9) {
			digits[i] = [0]
			addNum = 1
		} else {
			digits[i]+=addNum
			addNum = 0
		}
	}
	if (addNum === 1) {
		digits.unshift(1)
	}
	return digits
};
// @lc code=end

