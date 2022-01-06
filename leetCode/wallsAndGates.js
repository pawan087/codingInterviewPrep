/*

Given a 2D array containing -1's (walls), 0's (gates) and INF's (empty room). Fill each empty room with the number of steps to the nearest gate

If it is impossible to reach a gate, leave INF as the value. INF is equal to 2147483647

*/

let I = Infinity;
let G = 0;
let W = -1;

let input = [
  [I, W, G, I],
  [I, I, I, W],
  [I, W, I, W],
  [G, W, I, I],
];

let distancesFromNearestGate = [
  [03, -1, 00, 01],
  [02, 02, 01, -1],
  [01, -1, 02, -1],
  [00, -1, 03, 4],
];

let directions = [
  [-1, 0], // Up
  [0, 1], // Right
  [1, 0], // Down
  [0, -1], // Left
];

function wallGates(grid) {
  let arr = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        arr.push([i, j]);
      }
    }
  }

  for (let subArr of arr) {
    let visited = new Array(input.length)
      .fill(0)
      .map(() => new Array(input[0].length).fill(false));

    dfs(subArr, grid, 0, visited);
  }

  grid.forEach((subArr) => console.log(subArr, "\n"));

  return grid;
}

function dfs(subArr, grid, i = 0, visited) {
  let row = subArr[0];
  let col = subArr[1];

  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] === -1 ||
    visited[row][col] === true
  ) {
    return;
  }

  visited[row][col] = true;
  let curVal = grid[row][col];

  if (curVal > i) grid[row][col] = i;

  for (let j = 0; j < directions.length; j++) {
    let curDir = directions[j];

    let curDirRow = curDir[0];
    let curDirCol = curDir[1];

    let nexRow = row + curDirRow;
    let nexCol = col + curDirCol;

    dfs([nexRow, nexCol], grid, i + 1, visited);
  }

  return;
}

console.log(wallGates(input));
