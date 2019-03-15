const mahjongCardsMap = require('../constants/mahjong');

/**
 * 雀姬断幺九判断
 * 主要目标是为了判断当前手牌距离断幺九还差几张牌
 * 应该出哪几张比较好
 *
 * 为了方便描述，现在将牌用数字代替
 * 1 - 9万：  1  2  3 ...  9
 * 1 - 9洞： 11 12 13 ... 19
 * 1 - 9索： 21 22 23 ... 29
 * 东南西北： 31 33 35 37
 *   中发白： 41 43 45
 *
 * 一张牌有 4 个
 * 胡牌的时候，手上总牌数为 14 张
 *
 * 断幺九胡牌规则：
 * 牌组由 (abc | aaa) * n + dd * 1 组成
 * 不包含字牌与 1，9 牌
 */

// describe('002 雀姬 断幺九', () => {
//   test('resolve', () => {
//     const origin = [2, 2, 2, 3, 4, 45, 7, 8, 9, 22, 32, 41, 43];
//     origin.sort((a, b) => a - b);
//     getResolve(origin);
//   });
// });
const origin = [2, 2, 2, 3, 4, 45, 7, 8, 22, 33, 41, 43];
origin.sort((a, b) => a - b);
getResolve(origin);

// 穷举所有可能排列，罗列残牌所缺
function getResolve(origin) {
  const { numArr, cntArr } = formatArr(origin);

  const aaaQueue = [];
  const abcQueue = [];
  const resultArr = [];

  const newNumArr = [...numArr];
  const newCntArr = [...cntArr];
  cntArr.forEach((item, index) => {
    if (item >= 2) {
      newCntArr[index] -= 2;
      if (newCntArr[index] < 1) {
        newNumArr.splice(index, 1);
        newCntArr.splice(index, 1);
      }

      const params = {
        dd: numArr[index],
        aaa: [],
        abc: [],
        origin: { numArr: newNumArr, cntArr: newCntArr }
      };
      // 这里 push 到两个栈是因为不同处理顺序结果也不同
      aaaQueue.push({ ...params });
      abcQueue.push({ ...params });
    }
  });

  while (aaaQueue.length > 0) {
    const curPtr = aaaQueue.shift();
    const { numArr, cntArr } = curPtr.origin;

    const newNumArr = [...numArr];
    const newCntArr = [...cntArr];

    cntArr.forEach((item, index) => {
      if (item > 2) {
        newNumArr.splice(index, 1);
        newCntArr.splice(index, 1);
        curPtr.aaa.push(item);
      }
    });
    abcQueue.push({
      ...curPtr,
      origin: { numArr: newNumArr, cntArr: newCntArr }
    });
  }

  while (abcQueue.length > 0) {
    const curPtr = abcQueue.shift();
    const abc = [...curPtr.abc];
    const { numArr, cntArr } = curPtr.origin;

    const newNumArr = [...numArr];
    const newCntArr = [...cntArr];
    let isFind = false;

    for (let i = 0, j = numArr.length - 2; i < j; i++) {
      const cur = numArr[i];
      const nex1 = numArr[i + 1];
      const nex2 = numArr[i + 2];
      if (cur + 1 === nex1 && nex1 + 1 === nex2) {
        isFind = true;
        abc.push([cur, nex1, nex2]);
        newCntArr[i] -= 1;
        newCntArr[i + 1] -= 1;
        newCntArr[i + 2] -= 1;
        let nex1D = i + 1;
        if (newCntArr[i] === 0) {
          nex1D = i;
          newNumArr.splice(i, 1);
          newCntArr.splice(i, 1);
        }
        let nex2D = nex1D + 1;
        if (newCntArr[nex1D] === 0) {
          nex2D = nex1D;
          newNumArr.splice(nex1D, 1);
          newCntArr.splice(nex1D, 1);
        }
        if (newCntArr[nex2D] === 0) {
          newNumArr.splice(nex2D, 1);
          newCntArr.splice(nex2D, 1);
        }
        abcQueue.push({
          ...curPtr,
          abc,
          origin: { numArr: newNumArr, cntArr: newCntArr }
        });
      }
    }
    if (!isFind) {
      aaaQueue.push(curPtr);
    }
  }

  while (aaaQueue.length > 0) {
    const curPtr = aaaQueue.shift();
    const { numArr, cntArr } = curPtr.origin;

    const newNumArr = [...numArr];
    const newCntArr = [...cntArr];

    cntArr.forEach((item, index) => {
      if (item > 2) {
        newNumArr.splice(index, 1);
        newCntArr.splice(index, 1);
        curPtr.aaa.push(item);
      }
    });
    // 兜底处理
    resultArr.push({
      ...curPtr,
      origin: { numArr: newNumArr, cntArr: newCntArr }
    });
  }

  const cleanArr = cleanCards(resultArr);

  cleanArr.forEach(item => {
    const { numArr, cntArr } = item.origin;
    const org = serializeArr(numArr, cntArr);
    console.log('对子：', mahjongCardsMap[item.dd]);
    console.log(
      '顺子：',
      JSON.stringify(item.abc.map(item => item.map(i => mahjongCardsMap[i])))
    );
    console.log(
      '刻子：',
      JSON.stringify(item.aaa.map(item => mahjongCardsMap[item]))
    );
    console.log('残牌：', org.map(item => mahjongCardsMap[item]), '\n');
    coludDunyoJun(item);
  });
}

