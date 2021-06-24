/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  let px1 = 0;
  let px2 = 0;
  let p = 1;
  let center = (nums1.length + nums2.length) / 2;
  const needDiv = center % 1 === 0;
  if (center < 1) return isNaN(nums1[0]) ? nums2[0] : nums1[0];
  while (p1 + p2 < center) {
    if (isNaN(nums1[p1])) {
      px2 = nums2[p2++];
      p = 2;
    } else if (isNaN(nums2[p2])) {
      px1 = nums1[p1++];
      p = 1;
    } else if (nums1[p1] < nums2[p2]) {
      px1 = nums1[p1++];
      p = 1;
    } else {
      px2 = nums2[p2++];
      p = 2;
    }
  }
  const cur1 = p === 1 ? px1 : px2;
  if (!needDiv) return cur1;
  return (
    (cur1 +
      Math.min(
        isNaN(nums1[p1]) ? Number.MAX_VALUE : nums1[p1],
        isNaN(nums2[p2]) ? Number.MAX_VALUE : nums2[p2]
      )) /
    2
  );
};
// @lc code=end

console.log(findMedianSortedArrays([0], []));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 3], [2, 4]));
console.log(findMedianSortedArrays([1], []));
