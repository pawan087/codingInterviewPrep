// Cheapest Flights Within K Stops

// https://leetcode.com/problems/cheapest-flights-within-k-stops/

// function findCheapestPrice(n, flights, src, dst, k) {
//   let costs = new Array(n).fill(Infinity);
//   costs[src] = 0;

//   let tmpCosts = costs.slice();

//   for (let j = 0; j < k + 1; j++) {
//     for (let i = 0; i < flights.length; i++) {
//       let cur = flights[i];
//       let curSrc = cur[0];
//       let curDst = cur[1];
//       let curCost = cur[2];

//       if (costs[curDst] >= curCost + costs[curSrc]) {
//         tmpCosts[curDst] = curCost + costs[curSrc];
//       }
//     }

//     costs = tmpCosts.slice();
//   }

//   return costs[dst] === Infinity ? -1 : costs[dst];
// }

function findCheapestPrice(n, flights, src, dst, k) {
  let costs = new Array(n).fill(Infinity);
  costs[src] = 0;

  for (let i = 0; i < k + 1; i++) {
    let tmpCosts = costs.slice();

    for (let flight of flights) {
      let s = flight[0];
      let d = flight[1];
      let c = flight[2];

      if (costs[s] === Infinity) {
        continue;
      }

      if (costs[s] + c < tmpCosts[d]) {
        tmpCosts[d] = costs[s] + c;
      }
    }


    costs = tmpCosts.slice();
  }

  return costs[dst] === Infinity ? -1 : costs[dst];
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
