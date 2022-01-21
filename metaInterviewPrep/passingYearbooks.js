// Passing Yearbooks
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=146466059993201&ppid=454615229006519&practice_plan=0

function findSignatureCounts(arr) {
  let res = [];
  let obj = {};

  for (let num of arr) {
    obj[num] = false;
  }

  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];
    let tmp = i;

    obj[curNum] = true;

    let count = 1;

    let num = arr[curNum - 1];

    while (obj[num] !== true) {
      num = arr[num - 1];

      count++;
    }

    obj[curNum] = false;
    res.push(count);
  }

  return res;
}

let input = [2, 1];

console.log(findSignatureCounts(input)); // => [2, 2]
