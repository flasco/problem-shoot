/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = [0];
  /**
   * 找规律
   * 奇数情况下，dp[i] = dp[i - 1] + 1;
   * 偶数情况下，dp[i] = dp[i / 2];
   */
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = dp[i / 2];
    }
  }
  return dp;
};
// @lc code=end
