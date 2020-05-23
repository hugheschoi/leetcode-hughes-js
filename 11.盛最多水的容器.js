/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let L = 0
  let R = height.length - 1
  let res = 0
  let sum = 0
  while (L<R) {
      sum =  Math.min(height[R],height[L]) * (R-L)
      if (height[L] < height[R]) {
          L++
      } else {
          R--
      }
      res = sum > res ? sum : res
  }
  return res
};
