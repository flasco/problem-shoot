/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root != null) {
    const stack = [{ root, prev: 0 }];
    while (stack.length > 0) {
      const len = stack.length;
      for (let i = 0; i < len; i++) {
        const { root, prev } = stack.shift();
        const total = root.val + prev;
        if (total === sum && root.left == null && root.right == null) {
          return true;
        }
        root.left && stack.push({ root: root.left, prev: total });
        root.right && stack.push({ root: root.right, prev: total });
      }
    }
  }

  return false;
};

// var hasPathSum = function(root, sum) {
//   if (root == null) return false;
//   const vax = sum - root.val;
//   if (root.left == null && root.right == null && vax === 0) return true;
//   return hasPathSum(root.left, vax) || hasPathSum(root.right, vax);
// };

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// const root = new TreeNode(-2);
// root.right = new TreeNode(-3);

// console.log(hasPathSum(root, -5));

