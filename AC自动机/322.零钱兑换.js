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
    dp[i] = amount + 1; // 设最值
    for (const coin of coins) {
      if (i - coin < 0) continue; // 如果小于0说明不存在这种情况，直接继续
      dp[i] = Math.min(dp[i - coin] + 1, dp[i]); // 当前 amount 对于每一个硬币的选择，取期间用的最少的
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};
// @lc code=end

coinChange([1, 2, 5], 11);
