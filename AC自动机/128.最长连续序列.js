/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const xet = new Set(nums);

  let maxLen = 0;
  for (let cur of nums) {
    // 如果还有更小的值就跳过，要找到一开始的数字，从头计算排序
    if (xet.has(cur - 1)) continue;

    let curLen = 1;
    let tmp = cur;
    while (xet.has(tmp + 1)) {
      xet.delete(tmp + 1);
      curLen++;
      tmp++;
    }
    maxLen = Math.max(curLen, maxLen);
  }

  return maxLen;
};
// @lc code=end
