/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 1 3 3 4
// 4 3 3 1
var isPalindrome = function(head) {
  let str = ''
  let reverseStr = ''
  while (head) {
    str += head.val
    reverseStr = head.val + reverseStr
    head = head.next
  }
  return str === reverseStr
};
// @lc code=end

