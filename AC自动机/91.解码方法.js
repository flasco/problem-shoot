/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const n = s.length;
  s = " " + s;
  const f = new Array(n + 1).fill(0);
  f[0] = 1;
  /**
   * f[i] = f[i − 1],1 <= a <= 9
   * f[i] = f[i - 2] ,10 <= b <= 26
   * f[i] = f[i − 1] + f[i − 2],1 <= a <= 9 && 10 <= b <= 26
   */
  for (let i = 1; i <= n; ++i) {
    const a = s[i] - "0";
    const b = (s[i - 1] - "0") * 10 + a;
    if (a > 0 && a <= 9) f[i] = f[i - 1];
    if (b >= 10 && b <= 26) f[i] += f[i - 2];
  }
  return f[n];
};
// @lc code=end

console.log(numDecodings("0"));
