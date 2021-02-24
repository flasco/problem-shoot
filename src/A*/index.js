const { getMapper, walkOneStep } = require("./mapper");
const { PLink, PositionMap, delay } = require("./constants");

const SPLIT_FLAG = "~";
class AMap {
  constructor() {
    this.plinkMap = new Map();
    this.ptr = null;
  }

  async getMaper() {
    const baseMapper = getMapper();
    return baseMapper;
  }

  // A* 算法
  async walkTo(prevPtr, curPtr) {
    const curPoint = curPtr.point; // [x, y];
    const openList = [prevPtr];
    const closeList = [];
    let ptr = null;
    while (openList.length > 0) {
      // 可以优化，不过数据量小的情况下没必要
      let minF = Number.MAX_SAFE_INTEGER;
      let index = 0;
      openList.forEach((item, ind) => {
        const point = item.point;
        // F = G + H, 因为 G 均为 1，就直接取 H 就完事了
        const F =
          Math.abs(point[0] - curPoint[0]) + Math.abs(point[1] - curPoint[1]);
        if (F < minF) {
          minF = F;
          index = ind;
        }
      });

      if (ptr != null) {
        openList[index].parent = ptr;
      }
      ptr = openList[index];
      if (ptr.point[0] === curPoint[0] && ptr.point[1] === curPoint[1]) {
        // 已经在终点了
        break;
      }
      openList.splice(index, 1);

      closeList.push(ptr.point.join(SPLIT_FLAG));

      let isEnd = true;
      ptr.near.forEach((item) => {
        const point = item.point;
        if (!closeList.includes(point.join(SPLIT_FLAG))) {
          openList.push(item);
          isEnd = false;
        }
      });
      /**
       * 如果走到没路了，此路作废，重新把 ptr 指回父级
       * 防止父级乱窜
       */
      if (isEnd && ptr.parent != null) ptr = ptr.parent;
    }
    if (ptr.parent != null) await this.callWalkApi(ptr);
  }

  async callWalkApi(ptr) {
    const paths = [];
    while (ptr != null) {
      paths.unshift(ptr.point);
      const p = ptr.parent;
      ptr.parent = null;
      ptr = p;
    }

    console.log(
      `[${paths[0].join(", ")}] => [${paths[paths.length - 1].join(", ")}]`
    );

    for (let i = 0; i < paths.length - 1; i++) {
      const cur = paths[i];
      const next = paths[i + 1];
      let pos = null;
      if (cur[0] === next[0]) {
        pos = cur[1] < next[1] ? PositionMap.Top : PositionMap.Bottom;
      } else {
        pos = cur[0] < next[0] ? PositionMap.Right : PositionMap.Left;
      }
      await walkOneStep(pos);
    }
  }

  drawMap(allPoints, walkedList, curPtr) {
    if (allPoints.length < 1 && walkedList.length < 1) return;
    let minX = Number.MAX_SAFE_INTEGER;
    let maxX = 0;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxY = 0;
    const openArr = [];
    const closeArr = [];
    allPoints.forEach((i) => {
      const point = i.split(SPLIT_FLAG).map((i) => +i);
      openArr.push(point);
      if (point[0] < minX) minX = point[0];
      else if (point[0] > maxX) maxX = point[0];
      if (point[1] < minY) minY = point[1];
      if (point[1] > maxY) maxY = point[1];
    });
    walkedList.forEach((i) => {
      const point = i.split(SPLIT_FLAG).map((i) => +i);
      closeArr.push(point);
      if (point[0] < minX) minX = point[0];
      else if (point[0] > maxX) maxX = point[0];
      if (point[1] < minY) minY = point[1];
      if (point[1] > maxY) maxY = point[1];
    });
    const XLength = maxX - minX + 1;
    const YLength = maxY - minY + 1;
    const arr = [];
    for (let i = 0; i < XLength; i++) {
      arr.push([]);
      for (let j = 0; j < YLength; j++) {
        arr[i].push("0");
      }
    }
    openArr.forEach(([x, y]) => {
      arr[x - minX][y - minY] = "1";
    });
    closeArr.forEach(([x, y]) => {
      arr[x - minX][y - minY] = "x";
    });

    const curPoint = curPtr.point;
    // arr[-minX][-minY] = "O";
    arr[curPoint[0] - minX][curPoint[1] - minY] = 'R';

    console.log("------------");
    arr.forEach((i) => console.log(i.join(" ")));
    console.log("------------");
  }

  async work() {
    let prevPtr = null;
    const workList = [this.getPLink([0, 0])];
    const closeList = [];
    const fullPoint = [];

    while (workList.length > 0) {
      await this.drawMap(fullPoint, closeList, prevPtr);
      // start work, 深搜
      const curPtr = workList.pop();
      const curPoint = curPtr.point;
      if (closeList.includes(curPoint.join(SPLIT_FLAG))) continue;
      if (prevPtr != null) {
        // 校验是否还是相邻点，如果不是的话就触发自动寻路
        await this.walkTo(prevPtr, curPtr);
        await delay(800);
      }
      prevPtr = curPtr;
      closeList.push(curPoint.join(SPLIT_FLAG));

      const maper = await this.getMaper();
      const potMap = [
        {
          // 上 左 下 右
          x: 0, // 1,1 => 0, 1
          y: 1,
        },
        {
          x: -1, // 1, 1 => 1, 0
          y: 0,
        },
        {
          x: 0, // 1, 1 => 2, 1
          y: -1,
        },
        {
          x: 1, // 1, 1 => 1, 2
          y: 0,
        },
      ];
      potMap.forEach(({ x, y }, index) => {
        if (maper[index]) {
          const cur = [curPoint[0] + x, curPoint[1] + y];
          // 如果已经走过的话就不走回去了
          const poi = this.getPLink([curPoint[0] + x, curPoint[1] + y]);
          curPtr.near.push(poi);
          const key = cur.join(SPLIT_FLAG);
          if (!fullPoint.includes(key)) fullPoint.push(key);

          if (closeList.includes(key)) return;
          workList.push(poi);
        }
      });
    }
    await this.drawMap(fullPoint, closeList, prevPtr);
  }

  getPLink(point) {
    const key = `${point[0]}-${point[1]}`;
    if (this.plinkMap.has(key)) return this.plinkMap.get(key);
    const newPLink = new PLink(point);
    this.plinkMap.set(key, newPLink);
    return newPLink;
  }
}

new AMap().work();
