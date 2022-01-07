// https://leetcode.com/problems/time-needed-to-inform-all-employees/

/*

8 employees: 0, 1, 2, 3, 4, 5, 6, 7

headID = 4

            0  1  2  3   4  5  6  7
managers = [2, 2, 4, 6, -1, 4, 4, 5]

see 1376_timeNeededToInformAllEmployees.jpg

              0  1  2  3  4  5  6  7
informTime = [0, 0, 4, 0, 7, 3, 6, 0]

*/

let n = 8;
let headID = 4;
let manager = [2, 2, 4, 6, -1, 4, 4, 5];
let informTime = [0, 0, 4, 0, 7, 3, 6, 0];

var numOfMinutes = function (n, headID, manager, informTime) {
  let obj = {};

  for (let i = 0; i < n; i++) {
    obj[i] = new Array(0);
  }

  for (let i = 0; i < manager.length; i++) {
    if (manager[i] !== -1) obj[manager[i]].push(i);
  }

  let maxSum = dfs(headID, obj, informTime);

  return maxSum;
};

var dfs = function (idx, obj, informTime) {
  if (obj[idx].length === 0) {
    return 0;
  }

  let sum = 0;
  sum += informTime[idx];
  let max = -Infinity;

  for (let employee of obj[idx]) {
    sum += dfs(employee, obj, informTime);
    max = Math.max(sum, max);
    sum = informTime[idx];
  }

  return max;
};

console.log(numOfMinutes(n, headID, manager, informTime));
