/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let ptr1 = s.length - 1;
  let ptr2 = ptr1;
  while (ptr1 >= 0) {
    let count = 0;
    while (ptr1 >= 0 && s[ptr1] !== ' ') ptr1--;
    const subStr = s.substring(ptr1 + 1, ptr2 + 1);
    for (const i of subStr) {
      if ((i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z')) {
        count++;
      }
    }
    if (count > 0) return count;
    ptr1--;
    ptr2 = ptr1;
  }
  return 0;
};
// console.log(lengthOfLastWord('" "'))
// console.log(lengthOfLastWord('Hello World'));
// console.log(lengthOfLastWord('"Hello World"'));
// console.log(lengthOfLastWord('"a "'));
