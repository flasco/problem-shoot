/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s2Len = s2.length;
  const s1Len = s1.length - 1;
  const s1Map = {};
  for (const s of s1) {
    if (!s1Map[s]) s1Map[s] = 1;
    else s1Map[s]++;
  }

  for (let i = 0; i <= s1Len; i++) {
    const cur = s2[i];
    if (s1Map[cur] != null) s1Map[cur]--;
  }

  const checkEq = () => {
    return Object.keys(s1Map).every(k => s1Map[k] === 0);
  }

  if (checkEq()) return true;

  let p = 1;


  while (p + s1Len < s2Len) {
    const last = s2[p - 1];
    if (s1Map[last] != null) s1Map[last]++;
    const first = s2[p + s1Len];
    if (s1Map[first] != null) s1Map[first]--;
    if (checkEq()) return true;
    p++;
  }

  return false;
};
// @lc code=end

console.log(checkInclusion("ab", "eidboaoo"));
