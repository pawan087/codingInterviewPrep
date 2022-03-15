// Number of Moves

function minMoves(n, startRow, startCol, endRow, endCol) {
  let directions = [
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [-1, 2],
    [1, 2],
    [-2, -1],
    [-2, 1],
  ];

  let arr = new Array(n).fill(0).map(() => new Array(n));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = "X";
    }
  }

  arr[startRow][startCol] = "0";

  for (let direction of directions) {
    let addX = direction[0];
    let addY = direction[1];

    let nexX = addX + startRow;
    let nexY = addY + endCol;

    if (nexX < 0 || nexX >= n || nexY < 0 || nexY >= n) continue;
    if (arr[nexX][nexY] !== "X") continue;

    arr[nexX][nexY] = String(Number(arr[startRow][startCol] + 1));
  }

  for (let row of arr) {
    console.log(JSON.stringify(row));
  }

  return "Testing";
}

let n = 9;
let startRowInput = 4;
let startColInput = 4;
let endRowInput = 4;
let endColInput = 4;

console.log(minMoves(n, 0, 0, endRowInput, endColInput));
