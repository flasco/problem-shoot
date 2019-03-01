/*
  这个问题是这样的，给定一个目标target -  [1 - 222 - 3]
  现在有 - [1, 2, 2, 2, 2, 2, 1, 2, 3, 1]
  方块会连在一起，上限为三个，此时默认点击第一个块。
  方块是靠右的，比如 [2, 2, 2, 2]
  实际上是 [2 - 222]
  
  请给出点击的坐标顺序，达成 target 条件

  上面 example 的resolve = [1, 0, 0] | [1, 0, 3]

  推演过程 [1, 2, 2, 2, 2, 1, 2, 3, 1]
  **** ACTION
  [1, 3, 2, 1, 2, 2, 1] - 数字
  [1, 1, 1, 1, 3, 2, 1] - 个数

  点击 [0], 剩下的数组为 [2, 2, 2, 2, 1, 2, 3, 1]
  点击 [1], 剩下的数组为 [2, 1, 2, 3, 1]
  点击 [2], 剩下的数组为 [1, 2, 1]

  达成 target
 */

describe('001 克鲁塞得战记 qte 结局思路', () => {
  test('resolve', () => {
    const target = ['1', '2', '333'];
    const origin = [1, 2, 2, 2, 3, 3, 2, 3];
    const result = getResolve(origin, target);
    const resStr = result.map(item => item.join(', '));
    expect(resStr.includes('0, 5, 5')).toBeTruthy();
  });
});

function getResolve(origin, target) {
  const taskArr = [];
  taskArr.push({
    o: origin.reverse(), // 颠倒顺序，便于处理
    t: target,
    result: []
  });
  const resultArr = [];
  while (taskArr.length > 0) {
    const { o, t, result } = taskArr.shift();
    if (t.length < 1) {
      resultArr.push(result);
      continue;
    }
    const { numArr, cntArr } = formatArr(o);
    const length = t[0].length;
    const currentT = +t[0] % 10;
    const positions = [];
    numArr.forEach((item, index) => {
      if (item === currentT && cntArr[index] === length) {
        const pos = arrAdd(cntArr, 0, index);
        positions.push(pos);
      }
    });

    if (positions.length < 1) continue;
    const newT = [...t];
    newT.shift();
    positions.forEach(position => {
      const curPos = o.length - position - 1; // reverse，颠倒回来
      taskArr.push({
        o: delArr(o, position, length),
        t: newT,
        result: [...result, curPos]
      });
    });
  }
  return resultArr;
}

function arrAdd(arr, start, end) {
  let ret = 0;
  for (let i = start; i < end; i++) ret += arr[i];
  return ret;
}

function formatArr(origin) {
  const numArr = [];
  const cntArr = [];
  for (let i = 0, j = origin.length; i < j; i++) {
    const curPtr = origin[i];
    let length = 1;
    while (origin[i + length] === curPtr) {
      length++;
      if (length > 2) break;
    }
    numArr.push(curPtr);
    cntArr.push(length);
    i = i + length - 1;
  }
  return { numArr, cntArr };
}

function delArr(arr, position, length) {
  const newArr = [...arr];
  newArr.splice(position, length);
  return newArr;
}
