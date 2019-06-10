/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const map = new Map();
  let ptr = head;
  if (ptr == null) return ptr;
  let tmptr = ptr.next;
  map.set(ptr.val, 1);
  while (tmptr != null) {
    while (tmptr != null && map.has(tmptr.val)) tmptr = tmptr.next;
    ptr.next = tmptr;
    if (tmptr != null) {
      map.set(tmptr.val, 1);
      ptr = ptr.next;
      tmptr = tmptr.next;
    }
  }
  return head;
};

// const l1 = new ListNode(1);
// let h = l1;
// h.next = new ListNode(1);
// h = h.next;
// h.next = new ListNode(2);
// h = h.next;
// h.next = new ListNode(3);
// h = h.next;
// h.next = new ListNode(3);
// console.log(deleteDuplicates(l1));
