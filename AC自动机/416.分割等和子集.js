/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  const part = total / 2;
  
  const maper = new Map();

  const dfs = (index, cur) => {
    if (cur > part) return false;
    if (cur === part) return true;

    maper.set(cur, true);
    for (let i = index; i < nums.length; i++) {
      if (maper.has(cur + nums[i])) continue;
      if (dfs(i + 1, cur + nums[i])) return true;
    }
    return false;
  }

  // console.log(JSON.stringify(dp));
  return dfs(0, 0);
};
// @lc code=end
canPartition([1, 5, 11, 5]);
