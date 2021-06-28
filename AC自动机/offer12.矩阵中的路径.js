var movingCount = function (m, n, k) {
  const isNoBiggerThanK = (x, y) => {
    let n = 0;
    while (x > 0) {
      n += x % 10;
      x = (x / 10) | 0;
    }
    while (y > 0) {
      n += y % 10;
      y = (y / 10) | 0;
    }

    return n <= k;
  };

  const isVisited = new Set();

  const helper = (x, y) => {
    if (x < 0 || y < 0 || x >= m || y >= n) return 0;
    if (!isNoBiggerThanK(x, y)) return 0;
    const key = `${x}-${y}`;
    if (isVisited.has(key)) return 0;
    // console.log(x, y);
    isVisited.add(key);
    return 1 + helper(x, y + 1) + helper(x + 1, y);
  };
  return helper(0, 0);
};

console.log(movingCount(14, 14, 5));
