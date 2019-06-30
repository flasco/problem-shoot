/**
 * 
 * 1104. 分糖果 II

  排排坐，分糖果。

  我们买了一些糖果 candies，打算把它们分给排好队的 n = num_people 个小朋友。

  给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 n 颗糖果。

  然后，我们再回到队伍的起点，给第一个小朋友 n + 1 颗糖果，第二个小朋友 n + 2 颗，依此类推，直到给最后一个小朋友 2 * n 颗糖果。

  重复上述过程（每次都比上一次多给出一颗糖果，当到达队伍终点后再次从队伍起点开始），直到我们分完所有的糖果。注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），这些糖果也会全部发给当前的小朋友。

  返回一个长度为 num_people、元素之和为 candies 的数组，以表示糖果的最终分发情况（即 ans[i] 表示第 i 个小朋友分到的糖果数）。

  输入：candies = 7, num_people = 4
  输出：[1,2,3,1]
  解释：
  第一次，ans[0] += 1，数组变为 [1,0,0,0]。
  第二次，ans[1] += 2，数组变为 [1,2,0,0]。
  第三次，ans[2] += 3，数组变为 [1,2,3,0]。
  第四次，ans[3] += 1（因为此时只剩下 1 颗糖果），最终数组变为 [1,2,3,1]。
  
 */

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  const currentPersonGet = currentMaxSum(candies);
  const prevTotal = ((1 + currentPersonGet) * currentPersonGet) / 2;

  let round = currentPersonGet / num_people;
  if (round > Math.floor(round)) round = Math.floor(round) + 1;
  let currentPerson = currentPersonGet % num_people; // 知晓最后一次完整发糖的人是谁
  if (currentPerson === 0) currentPerson = num_people;
  const personArr = new Array(num_people).fill(0);

  for (let i = 0; i < currentPerson; i++) {
    const sum = ((i + 1 + (i + 1 + (round - 1) * num_people)) * round) / 2;
    personArr[i] += sum;
  }
  if (round > 1) {
    for (let i = currentPerson; i < num_people; i++) {
      personArr[i] =
        ((i + 1 + (i + 1 + (round - 2) * num_people)) * (round - 1)) / 2;
    }
  }
  if (currentPerson < num_people) {
    personArr[currentPerson] += candies - prevTotal;
  } else if (currentPerson === num_people) {
    personArr[0] += candies - prevTotal;
  }
  return personArr;
};

function currentMaxSum(n) {
  return (Math.sqrt(2 * n + 0.25) - 0.5) | 0;
}

console.log(distributeCandies(1000000000, 1000));
