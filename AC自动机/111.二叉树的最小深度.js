/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  let minL = 1;
  if (root == null) return 0;
  const stack = [root];
  while (stack.length > 0) {
    const len = stack.length;
    for (let i = 0; i < len; i++) {
      const p = stack.shift();
      if (p.left == null && p.right == null) return minL;
      p.left && stack.push(p.left);
      p.right && stack.push(p.right);
    }
    minL++;
  }
};
