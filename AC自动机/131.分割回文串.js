/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
const reverseSet = new Set();
const isReverse = (str) => {
  if (reverseSet.has(str)) return true;
  const result = str.split("").reverse().join("") === str;
  if (result) reverseSet.add(str);
  return result;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const totalResult = [];

  // 回溯 + 深搜
  const dfs = (tmp, str) => {
    if (str.length === 0) {
      totalResult.push([...tmp]);
      return;
    }
    if (str.length === 1) {
      tmp.push(str);
      totalResult.push([...tmp]);
      tmp.pop();
      return;
    }

    for (let i = 1; i <= str.length; i++) {
      const cur = str.slice(0, i);
      if (!isReverse(cur)) continue;
      tmp.push(cur);
      dfs(tmp, str.slice(i, str.length));
      tmp.pop();
    }
  };
  dfs([], s);

  return totalResult;
};
// @lc code=end

partition("bb");
