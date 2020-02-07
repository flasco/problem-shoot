/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let tmp = 0;
  while (num !== 0) {
    const cur = num % 10;
    num = num / 10 | 0;
    tmp += cur;
  }

  if (tmp >= 10) return addDigits(tmp);
  return tmp;
};
// @lc code=end
