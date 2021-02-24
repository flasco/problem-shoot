/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const n1 = [...new Set(nums1)];
  const n2 = [...new Set(nums2)];
  let p,q;
  const arr = [];
  if (n1.length < n2.length) {
    p = n1;
    q = n2;
  } else {
    q = n1;
    p = n2;
  }
  for (let i = 0, len = p.length; i < len; i++) {
    if (q.includes(p[i])) arr.push(p[i]);
  }
  return arr;
};
// @lc code=end
