/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // [..., ...];, 保证前k个元素的排序即可
  const fastPartSort = (arr, left, right) => {
    if (right - left < 1) return;
    let l = left,
      r = right;
    const key = arr[l]; // 3
    while (l < r) {
      while (l < r && arr[r] <= key) r--;
      arr[l] = arr[r];
      while (l < r && arr[l] >= key) l++;
      arr[r] = arr[l];
      // 5, 3,3,1,2
    }
    arr[l] = key;
    // 9,10,20,50,40,30,5,1,4,3
    if (l > k - 1) fastPartSort(arr, left, l - 1);
    // 9,5,1,4,3
    else if (l < k - 1) fastPartSort(arr, l + 1, right);
    else return;
  };

  fastPartSort(nums, 0, nums.length - 1);
  return nums[k - 1];
};
// @lc code=end

findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
