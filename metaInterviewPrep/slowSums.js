// Slow Sums
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=836241573518034&ppid=454615229006519&practice_plan=0

let input1 = [4, 2, 1, 3]; // => 26
let input2 = [2, 3, 9, 8, 4]; // => 88

function getTotalTime(arr) {
  let res = 0;

  while (arr.length !== 1) {
    if (arr.length === 2) {
      let sum = arr[0] + arr[1];
      arr = [sum];
      res += sum;
      continue;
    }

    let largestArr = getTwoLargest(arr);
    res += largestArr[0][0] + largestArr[1][0];
    arr = mergeTwoLargest(arr, largestArr);
  }

  return res;
}

function getTwoLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  let idx1 = -1;
  let idx2 = -1;

  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];

    if (curNum > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = curNum;
      idx1 = i;
      continue;
    }

    if (curNum > secondLargest) {
      secondLargest = curNum;
      idx2 = i;
      continue;
    }
  }

  return [
    [firstLargest, idx1],
    [secondLargest, idx2],
  ];
}

function mergeTwoLargest(arr, largestArr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];

    if (curNum === largestArr[0][0] || curNum === largestArr[1][0]) {
      continue;
    }

    res.push(curNum);
  }

  res.push(largestArr[0][0] + largestArr[1][0]);

  return res;
}

// console.log(mergeTwoLargest(input1, getTwoLargest(input1)));
// console.log(getTwoLargest([2, 1, 7]));
console.log(getTotalTime(input2));
