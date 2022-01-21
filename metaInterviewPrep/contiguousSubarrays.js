// Contiguous Subarrays
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=226517205173943&ppid=454615229006519&practice_plan=1

let input = [3, 4, 1, 6, 2];
let output = [1, 3, 1, 5, 1];

function countSubarrays(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let forward = checkForward(arr, i);
    let backward = checkBackward(arr, i);

    res.push(1 + forward.length + backward.length);
  }

  return res;
}

function checkBackward(arr, idx) {
  let res = [];

  for (let i = idx - 1; i >= 0; i--) {
    if (arr[i] > arr[idx]) break;

    res.push(arr[i]);
  }

  return res.reverse();
}

function checkForward(arr, idx) {
  let res = [];

  for (let i = idx + 1; i < arr.length; i++) {
    if (arr[i] > arr[idx]) break;

    res.push(arr[i]);
  }

  return res;
}

// function makePermsBackward(arr, toConcat, idx) {
//   let res = [];
//   let num = arr[idx];
//   let i = toConcat.length - 1;

//   for (let j = i; j >= 0; j--) {
//     let subArr = toConcat.slice(j, i + 1);
//     res.push([...subArr, num]);
//   }

//   return res;
// }

// function makePermsForward(arr, toConcat, idx) {
//   let res = [];
//   let num = arr[idx];
//   let i = 0;

//   for (let j = i + 1; j <= toConcat.length; j++) {
//     let subArr = toConcat.slice(i, j);

//     res.push([num, ...subArr]);
//   }

//   return res;
// }

console.log(countSubarrays(input));
