/*

https://leetcode.com/problems/merge-intervals/

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

function merge(arr) {
  arr.sort(([a, c], [b, d]) => a - b);
  // arr.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])

  let res = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let subArr = arr[i];

    let prev = res[res.length - 1];

    if (prev[1] >= subArr[0]) {
      res.pop();

      res.push([prev[0], Math.max(prev[1], subArr[1])]);
    } else {
      res.push(subArr);
    }
  }

  return res;
}

let input = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

let input2 = [
  [6, 9],
  [2, 3],
  [9, 11],
  [1, 5],
  [14, 18],
];

let input3 = [
  [1, 4],
  [0, 2],
  [3, 5],
];

console.log(merge(input2));
