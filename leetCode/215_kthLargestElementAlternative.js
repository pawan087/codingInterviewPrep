// https://leetcode.com/problems/kth-largest-element-in-an-ary/

function kthLargestElement(arr, k) {
  debugger
  let res = [];

  for (let i = 0; i < k; i++) {
    res[i] = -Infinity;
  }

  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    let count = 0;

    for (let j = k - 1; j >= 0; j--) {
      if (cur > res[j]) {
        shift(res, count);
        res[j] = cur;

        break;
      }

      count++;
    }
  }

  return res[0];
}

let input = [5, 3, 1, 6, 4, 2];
debugger
console.log(kthLargestElement(input, 3));

function shift(arr, n) {
  debugger
  for (let i = 0; i < arr.length - n; i++) {
    arr[i] = arr[i + 1];
  }

  return arr;
}
