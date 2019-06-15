/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root == null) return true;
  const result = getHight(root);
  return !!result;
};

function getHight(p) {
  if (p == null) return 0;
  const hL = getHight(p.left);
  const rL = getHight(p.right);
  // Math.abs 比较耗性能，不如直接写，可以快 10 ms
  if (hL === false || rL === false || hL - rL > 1 || rL - hL > 1) return false;
  return Math.max(hL, rL) + 1;
}

