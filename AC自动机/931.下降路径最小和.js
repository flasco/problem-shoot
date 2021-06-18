/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const dp = [[...matrix[0]]];
  const n = matrix.length;
  const m = matrix[0].length;
  for (let i = 1; i < n; i++) {
    dp[i] = [];
    // 当前位置的最小值 = 上一行的三个可能位置的最小值 + 当前的值
    for (let j = 0; j < m; j++) {
      if (j === 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j + 1]) + matrix[i][j];
      } else if (j === m - 1) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + matrix[i][j];
      } else {
        dp[i][j] =
          Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]) +
          matrix[i][j];
      }
    }
  }

  // 然后遍历最后一行的最小值即可
  return Math.min(...dp[n - 1]);
};
// @lc code=end
minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]);