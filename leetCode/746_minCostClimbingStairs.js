// https://leetcode.com/problems/min-cost-climbing-stairs/

/*

Example 1:

Input: cost = [10,15,20]

Output: 15

Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.

Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]

Output: 6

Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.

*/

var minCostClimbingStairs = function (cost) {
  let arr = [0, 0];

  for (let i = 0; i <= cost.length; i++) {
    let curNum = cost[i] === undefined ? 0 : cost[i];
    let curCost = Math.min(
      arr[arr.length - 2] + curNum,
      arr[arr.length - 1] + curNum
    );

    arr.push(curCost);
  }

  return arr[arr.length - 1];
};

let input1 = [10, 15, 20];
let input2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
let input = [10, 15, 30];

console.log(minCostClimbingStairs(input));
