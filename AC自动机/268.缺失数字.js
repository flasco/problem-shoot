/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  const total = ((1 + n) * n) / 2;
  const curTotal = nums.reduce((prev, cur) => prev + cur, 0);
  return total - curTotal;
};
// @lc code=end
