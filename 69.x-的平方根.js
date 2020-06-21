/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  /**
   * left,right=0,len(array)-1
      while left <= right:
        mid = (left + right) / 2
        if (array[mid] == target) {
          #find the target!
          break or return result
        }
        elif array[mid] < target:
          left = mid + 1
        else:
   */
  /**
   * y = x^2, (x>0)：抛物线，在y轴单调递增；且有上下界，符合二分查找
   */
  if (x === 0 || x === 1) return x
  let left = 1, right = x
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (mid * mid === x) {
      return mid
    } else if (mid * mid < x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
};
// @lc code=end

