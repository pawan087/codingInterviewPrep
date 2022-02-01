// Signal Filter

function countSignals(frequencies, filterRanges) {
  let left = -Infinity;
  let right = Infinity;

  for (let arr of filterRanges) {
    let curLeft = arr[0];
    let curRight = arr[1];

    left = Math.max(left, curLeft);
    right = Math.min(right, curRight);
  }

  let count = 0;

  for (let num of frequencies) {
    if (left <= num && num <= right) {
      count++;
    }
  }

  return count;
}

// let frequencies = [8, 15, 14, 16, 21];
// let filtersRanges = [
//   [10, 17],
//   [13, 15],
//   [13, 17],
// ];

let frequencies = [20, 5, 6, 7, 12, 3, 2];
let filtersRanges = [
  [5, 20],
  [1, 20],
  [6, 15],
];

console.log(countSignals(frequencies, filtersRanges));
