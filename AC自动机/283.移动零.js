/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let si = 0;
  const len = nums.length;
  for (let fi = 0; fi < len; fi++) {
      if (nums[fi] != 0) nums[si++] = nums[fi];
  }

  // 将slowIndex之后的冗余元素赋值为0
  for (let i = si; i < len; i++) {
      nums[i] = 0;
  }
};
// @lc code=end
