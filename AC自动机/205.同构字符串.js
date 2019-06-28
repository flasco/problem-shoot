/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let sumA = 0;
  let sumB = 0;

  let a = {};
  let b = {};
  for (let i = 0; i < t.length; i++) {
    if (a[s[i]] == null) {
      a[s[i]] = sumA++;
    }
    if (b[t[i]] == null) {
      b[t[i]] = sumB++;
    }
    if (a[s[i]] !== b[t[i]]) return false;
  }
  return true;
};

// console.log(isIsomorphic('abac', 'abad'))
