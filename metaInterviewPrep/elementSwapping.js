// Element Swapping
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=838749853303393&ppid=454615229006519&practice_plan=0

let input1 = [5, 3, 1]; // => [1, 5, 3]
let input2 = [8, 9, 11, 2, 1]; // => [2, 8, 9, 11, 1]
let input3 = [8, 9, 1, 11, 3, 1]; // => [1, 8, 9, 3, 11, 1]
let k1 = 2;
let k2 = 3;

function findMinArray(arr, k) {
  let res = [];
  let i = 0;
  let swaps = 0;

  while (k > 0) {
    let portion = arr.slice(i, i + k + 1);

    // console.log(portion);

    let minArr = findMin(portion);
    let idx = minArr[1];
    swaps = 0;

    while (idx !== 0) {
      let tmp = portion[idx - 1];
      portion[idx - 1] = portion[idx];
      portion[idx] = tmp;
      swaps++;

      idx--;
      k--;

      if (k === 0) break;
    }

    arr = [...arr.slice(0, i), ...portion, ...arr.slice(i + portion.length)];

    i++;
  }

  return arr;
}

function findMin(arr) {
  let min = Infinity;
  let idx = -1;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num < min) {
      min = num;
      idx = i;
    }
  }

  return [min, idx];
}

console.log(findMinArray(input2, k2));
