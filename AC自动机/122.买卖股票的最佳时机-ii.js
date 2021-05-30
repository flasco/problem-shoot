/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
   * dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
   * 不限制购买的次数，那么此刻持有的利润就会和上一次未持有的利润挂钩
   */
  let dp0 = 0;
  let dp1 = -Number.MAX_VALUE;
  let temp = dp0;
  for (let i = 0; i < prices.length; i++) {
    temp = dp0;
    dp0 = Math.max(dp0, dp1 + prices[i]);
    dp1 = Math.max(dp1, temp - prices[i]);
  }
  return dp0;
};

// console.log(maxProfit([7,1,5,3,6,4]));
