/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 思路：首先写出左括号和右括号不管合不合法能生成几种
var generateParenthesis = function(n) {
  const ans = []
  _generate(0, 0, n, '', ans)
  return ans
};
function _generate (left, right, n, s, ans) {
  // 终结条件
  if (left === n && right === n) {
    ans.push(s)
    return
  }
  // 处理逻辑
  // let s1 = s + '('
  // let s2 = s + ')'
  // 进入下一层
  if (left < n) {
    _generate(left + 1, right, n, s + '(', ans)
  }
  if (left > right) {
    _generate(left, right + 1, n, s + ')', ans)
  }
  // 清除
}
console.log(generateParenthesis(3))
// @lc code=end

