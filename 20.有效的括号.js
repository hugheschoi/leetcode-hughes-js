/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 解法一： 暴力法， 循环，匹配下一个元素，如果是有效的括号，就replace成空
// 解法二： 栈，洋葱式的结构要想到用栈解决问题
var isValid = function(s) {
  let stack = []
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for (var i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i])
    } else if (s[i] !== map[stack.pop()]) {
      return false
    }
  }
  return stack.length === 0
};
// @lc code=end

