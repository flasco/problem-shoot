/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const healthMP = dungeon.map(() => []);
  const maxI = dungeon.length;
  const maxJ = dungeon[0].length;
  /**
   * 核心就是dp，倒推可以避免2种衡量指标
   * dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1]) - currentHurt
   * 假设最后是丝血过关，然后开始倒推到目前的时候需要的最低血量。
   * 如果正推的话需要考虑当前生命值以及历史最低值，两个标准无法权衡哪种最好
   */

  for (let i = maxI - 1; i >= 0; i--) {
    const line = dungeon[i];
    for (let j = maxJ - 1; j >= 0; j--) {
      const currentHurt = line[j];

      if (i === maxI - 1 && j === maxJ - 1) {
        healthMP[i][j] = Math.max(1, 1 - dungeon[i][j]);
      } else if (j === maxJ - 1) {
        healthMP[i][j] = Math.max(1, healthMP[i + 1][j] - currentHurt);
      } else if (i === maxI - 1) {
        healthMP[i][j] = Math.max(1, healthMP[i][j + 1] - currentHurt);
      } else {
        healthMP[i][j] = Math.max(
          1,
          Math.min(healthMP[i][j + 1], healthMP[i + 1][j]) - currentHurt
        );
      }
    }
  }
  // console.log(healthMP);
  return healthMP[0][0];
  /**
   * 当前生命值
   * 历史最低生命值
   * 血量必须大于0（最低不得小于1）
   * 所需最低 = current - need
   */
  // dp(n, m) = Math.min(dp(n + 1, m), dp(n, m + 1)) - current
};
// @lc code=end

// const degurn = [
//   [1, -3, 3],
//   [0, -2, 0],
//   [-3, -3, -3],
// ];
// 5, 3
// console.log(calculateMinimumHP(degurn));
