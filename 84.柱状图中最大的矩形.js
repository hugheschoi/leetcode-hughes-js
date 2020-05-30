/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
// 题解一： 暴力法，超出时间限制
var largestRectangleArea = function (heights) {
  if (heights.length === 1) return heights[0]
  let max = 0
  for (let i = 0; i < heights.length; i++) {
    for (let j = i; j < heights.length; j++) {
      let sliceArr = heights.slice(i, j + 1)
      let minHeight = Math.min.call(null, ...sliceArr)
      max = Math.max(minHeight * (j - i + 1), max)
    }
  }
  return max
};
// 题解二： 利用栈
var largestRectangleArea = function (heights) {
  let stack = [-1]
  let max = 0
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 1 && heights[stack[stack.length - 1]] >= heights[i]) {
      max = Math.max(max, heights[stack.pop()] * (i - stack[stack.length-1] - 1))
    }
    stack.push(i)
  }
  // 若栈有剩余数据，则剩下的一定是单调递增序列
  while(stack.length > 1) {
    max = Math.max(max, heights[stack.pop] * (heights.length - stack[stack.length-1] - 1)) 
  }
  return max
}
// @lc code=end

