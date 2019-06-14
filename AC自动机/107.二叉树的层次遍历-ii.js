/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const stack = [root];
  const resArr = [];
  if (root != null) {
    let p;
    while (stack.length > 0) {
      const tmpA = [];
      const len = stack.length;

      for (let i = 0; i < len; i++) {
        p = stack.shift();
        if (p == null) continue;
        tmpA.push(p.val);
        if (p.left != null) stack.push(p.left);
        if (p.right != null) stack.push(p.right);
      }
      resArr.unshift(tmpA);
    }
  }

  return resArr;
};
