/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = [0];
  for (let i = 1; i <= amount; i++) {
    dp[i] = amount + 1; // 永远不可能为amount + 1, 等于正无穷
    // 内层 for 循环在求所有选择的最小值
    for (const coin of coins) {
      // 子问题无解，跳过
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  const res = dp[amount];
  return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};
// @lc code=end

