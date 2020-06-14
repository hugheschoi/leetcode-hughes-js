/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 排序
  let res = 0
  const fn = (a, b) => a - b
  g.sort(fn)
  s.sort(fn)
  let i = 0, j = 0;
  while (i < g.length, j < s.length) {
    if (g[i] <= s[j]) {
      res += 1
      i++
      j++
    } else {
      j++
    }
  }
  return res
};
// @lc code=end

