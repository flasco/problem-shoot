/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function (head) {
  if (head == null) return null;
  let p1 = head;
  let p2 = head;
  while (true) {
    if (p2 == null || p2.next == null) return null;
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) break;
  }

  p2 = head;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};
// @lc code=end
