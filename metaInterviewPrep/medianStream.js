// Median Stream
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=547645422524434&ppid=454615229006519&practice_plan=0
let input = [2, 4, 7, 1, 5, 3];
let input2 = [5, 15, 1, 3];
let output2 = [5, 10, 5, 4];

function findMedian(arr) {
  let res = [];
  let i = 1;

  while (res.length !== arr.length) {
    let curMedian = findMedianHelper(arr.slice(0, i));
    res.push(Math.floor(curMedian));
    i++;
  }

  return res;
}

function findMedianHelper(arr) {
  if (arr.length === 0) return;
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return (arr[0] + arr[1]) / 2;

  arr.sort((a, b) => a - b);

  if (arr.length % 2 === 0) {
    // Even
    let secondMid = arr.length / 2;
    let firstMid = secondMid - 1;
    return (arr[firstMid] + arr[secondMid]) / 2;
  }

  if (arr.length % 2 !== 0) {
    // Odd
    let mid = Math.floor(arr.length / 2);

    return arr[mid];
  }
}

console.log(findMedian(input));
