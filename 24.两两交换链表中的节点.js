/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]

var swapPairs = function(head) {
    if (!head || !head.next) return head
    let next = head.next
    let curr = head
    curr.next = swapPairs(head.next.next)
    next.next = curr
    return next
};
// @lc code=end

