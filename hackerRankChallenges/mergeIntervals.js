// Merge Intervals

function getMergedIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let bool = false;
  let min = Infinity;
  let max = -Infinity;
  let res = [];

  for (let interval of intervals) {
    let first = interval[0];
    let second = interval[1];

    if (first < min && bool === false) {
      min = first;
    }

    if (second > max && bool === false) {
      max = second;
      bool = true;
      continue;
    }

    if (bool === true && first > max) {
      bool = false;
      res.push([min, max]);
      min = first;
      max = second;
      continue;
    }

    if (second > max && bool === true) {
      max = second;
      bool = false;
      res.push([min, max]);
      min = Infinity;
      max = -Infinity;
      continue;
    }
  }

  if (!(min < res[res.length - 1][1])) {
    res.push([min, max]);
  }

  return intervals;
}

let input1 = [
  [7, 7],
  [2, 3],
  [6, 11],
  [1, 2],
]; // => [[1,3], [6,11]]

let input2 = [
  [6, 9],
  [2, 3],
  [9, 11],
  [1, 5],
  [14, 18],
]; // => [[1, 5], [6, 11], [14, 18]]

let input3 = [
  [4, 8],
  [2, 6],
  [5, 7],
]; // => [2, 8]

console.log(getMergedIntervals(input2));
