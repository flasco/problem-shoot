/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 */

const dpMap = [1, 2];

var climbStairs = function(n) {
  if (n === 0) return 0;
  // 状态方程: x(n) = x(n - 1) + x(n - 2)
  const currentTop = dpMap.length;

  if (n > currentTop) {
    for (let i = currentTop; i < n; i++) {
      dpMap[i] = dpMap[i - 1] + dpMap[i - 2];
    }
  }

  return dpMap[n - 1];
};
