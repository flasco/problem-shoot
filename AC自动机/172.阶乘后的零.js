/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let cnt = 0;

  while (n > 1) {
    // 这一句会把 1 ~ n 里所有的 5 都算出来，就不用从头遍历 1 - n 了
    cnt += n / 5 | 0;
    n = n / 5 | 0;
  }
  return cnt;
};

