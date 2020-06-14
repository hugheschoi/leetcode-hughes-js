/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  /**
   * 矩阵符合这样的条件：
    每行中的整数从左到右按升序排列 （说明每一行都是单调递增的）
    每行的第一个整数大于前一行的最后一个整数。（这就说明下一行的开始比上一行最大的大）
    可以将数组拍平，这样就是形成一维的单调栈，再用二分查找的模板求解
   */
  matrix = matrix.flat(2)
  let start = 0, end = matrix.length - 1
  while (start <= end) {
    const mid = start + ((end - start) >> 1);
    if (matrix[mid] === target) {
      return true
    } else if (matrix[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return false
};
// @lc code=end

