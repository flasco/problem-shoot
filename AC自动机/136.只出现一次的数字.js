/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 利用了异或的特性
  return nums.reduce((prev, cur) => prev ^ cur, 0);
};
