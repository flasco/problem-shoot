/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start

const binaryRightRopSearch = (nums, target) => {
  const numLen = nums.length;
  if (numLen < 1) return -1;
  let left = 0;
  let right = numLen - 1;

  while (left <= right) {
    const mid = Math.round(left + (right - left) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  if (right < 0 || nums[right] !== target) return -1;
  return right;
};


const binaryLeftRopSearch = (nums, target) => {
  const numLen = nums.length;
  if (numLen < 1) return -1;
  let left = 0;
  let right = numLen - 1;

  while (left <= right) {
    const mid = Math.round(left + (right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    }
    if (nums[mid] >= target) {
      right = mid - 1;
    }
  }
  if (left >= numLen || nums[left] !== target) return -1;
  return left;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [binaryLeftRopSearch(nums, target), binaryRightRopSearch(nums, target)];
};
// @lc code=end
