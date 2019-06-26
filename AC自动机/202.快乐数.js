/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  // 记录经过的路
  const routeMap = new Set();

  while (n !== 1) {
    if (routeMap.has(n)) return false;
    routeMap.add(n);
    n = getARR(n);
  }
  return true;
};

const getARR = x => {
  const arr = [];
  while (x > 9) {
    arr.push(x % 10);
    x = (x / 10) | 0;
  }
  x > 0 && arr.push(x);
  return arr.reduce((prev, cur) => prev + cur ** 2, 0);
};

// console.log(isHappy(19));
