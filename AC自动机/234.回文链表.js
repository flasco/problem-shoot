/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
var isPalindrome = function(head) {
    // 先倍速指针，找到中间点，然后head -》， half -》，比较
    if (head == null) return true;
    let p1 = head;
    const history = [];
    let p2 = p1;
    while (p2 != null) {
      history.push(p1.val);
      p1 = p1.next;
      p2 = p2.next;

      if (p2 == null) history.pop();
      else p2 = p2.next;
    }

    while (p1 != null) {
      const prev = history.pop();
      if (prev !== p1.val) return false;
      p1 = p1.next;
    }
    return true;
};

