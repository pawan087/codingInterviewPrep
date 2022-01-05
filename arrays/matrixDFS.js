// 4 x 3
let my2dArray = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

// Clockwise
let directions = [
  [-1, 0], // Up
  [0, 1], // Right
  [1, 0], // Down
  [0, -1], // Left
];

let traversalDFS = function (arr) {
  let seen = new Array(arr.length) // 1st create the outer array with spaces for as many rows as needed
    .fill(0) // Fill these values with anything, '0' acts as temporary holder
    .map(() => new Array(arr[0].length).fill(false)); // 2nd iterate through each row and convert the '0's into arrays (the subArrays) of the same length as columns of matrix

  let values = [];

  dfs(arr, 0, 0, seen, values);

  return values;
};

let dfs = function (arr, row, col, seen, values) {
  if (row < 0) {
    // Off bounds, less than the 1st row
    return;
  }

  if (col < 0) {
    // Off bounds, less than the 1st col
    return;
  }

  if (row >= arr.length) {
    // Off bounds, greater than the last row
    return;
  }

  if (col >= arr[0].length) {
    // Off bounds, greater than the last col
    return;
  }

  if (seen[row][col]) {
    // If we have already seen this value before, do nothing
    return;
  }

  values.push(arr[row][col]); // Place in results array since this is a valid 'node'
  seen[row][col] = true; // Update that we have seen this 'node' so we do not revisit

  for (let i = 0; i < directions.length; i++) {
    let curDir = directions[i]; // Up, Right, Down then Left
    
    let curRow = row + curDir[0];
    let curCol = col + curDir[1];

    dfs(arr, curRow, curCol, seen, values);
  }

  return;
};

console.log(traversalDFS(my2dArray));
