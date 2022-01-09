// https://leetcode.com/problems/network-delay-time/submissions/

// With negative weights and NO negative cycles
// see 'leetCode743Graph.jpg'

let n = 5;
let k = 1;

let times = [
  [1, 4, 2],
  [1, 2, 9],
  [4, 2, -4],
  [2, 5, -3],
  [4, 5, 6],
  [5, 3, 7],
  [3, 2, 3],
  [3, 1, 5],
];

var networkDelayTime = function (times, n, k) {
  let obj = {};

  for (let i = 1; i <= n; i++) {
    if (i === k) {
      obj[i] = 0;
    } else {
      obj[i] = Infinity;
    }
  }

  let count = n - 1;

  while (count !== 0) {
    for (let arr of times) {
      let start = arr[0];
      let end = arr[1];
      let weight = arr[2];

      if (weight !== Infinity) {
        if (obj[start] + weight < obj[end]) {
          obj[end] = obj[start] + weight;
        }
      }
    }

    count--;
  }

  //   let hasCycle = containsCycle(times, obj);

  let res = -Infinity;

  for (let key in obj) {
    let val = obj[key];

    res = Math.max(res, val);
  }

  return res === Infinity ? -1 : res;
};

function containsCycle(times, obj) {
  let update = false;

  for (let arr of times) {
    let start = arr[0];
    let end = arr[1];
    let weight = arr[2];

    if (weight !== Infinity) {
      if (obj[start] + weight < obj[end]) {
        obj[end] = obj[start] + weight;
        update = true;
      }
    }
  }

  return update;
}

console.log(networkDelayTime(times, n, k));
