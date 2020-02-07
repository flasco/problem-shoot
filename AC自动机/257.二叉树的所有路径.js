/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root == null) return [];
  const stack = [{ root, str: '' }];
  const resultArr = [];
  while (stack.length) {
    let { root, str } = stack.pop();
    str += root.val;
    if (root.left == null && root.right == null) resultArr.push(str);
    else {
      str += ',';
      root.left != null && stack.push({ root: root.left, str });
      root.right != null && stack.push({ root: root.right, str });
    }
  }

  return resultArr.map(i => i.split(',').join('->'));
};
// @lc code=end
