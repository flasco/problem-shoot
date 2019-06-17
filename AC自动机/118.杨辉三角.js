/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows == 0) return [];
  const arr = [[1]];
  for (let i = 1; i < numRows; i++) {
    const row = [1];
    // 把 if 判断从 for 循环中简化取消，可以省 20 ms
    for (let j = 1; j < i; j++) {
      row.push(arr[i - 1][j - 1] + arr[i - 1][j]);
    }
    row.push(1);
    arr.push(row);
  }
  return arr;
};

