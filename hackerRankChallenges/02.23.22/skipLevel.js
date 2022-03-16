// Skip a Level

function maximumPoints(k, costs) {
  let sum = 0;

  for (let cost of costs) {
    sum += cost;
  }

  if (sum <= k) return costs.length;

  let sorted = costs.slice().sort((a, b) => a - b);

  for (let i = sorted.length - 1; i >= 0; i--) {
    let cur = sorted[i];

    if (sum - cur <= k) {
      return costs.length - 1;
    }
  }

  return costs.length - 2;
}

let k = 14;
let costs = [2, 4, 1, 8, 6];

let k2 = 15;
let costs2 = [3, 2, 6, 4, 6, 1];

console.log(maximumPoints(k2, costs2));
