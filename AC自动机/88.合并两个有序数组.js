/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
  return nums1;
};

// const n1 = [1,2,3,0,0,0];
// const n2 = [2,5,6];
// console.log(merge(n1, 3, n2, 3));
