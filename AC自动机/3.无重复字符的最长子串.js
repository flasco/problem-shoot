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
  // 双指针滑动窗口，如果遇到重复的字符，就把左指针移动到老的重复的 index + 1 的位置
  // 可能是 string 直接 substring 的性能有点差，不过差不了太多，问题不大
  while (q < len) {
    const curStr = s.substring(p, q);
    const index = curStr.indexOf(s[q++]);
    if (index > -1) p += index + 1;
    max = Math.max(max, q - p);
  }

  return max;
};
// @lc code=end
