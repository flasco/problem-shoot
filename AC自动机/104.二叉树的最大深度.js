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
// var maxDepth = function(root) {
//   const stack = [];
//   let maxL = 0;
//   if (root != null) {
//     stack.push({ p: root, l: 1 });

//     while (stack.length > 0) {
//       const { p, l } = stack.shift();
//       if (l > maxL) maxL = l;
//       if (p == null) continue;
//       if (p.left != null) stack.push({ p: p.left, l: l + 1 });
//       if (p.right != null) stack.push({ p: p.right, l: l + 1 });
//     }
//   }

//   return maxL;
// };

var maxDepth = function(root) {
  if (root == null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
