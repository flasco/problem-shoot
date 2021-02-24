/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // 二分法查找
    let first = 1;
    let last = n;
    while (last - first > 1) {
      /** 这里是个小优化点(4ms)，first + last 再除以二可能会过大导致多话了一点点时间 */
      const mid = Math.round(first + (last - first) / 2);
      if (isBadVersion(mid)) {
        last = mid;
      } else {
        first = mid;
      }
    }
    return isBadVersion(first) ? first :last;
  };
};
// @lc code=end

// console.log(solution((n) => n >= 1)(3))