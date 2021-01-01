/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 * 输入: [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // p[i] = Math.max(p(i - 1) + nums[i], nums[i]);
  const p = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    p[i] = Math.max(p[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...p);
};
// @lc code=end



