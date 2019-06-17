/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

const rowMap = [[1], [1, 1], [1, 2, 1]];
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowMap[rowIndex] != null) return rowMap[rowIndex];
  // 从末尾开始迭代推算，可以节省重复时间
  for (let i = rowMap.length; i <= rowIndex; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      row.push(rowMap[i - 1][j - 1] + rowMap[i - 1][j]);
    }
    row.push(1);
    rowMap.push(row);
  }
  return rowMap[rowIndex];
};
