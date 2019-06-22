/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  const stack = [];
  while (n > 26) {
    let les = n % 26;
    n = (n / 26) | 0;
    if (les === 0) {
      les = 26;
      n = n - 1;
    }
    stack.unshift(les);
  }
  stack.unshift(n);
  return stack.map(i => String.fromCharCode(64 + i)).join('');
};

