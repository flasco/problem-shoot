/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 判断当前节点往下是否有k个节点
const judgeHaveK = (head, k) => {
  let ptr = head;
  for (let i = 0; i <= k; i++) {
    if (ptr == null) return i === k;
    ptr = ptr.next;
  }
  return true;
};

// 前提 保证一定存在
const getLast = (head, k) => {
  let ptr = head;
  for (let i = 0; i < k; i++) {
    ptr = ptr.next;
  }
  return ptr;
};

// 交换
const reversed = (prev, head, k) => {
  let i = 0;
  let ptr = head;
  let prex = getLast(head, k);
  while (ptr != null && i < k) {
    const tmp = ptr.next;
    ptr.next = prex;
    prex = ptr;
    ptr = tmp;
    i++;
  }

  prev.next = prex;

  return { prev: head, ptr }; // 给到最后的递归节点
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k === 1) return head;
  const dummy = { next: head };
  let prev = dummy;
  let ptr = head;
  while (judgeHaveK(ptr, k)) {
    const x = reversed(prev, ptr, k);
    prev = x.prev;
    ptr = x.ptr;
  }
  return dummy.next;
};
// @lc code=end

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// const x = new ListNode(1);
// x.next = new ListNode(2);
// x.next.next = new ListNode(3);
// x.next.next.next = new ListNode(4);
// x.next.next.next.next = new ListNode(5);

// console.log(reverseKGroup(x, 2));
