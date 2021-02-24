/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
const vowels = ['a', 'e', 'i', 'o', 'u'];
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let p = 0;
  let q = s.length - 1;
  let t;
  if (s.length < 2) return s;
  const x = s.split('');
  while (true) {
    while (p < q && !vowels.includes(x[p].toLocaleLowerCase())) p++;
    while (q >= 0 && !vowels.includes(x[q].toLocaleLowerCase())) q--;

    if (p >= q) break;
    t = x[p];
    x[p] = x[q];
    x[q] = t;
    p++;
    q--;
  }
  return x.join('');
};
// @lc code=end
console.log(reverseVowels('.,'))
