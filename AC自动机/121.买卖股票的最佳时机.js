/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxP = 0;
  let min = prices[0];
  for (let i = 1, j = prices.length; i < j; i++) {
    const cur = prices[i];
    if (min > cur) {
      min = cur;
    } else if (cur - min > maxP) {
      maxP = cur - min;
    }
  }
  return maxP;
};

// console.log(maxProfit([2, 4, 1]));
