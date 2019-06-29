/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const hashSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (hashSet.has(nums[i])) return true;
    hashSet.add(nums[i]);
  }
  return false;
};


