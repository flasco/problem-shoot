/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
let p;
var invertTree = function(root) {
  if (root != null) {
    p = root.left;
    root.left = root.right;
    root.right = p;
    invertTree(root.left);
    invertTree(root.right);
  }

  return root;
};
