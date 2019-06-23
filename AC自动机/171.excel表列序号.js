/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  return s
    .split('')
    .reverse()
    .reduce((p, c, i) => (c.charCodeAt() - 64) * 26 ** i + p, 0);
};
