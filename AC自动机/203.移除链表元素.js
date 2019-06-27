/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  while (head != null && head.val === val) head = head.next;
  if (head != null) {
    let p1 = head;
    let p2 = p1.next;

    while (p2 != null) {
      if (p2.val === val) {
        p1.next = p2.next;
        p2 = p2.next;
      } else {
        p1 = p2;
        p2 = p2.next;
      }
    }
  }

  return head;
};
