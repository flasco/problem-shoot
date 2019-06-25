/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // 状态方程 max(n) = Math.max(max(n - 1), max(n - 2) + nums[n])
  if (nums.length < 2) return nums[0] || 0;
  if (nums.length < 3) return Math.max(nums[0], nums[1]);
  const maxFP = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    maxFP[i] = Math.max(maxFP[i - 1], maxFP[i - 2] + nums[i]);
  }
  return maxFP.pop();
};
