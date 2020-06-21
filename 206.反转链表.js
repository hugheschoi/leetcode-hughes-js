/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  let cur = null
  let prev = head
  let temp
  while (prev) {
    temp = prev.next
    prev.next = cur
    cur = prev
    prev = temp
  }
  return cur
};
// @lc code=end

