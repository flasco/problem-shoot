/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// 在push的时候对当前栈内的最小值索引进行记录。

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minIndex = [];
  this.len = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.len === 0) {
    this.minIndex[this.len] = this.len;
  } else {
    const index = this.minIndex[this.len - 1];
    const min = this.stack[index];

    if (x < min) this.minIndex[this.len] = this.len;
    else this.minIndex[this.len] = index;
  }
  this.stack[this.len] = x;
  this.len++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.len--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[this.minIndex[this.len - 1]];
};

// var obj = new MinStack();
// obj.push(-2);
// obj.push(0);
// obj.push(-3);
// console.log(obj.stack)
// console.log(obj.minIndex)
// var param_4 = obj.getMin();
// var param_3 = obj.pop();
// var param_2 = obj.pop();
// var param_5 = obj.getMin();
