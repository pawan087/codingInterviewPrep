// https://www.geeksforgeeks.org/count-pairs-difference-equal-k/

let input1 = [1, 5, 3, 4, 2]; // => 2
let input2 = [8, 12, 16, 4, 0, 20]; // => 4

let k1 = 3;
let k2 = 4;

function countPairs(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + k === arr[j]) {
        count++;
      }

      if (arr[j] + k === arr[i]) {
        count++;
      }
    }
  }

  return count;
}

console.log(countPairs(input2, k2));
