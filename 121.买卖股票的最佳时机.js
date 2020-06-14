/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 只要后一天的价格比前一天大，就在这一天买进，后一天卖出
  let mostprofit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      mostprofit += prices[i] - prices[i - 1]
    }
  }
  return mostprofit
};
// @lc code=end

