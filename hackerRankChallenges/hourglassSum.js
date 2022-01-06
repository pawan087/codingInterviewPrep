// https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

let input = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]; // => 19

function hourglassSum(arr) {
  let directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let max = -Infinity;

  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      let curVal = arr[i][j];

      for (let k = 0; k < directions.length; k++) {
        let curDir = directions[k];

        let nexRow = i + curDir[0];
        let nexCol = j + curDir[1];

        let val = arr[nexRow][nexCol];

        curVal += val;
      }

      max = Math.max(curVal, max);
    }
  }

  return max;
}

console.log(hourglassSum(input));
