/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let notPrimes = new Uint8Array(n);
  let count = 0;
  // Eratosthenes 筛法
  for (let i = 2; i < n; i++) {
    if (!notPrimes[i]) {
      count++;
      let a = n / i;
      for (let j = i; j < a; j++) {
        notPrimes[j * i] = 1;
      }
    }
  }
  return count;
};


// console.log(countPrimes(12));
