/*
 * @lc app=leetcode.cn id=440 lang=javascript
 *
 * [440] 字典序的第K小数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
  let result = 1
  let lastingStep = k - 1 // 剩余几部
  while (lastingStep > 0) {
    let num = 0
    let expandStartChild = result
    let expandEndChild = result + 1
    while (expandStartChild <= n) {
        num += Math.min(expandEndChild, n + 1) - expandStartChild
        expandStartChild *= 10
        expandEndChild *= 10
    }
    if (num > lastingStep) { // 如果两个节点的数量大于剩余步数，说明要找的东西就在这个的展开子集下，所以
        result *= 10
        lastingStep -= 1
    } else { // 如果步数说明在下个节点，直接跳过这个
        result += 1
        lastingStep -= num
    }
  }
  return result
};
// @lc code=end

