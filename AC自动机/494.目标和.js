/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  /** dfs 加记忆化搜索 */
  const totalLen = nums.length;
  const setter = new Map();
  const deeper = (index, cur) => {
    const key = index + "_" + cur;
    if (setter.has(key)) return setter.get(key);
    if (index === totalLen) {
      setter.set(key, cur === target ? 1 : 0);
      return setter.get(key);
    }
    const add = deeper(index + 1, cur + nums[index]);
    const sub = deeper(index + 1, cur - nums[index]);
    setter.set(key, add + sub);

    return setter.get(key);
  };

  return deeper(0, 0);
};
// @lc code=end
console.log(
  findTargetSumWays(
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    1
  )
);
