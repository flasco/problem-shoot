/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const reverseA = a.split('').reverse();
    const reverseB = b.split('').reverse();
    const resArr = [];
    let sumCnt = a.length > b.length ? a.length : b.length;
    let upSum = 0;
    let ptrA, ptrB, sumRes;
    for (let i = 0; i < sumCnt; i++) {
      ptrA = +reverseA[i] || 0;
      ptrB = +reverseB[i] || 0;
      sumRes = ptrA + ptrB + upSum;

      resArr.unshift(sumRes % 2);

      upSum = sumRes > 1 ? 1 : 0;
    }
    if (upSum > 0) resArr.unshift(1);
    return resArr.join('');
};

