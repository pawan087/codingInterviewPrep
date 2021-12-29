// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

function findFirstLastPosition(arr, num) {

  if (arr.length === 0) return [-1, -1];

  let firstPos = binarySearchIterative(arr, 0, arr.length - 1, num);

  if (firstPos === -1) return [-1, -1];

  let startPos = firstPos;
  let endPos = firstPos;
  let tmp1;
  let tmp2;

  while (startPos !== -1) {
    tmp1 = startPos;

    startPos = binarySearchIterative(arr, 0, startPos - 1, num);
  }

  startPos = tmp1;

  while (endPos !== -1) {
    tmp2 = endPos;

    endPos = binarySearchIterative(arr, endPos + 1, arr.length - 1, num);
  }

  endPos = tmp2;

  return [startPos, endPos];
}

// function binarySearchRecursive(arr, left = 0, right = arr.length - 1, target) {
//   let mid = Math.floor((left + right) / 2);
//   let cur = arr[mid];

//   if (left < right) {
//     if (cur === target) {
//       return true;
//     } else if (cur < target) {
//       return binarySearch(arr, left, mid - 1, target);
//     } else {
//       return binarySearch(arr, mid + 1, right, target);
//     }
//   }

//   return false;
// }

function binarySearchIterative(arr, left, right, target) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cur = arr[mid];

    if (cur === target) {
      return mid; // index
    } else if (cur < target) {
      left = mid + 1; // get rid of the left half
    } else {
      right = mid - 1; // get rid of the right half
    }
  }

  return -1;
}

let input = [5, 7, 7, 8, 8, 10];
let target = 7;
console.log(findFirstLastPosition(input, target));
// console.log(binarySearchIterative(input, 0, input.length - 1, 7));
