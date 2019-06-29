/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n < 1) return false;
  if (n < 3) return true;
  const str = n.toString(2);
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') cnt++;
    if (cnt > 1) break;
  }
  return cnt === 1;
};
