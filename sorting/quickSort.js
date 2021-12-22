function swap(arr, leftIdx, rightIdx) {
  let tmp = arr[leftIdx];
  arr[leftIdx] = arr[rightIdx];
  arr[rightIdx] = tmp;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)]; //middle element
  let i = left; //left pointer
  let j = right; //right pointer

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j); //swapping two elements
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(arr, left, right) {
  let idx;

  if (arr.length > 1) {
    idx = partition(arr, left, right); //idx returned from partition

    if (left < idx - 1) {
      //more elements on the left side of the pivot
      quickSort(arr, left, idx - 1);
    }

    if (idx < right) {
      //more elements on the right side of the pivot
      quickSort(arr, idx, right);
    }
  }

  return arr;
}

let input = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
let sortedArray = quickSort(input, 0, input.length - 1);

console.log(sortedArray); // [2,3,5,6,7,9]
