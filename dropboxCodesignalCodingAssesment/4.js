function solution(a, b, queries) {
  let res = [];

  for (let arr of queries) {
    if (arr.length === 2) {
      let count = numWays(a, b, arr[1]);

      res.push(count);
    }

    if (arr.length === 3) {
      let idx = arr[1];

      a[idx] = a[idx] + arr[2];
    }
  }

  return res;
}

function numWays(a, b, target) {
  let res = 0;
  let obj = {};

  for (let num of b) {
      obj[num] = true;
  }

  for (let i = 0; i < a.length; i++) {
    let numA = a[i];

    let toFind = target - numA;

    if (obj[toFind] === true) {
        res++;
    }
  }

  return res;
}

let a = [1, 4];
let b = [1, 2, 3];

let queries = [
  [1, 5],
  [0, 0, 2],
  [1, 5],
];

console.log(solution(a, b, queries));
