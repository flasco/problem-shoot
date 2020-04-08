/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  let prev = null;
  let ptr = head;
  let tmp = head;
  if (head == null) return head;
  if (head.next == null) return head;
  const first = head.next;
  while (ptr != null) {
    if (ptr.next == null) break;

    // 交换
    tmp = ptr.next;
    ptr.next = tmp.next;
    tmp.next = ptr;
    if (prev != null) prev.next = tmp;

    prev = ptr;
    ptr = ptr.next; // 下一个
  }
  return first;
};
// @lc code=end
