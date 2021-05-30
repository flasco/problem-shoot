/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
   * dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]);
   * 不限制购买的次数，那么此刻持有的利润就会和上一次未持有的利润挂钩
   */
  let dp0 = [0, 0];
  let dp1 = [-Number.MAX_VALUE, -Number.MAX_VALUE];
  let temp = [...dp0];
  for (let i = 0; i < prices.length; i++) {
    temp = [...dp0];
    dp0[0] = Math.max(dp0[0], dp1[0] + prices[i]);
    dp0[1] = Math.max(dp0[1], dp1[1] + prices[i]);

    /** 第一次购买的话就是 0 - prices[i], 0 是指历史利润 */
    dp1[0] = Math.max(dp1[0], -prices[i]);
    dp1[1] = Math.max(dp1[1], temp[0] - prices[i]);
  }
  return dp0[1];
};
// @lc code=end
