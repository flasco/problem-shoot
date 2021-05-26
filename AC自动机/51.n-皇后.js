/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const ranktangle = [];
  for (let i = 0; i < n; i++) {
    ranktangle[i] = [];
    for (let j = 0; j < n; j++) {
      ranktangle[i].push('.');
    }
  }

  const mapper = [];

  const backtrack = (nMapper, row) => {
    // console.log(row, nMapper.join(' '));
    if (row >= n) {
      mapper.push(nMapper.map(i => i.join('')));
      return;
    }
    // 回溯算法，重置 + 穷举
    // 每一行一个皇后
    for (let i = 0; i < n; i++) {
      if (!isVaild(nMapper, row, i)) continue;
      nMapper[row][i] = "Q";
      backtrack(nMapper, row + 1);
      nMapper[row][i] = ".";
    }
  };

  const isVaild = (nMapper, row, col) => {
    // 检测列
    for (let i = 0; i < n; i++) {
      if (nMapper[i][col] === "Q") return false;
    }
    // 检测右上
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (nMapper[i][j] === "Q") return false;
    }
    // 检测左上
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (nMapper[i][j] === "Q") return false;
    }

    return true;
  };

  backtrack(ranktangle, 0);

  return mapper;
};
// @lc code=end

solveNQueens(4);