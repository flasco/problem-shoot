/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let p1 = 0;
  let p2 = numbers.length - 1;
  // 主要利用升序对称的思维，减少无用的遍历
  while (p1 < p2) {
    const sux = target - numbers[p1];
    while (numbers[p2] > sux) p2--;
    if (numbers[p2] === sux) return [p1 + 1, p2 + 1];
    p1++;
  }
  return [];
};
