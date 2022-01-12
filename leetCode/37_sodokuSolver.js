// https://leetcode.com/problems/sudoku-solver/

let input = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

let output = [
  ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
  ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
  ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
  ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
  ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
  ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
  ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
  ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
  ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
];

var solveSudoku = function (board) {
  let boxes = new Array(9);
  let rows = new Array(9);
  let cols = new Array(9);

  for (let i = 0; i < 9; i++) {
    boxes[i] = {};
    rows[i] = {};
    cols[i] = {};
  }

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] !== ".") {
        let val = board[r][c];
        let boxId = getBoxId(r, c);

        boxes[boxId][val] = true;
        rows[r][val] = true;
        cols[c][val] = true;
      }
    }
  }

  solveBacktrack(board, boxes, rows, cols, 0, 0);
};

function solveBacktrack(board, boxes, rows, cols, r, c) {
  if (r === 9 || c === 9) {
    // Meaning we have iterated through the all the columns or all the rows
    return true;
  }

  if (board[r][c] === ".") {
    // Take action, otherwise it is a number already in place from input
    for (let num = 1; num <= 9; num++) {
      // Try all numbers from 1 - 9
      let strNum = num.toString(); // Convert number to string to be uniform with input

      board[r][c] = strNum;

      let boxId = getBoxId(r, c);

      // Validity check on the boxes, rows and cols that pertain to that particular boxId, r or c (not the entire data structure)
      let box = boxes[boxId]; // Single object
      let row = rows[r]; // Single object
      let col = cols[c]; // Single object

      if (isValid(box, row, col, strNum) === true) {
        // This means we have not added this number in this box, col or row object
        // So set this as true to make sure to not re-use or re-add
        box[strNum] = true;
        row[strNum] = true;
        col[strNum] = true;

        if (c === 8) {
          // We are at the end of the column so iterate to the next row at the first column
          if (solveBacktrack(board, boxes, rows, cols, r + 1, 0) === true) {
            return true;
          }
        } else {
          // Otherwise we aren't at the end of all cols so iterate to the next col staying in the same row
          if (solveBacktrack(board, boxes, rows, cols, r, c + 1) === true) {
            return true;
          }
        }

        // This means the number returned true however it wasn't able to be used later down the line so we have to try and use the next available number in the for loop
        // We first have to remove the values from our objects, these values are not 'seen' anymore or used
        delete box[strNum];
        delete row[strNum];
        delete col[strNum];
      }

      // Since are not using the number anymore and we have removed it from our objects, we can set that spot back to a '.' so the function knows to attempt to refill that spot with the next number in line
      board[r][c] = ".";
    }
  } else {
    // If we aren't at a '.' that means it is a number that was already in place from the input
    if (c === 8) {
      // We still have to make sure to iterate properly, being that if we are at the last col we have to make sure to step to the next row and first col
      if (solveBacktrack(board, boxes, rows, cols, r + 1, 0) === true) {
        return true;
      }

      // Else we continue
    } else {
      // This means we are not at the last col so we stay on the same row and iterate to the next col
      if (solveBacktrack(board, boxes, rows, cols, r, c + 1) === true) {
        return true;
      }

      // Else we continue
    }
  }

  // If along the lines we could not return true that means the puzzle could not be solved
  return false;
}

function getBoxId(r, c) {
  let rowVal = Math.floor(r / 3) * 3;
  let colVal = Math.floor(c / 3);

  return colVal + rowVal;
}

function isValid(boxes, rows, cols, num) {
  if (boxes[num] === true || rows[num] === true || cols[num] === true) {
    return false;
  } else {
    // If the number isn't in boxes, rows or cols then we return true

    return true;
  }
}

/*

            1                2                3
       0    1    2      3    4    5      6    7    8
   0 ["5", "3", "4", | "6", "7", "8", | "9", "1", "2"],
0  1 ["6", "7", "2", | "1", "9", "5", | "3", "4", "8"],
   2 ["1", "9", "8", | "3", "4", "2", | "5", "6", "7"],
     -------------------------------------------------
   3 ["8", "5", "9", | "7", "6", "1", | "4", "2", "3"],
3  4 ["4", "2", "6", | "8", "5", "3", | "7", "9", "1"],
   5 ["7", "1", "3", | "9", "2", "4", | "8", "5", "6"],
     -------------------------------------------------
   6 ["9", "6", "1", | "5", "3", "7", | "2", "8", "4"],
6  7 ["2", "8", "7", | "4", "1", "9", | "6", "3", "5"],
   8 ["3", "4", "5", | "2", "8", "6", | "1", "7", "9"],


*/

console.log(solveSudoku(input));
