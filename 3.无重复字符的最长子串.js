/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let str = ''
    let num = 0
    let res = 0
    for (n of s) {
      if (str.indexOf(n) === -1) {
        str += n
        num++
        res = res < num ? num : res
      } else {
        str += n
        str = str.slice(str.indexOf(n) + 1)
        num = str.length
      }
    }
    return res
};
// @lc code=end

