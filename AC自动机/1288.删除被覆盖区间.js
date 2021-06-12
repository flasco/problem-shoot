/*
 * @lc app=leetcode.cn id=1288 lang=javascript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  intervals = intervals.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });

  let ptr = 0;
  let next = 1;
  let duplicated = 0;
  const totalLen = intervals.length;
  while (next < totalLen) {
    const cur = intervals[ptr];
    const ne = intervals[next];
    if (cur[1] >= ne[1]) {
      duplicated++;
      next++;
    } else {
      ptr = next;
      next++;
    }
  }
  // console.log(JSON.stringify(intervals));
  return totalLen - duplicated;
};
// @lc code=end

removeCoveredIntervals([
  [1, 4],
  [1, 3],
  [3, 6],
  [2, 8],
]);
