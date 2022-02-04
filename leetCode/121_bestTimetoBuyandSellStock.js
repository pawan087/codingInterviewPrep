// Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

let input1 = [7, 1, 5, 3, 6, 4]; // 5
let input2 = [7, 6, 4, 3, 1]; // 0

function maxProfit(prices) {
//   debugger;
  if (prices.length == 0) {
    // debugger;
    return 0;
  }

//   debugger;
  let max = 0;
  let sofarMin = prices[0];

  for (let i = 0; i < prices.length; i++) {
    // debugger;
    if (prices[i] > sofarMin) {
    //   debugger;
      max = Math.max(max, prices[i] - sofarMin);
    } else {
    //   debugger;
      sofarMin = prices[i];
    }
  }

//   debugger;
  return max;
}

// debugger;
console.log(maxProfit(input2));
