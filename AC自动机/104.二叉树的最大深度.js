/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  const stack = [root];
  let maxL = 0;
  if (root != null) {
    while (stack.length > 0) {
      maxL++;
      const len = stack.length;
      for (let i = 0; i < len; i++) {
        const p = stack.shift();
        if (p == null) continue;
        if (p.left != null) stack.push(p.left);
        if (p.right != null) stack.push(p.right);
      }
    }
  }

  return maxL;
};

// var maxDepth = function(root) {
//   if (root == null) return 0;
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// }