function formatArr(origin) {
  const numArr = [];
  const cntArr = [];
  for (let i = 0, j = origin.length; i < j; i++) {
    const curPtr = origin[i];
    let length = 1;
    while (origin[i + length] === curPtr) {
      length++;
    }
    numArr.push(curPtr);
    cntArr.push(length);
    i = i + length - 1;
  }
  return { numArr, cntArr };
}

function serializeArr(numArr, cntArr) {
  const handCards = [];
  numArr.forEach((item, index) => {
    for (let i = 0, j = cntArr[index]; i < j; i++) handCards.push(item);
  });
  return handCards;
}

// * 如果残牌一致那可以理解成同一种结果 ?
function cleanCards(resultArr) {
  const map = new Map();
  const cleard = [];
  for (let i = 0, j = resultArr.length; i < j; i++) {
    const cur = resultArr[i];
    const { numArr, cntArr } = cur.origin;
    const str = serializeArr(numArr, cntArr).join('');
    const arr = map.get(cur.dd);
    if (arr == null) {
      const arr = [];
      cleard.push(cur);
      arr.push(str); // 前提是最初的牌是 sort 过的
      map.set(cur.dd, arr);
    } else if (!arr.includes(str)) {
      map.set(cur.dd, arr);
    }
  }
  return cleard;
}

function coludDunyoJun(result) {
  const {
    origin: { numArr, cntArr },
    dd,
    aaa,
    abc
  } = result;

  if (have1r9rz([dd])) console.log('对子有问题');
  else if (have1r9rz(aaa)) console.log('顺子有问题');
  else if (have1r9rz(abc)) console.log('刻子有问题');
  else if (have1r9rz(numArr)) {
    // console.log('* 建议出 1 - 9 + 字牌');
    const whatNeed = [];
    for (let i = 0, j = numArr.length - 1; i < j; i++) {
      const cur = numArr[i];
      const next = numArr[i + 1];
      if (cntArr[i] > 1) {
        whatNeed.push(cur);
      } else if (next - cur === 1) {
        let link = false;
        if ((cur - 1) % 10 !== 1) {
          link = true;
          whatNeed.push(cur - 1);
        }
        if ((cur + 1) % 10 !== 9) {
          link && whatNeed.push('|');
          whatNeed.push(cur + 1);
        }
        i += 1;
      }
    }
    whatNeed.length > 0 &&
      console.log(
        '缺牌：',
        JSON.stringify(
          whatNeed.map(item => {
            if (!isNaN(item)) {
              return mahjongCardsMap[item];
            }
            return item;
          })
        )
      );
  }
}

function have1r9rz(arr) {
  return arr.some(item => {
    const pos1 = (item / 10) >>> 0;
    const pos2 = item % 10;
    if (pos1 > 2) return true;
    return pos2 === 1 || pos2 === 9;
  });
}
