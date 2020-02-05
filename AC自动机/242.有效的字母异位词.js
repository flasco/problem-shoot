/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const mapx = {};
  for (let i of s) {
    if (mapx[i] != null) mapx[i]++;
    else mapx[i] = 1;
  }

  for (let i of t) {
    if (mapx[i] != null) {
      if (mapx[i] < 1) return false;
      mapx[i]--;
    } else return false;
  }
  return !Object.keys(mapx).some(i => mapx[i] !== 0);
};
// @lc code=end
