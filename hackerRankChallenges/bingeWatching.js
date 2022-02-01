// Bing Watching

function findMinimumDays(durations) {
  let arr = [];
  let sum = 0;

  for (let i = 0; i < durations.length; i++) {
    let curTime = durations[i];
    let tmp = sum + curTime;

    if (tmp <= 3) {
      sum += curTime;

      if (i === durations.length - 1 && sum > 0) {
        arr.push(i);
      }
    }

    if (tmp > 3) {
      arr.push(i);
      sum = 0;
      i--;
    }
  }

  return arr.length;
}

let n = 5;
// let durations = [1.9, 1.04, 1.25, 2.5, 1.75];
let durations = [1.01, 1.01, 1.01, 1.4, 2.4];

console.log(findMinimumDays(durations));
