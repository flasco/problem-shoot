/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let p = 0;
  let q = s.length - 1;
  let t;
  while (p < q) {
    t = s[p];
    s[p] = s[q];
    s[q] = t;
    q--;
    p++;
  }
};
// @lc code=end

console.log(reverseString(['s','2']))