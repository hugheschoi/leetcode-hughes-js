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
};
// @lc code=end

