/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const m = {};
  for (const n of nums1) {
    if (m[n] == null) {
      m[n] = 1;
    } else {
      m[n]++;
    }
  }
  const result = [];
  for (const n of nums2) {
    if (m[n] > 0) {
      result.push(n);
      m[n]--;
    }
  }
  return result;
};
// @lc code=end
