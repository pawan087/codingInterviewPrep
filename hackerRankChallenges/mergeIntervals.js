// Merge Intervals

function getMergedIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let res = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    lastEnd = res[res.length - 1][1];

    if (start <= lastEnd) {
      // The next interval's start is less than the previous end
      // [1, 5], [2, 4] => [1, 5]

      res[res.length - 1][1] = Math.max(lastEnd, end);
    } else {
      // [1, 5], [7, 8] => [1, 5], [7, 8]
      res.push([start, end]);
    }
  }

  return res;
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

console.log(getMergedIntervals(input1));
