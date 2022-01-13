// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

let input1 = [7, 1, 3, 2, 4, 5, 6];
let input2 = [4, 3, 2, 1];
let input3 = [2, 3, 4, 1, 5];
let input4 = [0, 2, 3, 4, 1, 6, 5];

function minimumSwaps(arr) {
  let swaps = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i + 1) {
      continue;
    }

    let cur = arr[i];
    arr[i] = arr[cur - 1];
    arr[cur - 1] = cur;
    swaps++;

    if (arr[i] !== i + 1) {
      i--;
    }
  }

  console.log("Sorted Array", arr);

  return swaps;
}

function minimumSwaps2(arr) {
  let swaps = 0;
  let obj = {};

  for (let i = 1; i <= arr.length; i++) {
    obj[i] = false;
  }

  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];
    let shouldBe = i + 1;

    if (obj[curNum] === true) continue;

    if (curNum === shouldBe) {
      obj[curNum] = true;
      continue;
    }

    obj[curNum] = true;
    let nexNum = arr[curNum - 1];

    while (obj[nexNum] !== true) {
      obj[nexNum] = true;

      nexNum = arr[nexNum - 1];
      swaps++;
    }
  }

  return swaps;
}

console.log(minimumSwaps2(input3));

/*

2 3 4 1 5

3 2 4 1 5, 1 swap
4 2 3 1 5, 2 swaps
1 2 3 4 5, 3 swaps

Take what is in first place and swap where it belongs, if still not in place keep swapping, once is iterate forward and repeat until done


or detect cycles and keep track of cycle length, return cycle length - 1
for instance, in 2 spot is 3 and in 3 spot is 4 and in 4 spot is 1 and 1 spot is 2, there is a cycle, take that length from 2 back to 2 (4) and subtract one


*/
