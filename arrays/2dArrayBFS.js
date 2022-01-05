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

let traversalBFS = function (arr) {
  let seen = new Array(arr.length) // 1st create the outer array with spaces for as many rows as needed
    .fill(0) // Fill these values with anything, '0' acts as temporary holder
    .map(() => new Array(arr[0].length).fill(false)); // 2nd iterate through each row and convert the '0's into arrays (the subArrays) of the same length as columns of matrix

  let values = [];
  let queue = [[0, 0]]; // Use LinkedList for optimization, start in top-left corner

  while (queue.length > 0) {
    let cur = queue.shift();

    let row = cur[0];
    let col = cur[1];

    if (row < 0) continue; // Off bounds, less than 1st row
    if (col < 0) continue; // Off bounds, less than 1st row
    if (row > arr.length - 1) continue; // Off bounds, greater than last row
    if (col > arr[0].length - 1) continue; // Off bounds, greater than last col

    if (seen[row][col] === true) continue; // Do no revisit what has already been visited

    seen[row][col] = true; // Update 'seen' so we do not revisit
    values.push(arr[row][col]); // Place value or 'node' into result

    for (let i = 0; i < directions.length; i++) {
      let curDir = directions[i];

      let curDirRow = curDir[0];
      let curDirCol = curDir[1];

      let curRow = row + curDirRow;
      let curCol = col + curDirCol;

      queue.push([curRow, curCol]);
    }
  }

  return values;
};

console.log(traversalBFS(my2dArray));
