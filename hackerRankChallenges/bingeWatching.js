function findMinimumDays(durations) {
  let arr = [];
  let sum = 0;
  let count = 0;

  while (checkNegatives(durations) === false) {
    for (let i = 0; i < durations.length; i++) {
      let curNum = durations[i];

      if (curNum < 0) {
        continue;
      }

      if (sum + curNum <= 3) {
        sum += curNum;
        durations[i] *= -1;
        count++;
      } else {
        continue;
      }
    }

    arr.push(count);
    sum = 0;
    count = 0;
  }

  return arr.length;
}

function checkNegatives(arr) {
  for (let num of arr) {
    if (num > 0) {
      return false;
    }
  }

  return true;
}

let n = 5;
// let durations = [1.9, 1.04, 1.25, 2.5, 1.75];
let durations = [1.01, 1.01, 1.01, 1.4, 2.4];

console.log(findMinimumDays(durations));
