/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const dp = [];

  if (s.length < 2) return s;

  // if (i === j) dp[i][j] = true;
  // if (j - i <= 2) dp[i][j] = s[i] === s[j]
  // else dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]

  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(s.length).fill(false);
    dp[i][i] = true;
  }

  let maxStr = s[0];

  // 注意，是竖着一列一列的遍历
  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      // 回文的前提是左右端点相等
      if (s[i] !== s[j]) continue;
      if (j - i <= 2 || dp[i + 1][j - 1]) {
        dp[i][j] = true;
        const strLen = j - i + 1;

        if (strLen > maxStr.length) {
          maxStr = s.substr(i, strLen);
        }
      }
    }
  }

  // console.log(maxStr, dp);
  return maxStr;
};
// @lc code=end
longestPalindrome("cbbd");
