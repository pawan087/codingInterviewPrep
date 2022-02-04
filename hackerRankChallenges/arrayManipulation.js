// Array Manipulation (Hard)

let n = 10;
let input = [
  // a  b  k
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
];

// Add the values of k between the indices a and b inclusive

let outputArr = [
  // 1   2   3   4   5   6   7   8   9   10
  [03, 03, 03, 03, 03, 00, 00, 00, 00, 00],
  [03, 03, 03, 10, 10, 07, 07, 07, 00, 00],
  [03, 03, 03, 10, 10, 08, 08, 08, 01, 00],
];

// function arrayManipulation(n, queries) {
//   let grid = new Array(queries.length).fill(0).map(() => new Array(n).fill(00));
//   let prev;

//   for (let i = 0; i < grid.length; i++) {
//     if (i > 0) {
//       grid[i] = prev;
//     }

//     let low = queries[i][0] - 1;
//     let high = queries[i][1] - 1;
//     let curNum = queries[i][2];

//     for (let j = 0; j < n; j++) {
//       if (low <= j && j <= high) {
//         grid[i][j] += curNum;
//       }
//     }

//     prev = grid[i];
//   }

//   for (let arr of grid) {
//     console.log(JSON.stringify(arr));
//   }

//   return Math.max(...grid[grid.length - 1]);
// }

function arrayManipulation(n, queries) {
  let arr = new Array(n).fill(0);

  for (let query of queries) {
    let start = query[0];
    let end = query[1];
    let num = query[2];

    arr[start - 1] += num;

    if (end < arr.length) {
      arr[end] += -num;
    }
  }

  let max = -Infinity;
  let sum = 0;

  for (let num of arr) {
    sum += num;

    max = Math.max(max, sum);
  }

  return max;
}

console.log(arrayManipulation(n, input));
