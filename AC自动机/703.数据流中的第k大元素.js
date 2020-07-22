/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.sorted = nums.sort((a, b) => b - a);
  this.k = k - 1;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  const ind = this.sorted.findIndex((i) => i <= val);
  // console.log(this.sorted, ind, val);
  if (ind < 0) this.sorted.push(val);
  else this.sorted.splice(ind, 0, val);
  // console.log('changed', this.sorted, this.k);

  return this.sorted[this.k];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

// [null,4,5,5,8,8]
// const x = new KthLargest(3, [4, 5, 8, 2]);
// console.log(x.add(3));
// console.log(x.add(5));
// console.log(x.add(10));
// console.log(x.add(9));
// console.log(x.add(4));
