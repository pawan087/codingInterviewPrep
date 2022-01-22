// Magical Candy Bags
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=513590792640579&ppid=454615229006519&practice_plan=0

let k = 3;
let input = [2, 1, 7, 4, 2];

function maxCandies(arr, k) {
  let res = 0;

  while (k !== 0) {
    let largestInfo = findLargest(arr);
    let curLargest = largestInfo[0];
    let curIdx = largestInfo[1];

    arr[curIdx] = Math.floor(arr[curIdx] / 2);
    res += curLargest;
    k--;
  }

  return res;
}

function findLargest(arr) {
  let largest = -Infinity;
  let idx = -1;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > largest) {
      largest = num;
      idx = i;
    }
  }

  return [largest, idx];
}

console.log(maxCandies(input, k));
