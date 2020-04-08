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
  if (head == null || head.next == null) return head;
  const dummy = { next: head };
  let prev = dummy;
  let ptr = head;

  while (ptr != null && ptr.next != null) {
    let tmp = ptr.next;

    // 交换
    ptr.next = tmp.next;
    tmp.next = ptr;
    prev.next = tmp;

    prev = ptr;
    ptr = ptr.next; // 下一个
  }
  return dummy.next;
};
// @lc code=end
