// https://leetcode.com/problems/rotting-oranges/

let directions = [
  [-1, 0], // Up
  [0, 1], // Right
  [1, 0], // Down
  [0, -1], // Left
];

let orangesRotting = function (arr) {
  if (arr.length === 0) return 0;

  let que = [];
  let freshCount = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 2) {
        que.push([i, j]);
      }

      if (arr[i][j] === 1) {
        freshCount++;
      }
    }
  }

  let len = que.length;
  let min = 0;

  while (que.length > 0) {
    if (len === 0) {
      min++;
      len = que.length;
    }

    let cur = que.shift();
    len--;

    let row = cur[0];
    let col = cur[1];

    for (let i = 0; i < directions.length; i++) {
      let curDir = directions[i];

      let nexRow = curDir[0] + row;
      let nexCol = curDir[1] + col;

      if (
        nexRow < 0 ||
        nexCol < 0 ||
        nexRow >= arr.length ||
        nexCol >= arr[0].length
      ) {
        continue;
      }

      if (arr[nexRow][nexCol] === 1) {
        arr[nexRow][nexCol] = 2;
        freshCount--;

        que.push([nexRow, nexCol]);
      }
    }
  }

  return freshCount === 0 ? min : -1;
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

console.log(orangesRotting(input1));
