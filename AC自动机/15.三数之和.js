/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const nLen = nums.length;
  /**
   * 核心就是先排一遍顺序，然后如果找到解之后，需要跳过相同的数字，避免出现重复的解。
   */

  const find2Num = (start, target) => {
    let left = start;
    let right = nLen - 1;
    const list = [];
    while (left < right) {
      const lo = nums[left];
      const hi = nums[right];
      const cur = lo + hi;
      if (cur < target) left++;
      else if (cur > target) right--;
      else {
        list.push([lo, hi]);
        while (left < right && nums[left] === lo) left++;
        while (left < right && nums[right] === hi) right--;
      }
    }
    return list;
  };

  const list = [];

  for (let i = 0; i < nLen; i++) {
    const cur = find2Num(i + 1, -nums[i]);
    // console.log(left, JSON.stringify(cur));
    if (cur.length) cur.forEach((l) => list.push([nums[i], ...l]));
    /** 找完之后开始跳过重复的部分 */
    while (i < nLen - 1 && nums[i] === nums[i + 1]) i++;
  }

  return list;
};
// @lc code=end
threeSum([-1, 0, 1, 2, -1, -4]);
// threeSum([0, 0, 0, 0]);
