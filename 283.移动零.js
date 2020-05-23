/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* 
 * 解法一： 双指针，用i遍历数组，用j表示最前面0的下标
 * 当下标j一直没有值为0时，就一直跟着i ++，直到num[i]为0时，j的下标就为此时0位置的下标，而i继续往后走，走到nums[i]不为0时，此时就要和nums[j]进行交换，此时j位置已不为0了，此时最前的0的位置在j+1，所以j++）
 * 分析看到，如果j=i的时候，是没必要交换的，所以当i!==j ，或者j<i时进行交换值
 * 交换值直接改为0，可以使用解构交换值
 */

var moveZeroes = function(nums) {
  var i = 0,
      j = 0,
      len = nums.length;
  while(i < len) {
    if (nums[i] !== 0) {
      if (j < i) {
        nums[j] = nums[i]
        nums[i] = 0
      }
      j++
    }
    i++
  }
};
var moveZeroes1 = function(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
    // swap elements
      if (j < i) {
        [nums[j], nums[i]] = [nums[i], nums[j]]
      }
      j++
    }
  }
};
moveZeroes(arr)
console.log(arr)

var arr = [1,3,12,0,0]
/*
 * 解法二： 倒着遍历数组，遇到0就删除，同时push 0
 */
var moveZeroes2 = function (nums) {
  for (let i = nums - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
}
// moveZeroes2(arr)
// console.log(arr)

/*
 * 解法三： 遍历取得非0值，最后push0
 */
var moveZeroes3 = function (nums) {
  let insertZero = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertZero++] = nums[i]
    }
  }
  while(insertZero < nums.length) {
    nums[insertZero ++] = 0
  }
}
moveZeroes3(arr)
console.log(arr)
// @lc code=end

