/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 < p2) {
    while (formatCode(s[p1]) == 0 && p1 < s.length) p1++;
    while (formatCode(s[p2]) == 0 && p2 > -1) p2--;
    if (formatCode(s[p1++]) != formatCode(s[p2--])) return false;
  }
  return true;
};

function formatCode(char) {
  if (char != null) {
    char = char.charCodeAt();
    if (char >= 65 && char <= 90) return char;
    if (char >= 97 && char <= 122) return char - 32;
    if (char >= 48 && char <= 57) return char;
  }
  return 0;
}

// console.log(isPalindrome('".,"'));
