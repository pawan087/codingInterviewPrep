// Gaps in Traffic

function widestGap(n, start, finish) {
  let arr = new Array(n);

  for (let i = 0; i < start.length; i++) {
    let curStart = start[i] - 1;
    let curFinish = finish[i] - 1;

    for (let j = curStart; j <= curFinish; j++) {
      arr[j] = "*";
    }
  }

  let res = -Infinity;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*") {
      res = Math.max(res, count);
      count = 0;
      continue;
    }

    count++;
  }

  return res;
}


let n = 10;
let start = [1, 2, 5, 8];
let finish = [2, 2, 6, 10];

console.log(widestGap(n, start, finish));
