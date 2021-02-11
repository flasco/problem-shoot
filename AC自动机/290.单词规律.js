/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 * 
 * 正反mapper记录关系，去重
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const pats = pattern.split('');
  const mapper = {};
  const mapper2 = {};
  const ss = s.split(' ');
  if (ss.length !== pats.length) return false;
  for (let i = 0; i < pats.length; i++) {
    let key = mapper[ss[i]];
    if (!key) {
      if (mapper2[pats[i]]) return false;
      mapper[ss[i]] = pats[i];
      key = pats[i];
      mapper2[pats[i]] = ss[i];
    }
    if (key !== pats[i]) return false;
  }
  return true;
};
// @lc code=end

console.log(wordPattern('abba', 'dog cat cat fish'));
