// Reverse to Make Equal
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=2869293499822992&ppid=454615229006519&practice_plan=0

function areTheyEqual(array_a, array_b) {
  if (countUniques(array_a) !== countUniques(array_b)) {
    return false;
  }

  let obj = {};

  for (let num of array_b) {
    obj[num] = true;
  }

  for (let num of array_a) {
    if (obj[num] === undefined) {
      return false;
    }
  }

  return true;
}

function countUniques(arr) {
  let obj = {};

  for (let num of arr) {
    obj[num] = true;
  }

  return Object.values(obj).length;
}

let A = [1, 2, 3, 4];
let B = [1, 4, 3, 2];
let C = [1, 4, 3, 3];

console.log(areTheyEqual(A, B)); // true
// console.log(areTheyEqual(A, C)); // false
