/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (hashMap.has(cur)) {
      if (i - hashMap.get(cur) <= k) return true;
    }
    hashMap.set(cur, i);
  }
  return false;
};

