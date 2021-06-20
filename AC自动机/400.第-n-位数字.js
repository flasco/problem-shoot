/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 */

// @lc code=start

const lens = [9, 189, 2889, 38889, 488889, 5888889, 68888889, 788888889, 8888888889, 98888888889];
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  if (n < 10) return n;

  let s = 0;
  for (let i = 0; i < 10; i++) {
    if (lens[i] > n) {
      s = i;
      break;
    }
  }
 
  // 11 - 9 = 2; s = 1
  const x = n - lens[s - 1];
  const n1 = Math.floor(x / (s + 1)); // 1
  const n2 = x % (s + 1); // 0

  const cur = 10 ** s + n1;
  if (n2 === 0) return (cur - 1) % 10;
  return (cur + '').split('')[n2 - 1];
};
// @lc code=end
console.log(findNthDigit(10));
console.log(findNthDigit(11));
console.log(findNthDigit(12));
console.log(findNthDigit(13));
console.log(findNthDigit(14));
console.log(findNthDigit(15));
