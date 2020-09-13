const { PositionMap } = require("./constants");

const currentMap = [
  [0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
  [1, 1, 1, 0, 0],
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
  const leftTop = [curPtr[0] - 1, curPtr[1] + 1];
  for (let i = 0; i < 3; i++) {
    arr.push([]);
    for (let j = 0; j < 3; j++) {
      const curPtr = [leftTop[0] + j, leftTop[1] - i];
      const value = getMapValue(curPtr);
      arr[i].push(value);
    }
  }
  return arr;
};

const walkOneStep = (position) => {
  if (position === PositionMap.Top) curPtr = [curPtr[0], curPtr[1] + 1];
  if (position === PositionMap.Left) curPtr = [curPtr[0] - 1, curPtr[1]];
  if (position === PositionMap.Bottom) curPtr = [curPtr[0], curPtr[1] - 1];
  if (position === PositionMap.Right) curPtr = [curPtr[0] + 1, curPtr[1]];
  console.log(`------current: ${curPtr.join(", ")}`);
};

exports.getMapper = getMapper;
exports.walkOneStep = walkOneStep;
