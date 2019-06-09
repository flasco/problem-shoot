/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let sqrt1 = x / 2;
  let sqrt2;
  if (x === 0) return 0;
  while (true) {
    sqrt2 = (sqrt1 + x / sqrt1) / 2;
    if (sqrt1 - sqrt2 < 1) break;
    sqrt1 = sqrt2;
  }
  return sqrt2 | 0;
};

