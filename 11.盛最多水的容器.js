/**
 * @param {number[]} height
 * @return {number}
 */
/* 
 * 题解1： 枚举
 * 时间复杂度 On2
 */
var maxArea = function (height) {
    const len = height.length
    let max = 0
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            var area = (j - i) * Math.min(height[i], height[j])
            max = Math.max(area, max)
        }
    }
    return max
}
/* 
 * 题解2：双指针，从两边开始往里找，记录最大面积；哪边高则哪边指针保持不动，另外一个指针移动
 * 时间复杂度On
 */
var maxArea = function(height) {
    let L = 0
    let R = height.length - 1
    let res = 0
    let sum = 0
    while (L < R) {
        sum = Math.min(height[L], height[R]) * (R - L)
        if (height[L] < height[R]) {
            L++
        } else {
            R--
        }
        if (sum > res) res = sum
    }
    return res
};

var maxArea = function (height) {
    let max = 0
    for (let i = 0, j = height.length - 1; i < j;) {
        let minHeight = height[i] < height[j] ? height[i++] : height[j--]
        max = Math.max(minHeight * (j - i), max)
    }
    return max
}
