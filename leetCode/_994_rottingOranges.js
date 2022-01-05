/*

https://leetcode.com/problems/rotting-oranges/

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

*/

// Clockwise
let directions = [
  [-1, 0], // Up
  [0, 1], // Right
  [1, 0], // Down
  [0, -1], // Left
];

var orangesRotting = function (grid) {
  let min = -1;
  let que = [];
  let arr = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        que.push([i, j]);
      }
    }
  }
  while (que.length > 0) {
    let arr = [];

    while (que.length !== 0) {
      arr.push(que.pop());
    }

    min++;

    for (let j = 0; j < arr.length; j++) {
      let cur = arr[j];
      let row = cur[0];
      let col = cur[1];

      grid[row][col] = -1;

      for (let i = 0; i < directions.length; i++) {
        let curDir = directions[i];
        let curDirRow = curDir[0];
        let curDirCol = curDir[1];

        let curRow = row + curDirRow;
        let curCol = col + curDirCol;

        if (
          curRow < 0 ||
          curCol < 0 ||
          curRow >= grid.length ||
          curCol >= grid[0].length ||
          grid[curRow][curCol] === 0 ||
          grid[curRow][curCol] === -1
        ) {
          continue;
        }

        que.push([curRow, curCol]);
      }
    }
  }
  for (let row of grid) {
    for (let num of row) {
      if (num === 1) return -1;
    }
  }

  return min;
};

let input1 = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]; // => 4

let input2 = [
  [1, 1, 0, 0, 0],
  [2, 1, 0, 0, 0],
  [0, 0, 0, 1, 2],
  [0, 1, 0, 0, 1],
]; // => -1

// console.log(orangesRotting(input1));


