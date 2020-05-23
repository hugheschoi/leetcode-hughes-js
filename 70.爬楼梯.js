/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/*
 * 解法1：动态规划，假设楼层i有dp[i]中方法，方法总数应该等于 剩下一步和剩下两步的走法的和
 * 所以公式： dp[i] = dp[i-1] + dp[i-2]
 * 初始值, n<=1 时 返回1
 * 用到了一次循环时间复杂度On, 另外n长度的dp数组，所以空间复杂度On
 */
var climbStairs = function(n) {
  let dp = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};
/*
 * 解法2：费布拉切数列, 列出数列，滑动窗口，用res1,res2表示两个指针，
 * 每次加一，res1等于原来res2， res2等于原来的sum 所以公式为sum = res1 + res2 ; res1 = res2 ; res2 = sum
 * 时间复杂度On， 空间复杂度O1
 */
var climbStairs2 = function (n) {
  let res1 = 1
  let res2 = 1
  let sum = res2
  for (let i = 2; i <= n; i++) {
    sum = res1 + res2
    res1 = res2
    res2 = sum
  }
  return sum
}
/*
 * 解法三： 费布拉切数列的公式
 *  
 */
// @lc code=end

