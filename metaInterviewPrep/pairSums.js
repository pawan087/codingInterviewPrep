// Pair Sums
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=840934449713537&ppid=454615229006519&practice_plan=1

function numberOfWays(arr, k) {
  let obj = {};
  let target = k;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];
    let dif = target - curNum;

    if (obj[dif] === undefined) {
      obj[curNum] = 1;
    } else {
      count += obj[dif];

      obj[dif]++;
    }
  }

  return count;
}

let input = [1, 5, 3, 3, 3];
let k = 6;

console.log(numberOfWays(input, k)); // => 4
