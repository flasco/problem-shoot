/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
// var hasCycle = function(head) {
//   let p = head;
//   const pArr = [];
//   while (p != null) {
//     if (pArr.includes(p)) return true;
//     pArr.push(p);
//     p = p.next;
//   }
//   return false;
// };

// 快慢指针赛跑，判断是否存在环形
var hasCycle = function(head) {
  if (head == null || head.next == null) return false;
  let p1 = head;
  let p2 = head.next;
  while (p1 != p2) {
    if (p2 == null || p2.next == null) return false;
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return true;
};
