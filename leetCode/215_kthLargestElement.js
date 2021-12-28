// https://leetcode.com/problems/kth-largest-element-in-an-ary/

// k = 2
// [5, 3, 1, 6, 4, 2] --> [1, 2, 3, 4, 5, 6]
// idx = arr.length - k --> 6 - 2 = 4
// Answer is 'arr[idx]' or '5'

function quickSort(arr, left, right) {
  if (left < right) {
    let partitionIdx = partition(arr, left, right);

    quickSort(arr, left, partitionIdx - 1);
    quickSort(arr, partitionIdx + 1, right);
  }

  return;
}

function partition(arr, left, right) {
  let pivotElement = arr[right];
  let partitionIdx = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivotElement) {
      swap(arr, partitionIdx, j);

      partitionIdx++;
    }
  }

  swap(arr, partitionIdx, right);

  return partitionIdx;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function kthLargestElement(arr, k) {
  let idxToFind = arr.length - k;

  quickSort(arr, 0, arr.length - 1);

  return arr[idxToFind];
}

let input = [5, 3, 1, 6, 4, 2];

console.log(kthLargestElement(input, 2));
