// Cheapest Flights Within K Stops

// https://leetcode.com/problems/cheapest-flights-within-k-stops/

function findCheapestPrice(n, flights, src, dst, k) {
  let obj = {};

  for (let i = 0; i < n; i++) {
    obj[i] = [];
  }

  for (let arr of flights) {
    obj[arr[0]].push([arr[1], arr[2]]);
  }

  return obj;
}

let n = 3;

let flights = [
  [0, 1, 100],
  [1, 2, 100],
  [0, 2, 500],
];

let src = 0;
let dst = 2;
let k = 1;

let output = findCheapestPrice(n, flights, src, dst, k);

console.log(output);
