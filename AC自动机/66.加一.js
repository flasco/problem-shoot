/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const newArr = [...digits];
  let needUp = false;
  let curUpedSum;
  for (let i = digits.length - 1; i > -1; i--) {
    curUpedSum = newArr[i] + 1;
    newArr[i] = curUpedSum % 10;

    if (curUpedSum < 10) {
      needUp = false;
      break;
    }

    needUp = true;
  }
  if (needUp) newArr.unshift(1);
  return newArr;
};
