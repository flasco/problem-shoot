/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;
  let totalProfit = 0;
  let min = prices[0];
  for (let i = 1, j = prices.length; i < j; i++) {
    const cur = prices[i];
    if (min > cur) {
      min = cur;
    } else if (cur - min > 0) {
      totalProfit += cur - min;
      min = cur;
    }
  }
  return totalProfit;
};

// console.log(maxProfit([7,1,5,3,6,4]));