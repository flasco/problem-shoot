/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length < 2) return nums[0];
  const cntMap = {};
  const thresold = ((nums.length + 1) / 2) | 0;
  for (let i = 0, j = nums.length; i < j; i++) {
    const cur = nums[i];
    if (cntMap[cur] == null) cntMap[cur] = 1;
    else {
      cntMap[cur]++;
      if (cntMap[cur] >= thresold) return cur;
    }
  }
};
