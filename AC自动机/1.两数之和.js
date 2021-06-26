/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const mapper = new Map();
  for (let i = 0; i < nums.length; i++) {
    mapper.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const left = target - nums[i];
    const x = mapper.get(left);
    if (!x || i === x) continue;
    return [i, x];
  }
};
// @lc code=end
