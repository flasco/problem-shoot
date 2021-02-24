const { PositionMap } = require("./constants");

const currentMap = [
  [0, 1, 1, 0, 1],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 0, 1],
  [1, 1, 1, 1, 1],
];

let curPtr = [1, 0];

const getMapValue = ([x, y]) => {
  const maxX = currentMap.length;
  const maxY = currentMap[0].length;
  if (x < 0 || y < 0) return 0;
  if (x >= maxX || y >= maxY) return 0;
  return currentMap[x][y];
};

const getMapper = () => {
  const arr = [];
  // 上左下右
  const posMap = [
    {
      x: 0,
      y: 1,
    },
    {
      x: -1,
      y: 0,
    },
    {
      x: 0,
      y: -1,
    },
    {
      x: 1,
      y: 0,
    },
  ];
  posMap.forEach(({ x, y }) => {
    const ptr = [curPtr[0] + x, curPtr[1] + y];
    const value = getMapValue(ptr);
    arr.push(value);
  });
  return arr;
};

const walkOneStep = (position) => {
  if (position === PositionMap.Top) curPtr = [curPtr[0], curPtr[1] + 1];
  if (position === PositionMap.Left) curPtr = [curPtr[0] - 1, curPtr[1]];
  if (position === PositionMap.Bottom) curPtr = [curPtr[0], curPtr[1] - 1];
  if (position === PositionMap.Right) curPtr = [curPtr[0] + 1, curPtr[1]];
  // console.log(`------current: ${curPtr.join(", ")}`);
};

exports.getMapper = getMapper;
exports.walkOneStep = walkOneStep;
