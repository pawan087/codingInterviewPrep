/*

https://leetcode.com/problems/number-of-islands/

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/

// Clockwise
let directions = [
  [-1, 0], // Up
  [0, 1], // Right
  [1, 0], // Down
  [0, -1], // Left
];

const numIslands = function (arr) {
  let num = 0;
  let seen = new Array(arr.length)
    .fill(0)
    .map(() => new Array(arr[0].length).fill(false));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let curVal = arr[i][j];

      if (seen[i][j] === true || curVal === "0") continue;

      if (curVal === "1") num++;

      bfs(arr, i, j, seen);
    }
  }

  return num;
};

const bfs = function (arr, row, col, seen) {
  let que = [[row, col]];

  while (que.length > 0) {
    let curPos = que.shift();
    let row = curPos[0];
    let col = curPos[1];

    if (
      row < 0 ||
      col < 0 ||
      row >= arr.length ||
      col >= arr[0].length ||
      seen[row][col] ||
      arr[row][col] === "0"
    ) {
      continue;
    }

    seen[row][col] = true;
    if (arr[row][col] === "1") arr[row][col] = "-1";

    for (let i = 0; i < directions.length; i++) {
      let curDir = directions[i];

      let curDirRow = curDir[0];
      let curDirCol = curDir[1];

      let curRow = row + curDirRow;
      let curCol = col + curDirCol;

      que.push([curRow, curCol]);
    }
  }

  return;
};

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

let grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid2));

let toOptimize =
  "Use linkedList instead of array for the queue and instead of using a seenHashMap flip the '1' to '0' to track island(s) and stay inbound when performing BFS";
