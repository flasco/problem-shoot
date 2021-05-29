/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let left = 0;
  let right = 0;
  let isValid = 0;
  let totalValid = 0;
  let start = 0;
  const tMap = {};
  const sMap = {};
  for (const x of t) {
    if (!tMap[x]) {
      tMap[x] = 1;
      totalValid++;
    } else tMap[x]++;
  }

  let len = Number.MAX_VALUE;

  while (right < s.length) {
    const c = s[right++];
    if (tMap[c] != null) {
      if (!sMap[c]) sMap[c] = 1;
      else sMap[c]++;

      if (tMap[c] === sMap[c]) isValid++;
    }

    // console.log(left, right, s.substring(left, right));

    while (isValid === totalValid) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      const c = s[left++];
      if (tMap[c]) {
        if (tMap[c] === sMap[c]) isValid--;
        sMap[c]--;
      }
    }
  }

  return len > s.length ? '' : s.substr(start , len);
};
// @lc code=end

const x = minWindow("a", "aa");
console.log(x);
