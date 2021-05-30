/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * dp[day][0] = max(dp[day][0], dp[day-1][1] + prices[day])
   * dp[day][1] = max(dp[day-1][1], -prices[day-1])
   * dp 主要记录的是利润，因为只限制买一次，所以利润仅与当前的股票价格有关
   */
  let dp0 = 0;
  let dp1 = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp0 = Math.max(dp0, dp1 + prices[i]);
    dp1 = Math.max(dp1, -prices[i]);
  }
  return dp0;
};

// console.log(maxProfit([2, 4, 1]));
// maxProfit([1, 2]);
