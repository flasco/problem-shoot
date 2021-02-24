/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let p = 0;
  let q = 0;

  const len = s.length;
  while (q < len) {
    const curStr = s.substring(p, q);
    const index = curStr.indexOf(s[q]);
    if (index > -1) {
      p += index + 1;
    }
    q++;
    max = Math.max(max, q - p);
  }

  return max;
};
// @lc code=end
