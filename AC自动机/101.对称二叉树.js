/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
  if (root == null) return true;
  const stack = [];
  let p = root.left;
  let q = root.right;
  stack.push(p);
  stack.push(q);

  while (stack.length > 0) {
    p = stack.shift();
    q = stack.shift();
    if (p == null && q == null) continue;
    if (p != null && q != null && p.val === q.val) {
      stack.push(p.left, q.right);
      stack.push(p.right, q.left);
    } else return false;
  }
  return true;
  // return compareSame(root.left, root.right);
};

// function compareSame(p, q) {
//   if (p == null && q == null) return true;
//   if (p != null && q != null && p.val === q.val) {
//     return compareSame(p.left, q.right) && compareSame(p.right, q.left);
//   }
//   return false;
// }

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(2);
// root.left.left = new TreeNode(3);
// root.left.right = new TreeNode(4);
// root.right.left = new TreeNode(4);
// root.right.right = new TreeNode(3);


// console.log(isSymmetric(root));
