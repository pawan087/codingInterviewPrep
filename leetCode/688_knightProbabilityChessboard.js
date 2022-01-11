// https://leetcode.com/problems/knight-probability-in-chessboard/

let directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [-1, -2],
  [1, -2],
];

var knightProbability = function (n, k, row, col) {
  let arr = new Array(k + 1)
    .fill(0)
    .map(() =>
      new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => undefined))
    );

  arr[0][row][col] = 1;

  for (let i = 1; i <= k; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        let res = 0;

        for (let direction of directions) {
          let curRow = direction[0];
          let curCol = direction[1];

          let nexRow = curRow + j;
          let nexCol = curCol + k;

          if (nexRow < 0 || nexCol < 0 || nexRow >= n || nexCol >= n) continue;

          if (arr[i - 1][nexRow][nexCol] !== undefined) {
            res += arr[i - 1][nexRow][nexCol] / 8;
          }
        }

        arr[i][j][k] = res;
      }
    }
  }

  let probability = 0;

  for (let row of arr[arr.length - 1]) {
    for (let num of row) {
      probability += num;
    }
  }

  return probability;
};

let n = 3;
let k = 2;
let row = 0;
let column = 0;

console.log("Iterative", knightProbability(n, k, row, column));

function knightProbabilityRecursive(n, k, row, col) {
  let dp = new Array(k + 1)
    .fill(0)
    .map(() =>
      new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => undefined))
    );

  return recurse(n, k, row, col, dp);
}

function recurse(n, k, row, col, dp) {
  if (row < 0 || col < 0 || row >= n || col >= n) {
    return 0;
  }

  if (k === 0) {
    return 1;
  }

  if (dp[k][row][col] !== undefined) {
    return dp[k][row][col];
  }

  let res = 0;

  for (let direction of directions) {
    res += recurse(n, k - 1, row + direction[0], col + direction[1], dp) / 8;
  }

  dp[k][row][col] = res;

  return res;
}

console.log("Recursive", knightProbabilityRecursive(n, k, row, column));
