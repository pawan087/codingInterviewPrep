// let n = 9;
// let startRow = 4;
// let startCol = 4;
// let endRow = 4;
// let endCol = 8;

let n = 9;
let startRow = 1;
let startCol = 5;
let endRow = 0;
let endCol = 0;

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

function minMoves(n, startRow, startCol, endRow, endCol) {
  let board = [];

  for (let i = 0; i < n; i++) {
    board.push([]);
  }

  for (let row of board) {
    for (let i = 0; i < n; i++) {
      row.push(0);
    }
  }

  board[startRow][startCol] = 0;

  let que = [[startRow, startCol]];

  while (que.length > 0) {
    let cur = que.shift();

    let row = cur[0];
    let col = cur[1];

    let curCost = board[row][col];

    for (let direction of directions) {
      let curRow = direction[0];
      let curCol = direction[1];

      let nexRow = row + curRow;
      let nexCol = col + curCol;

      if (nexRow < 0 || nexCol < 0 || nexRow >= n || nexCol >= n) {
        continue;
      }

      if (board[nexRow][nexCol] !== 0) continue;

      if (nexRow === endRow && nexCol === endCol) {
        // return curCost + 1;
      }

      board[nexRow][nexCol] = curCost + 1;

      que.push([nexRow, nexCol]);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let num = board[i][j];
      if (num === 0) {
        board[i][j] = ".";
      } else {
        board[i][j] = String(board[i][j]);
      }
    }
  }

  board[startRow][startCol] = "x";

  for (let row of board) {
    console.log(JSON.stringify(row));
  }

  return board;
}

console.log(minMoves(n, startRow, startCol, endRow, endCol));
