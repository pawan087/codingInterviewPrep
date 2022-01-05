/*

Cutting Metal Surplus
The owner of construction company has a surplus of rods of arbitrary length. A local constructor offers to buy any of the surplus, as long as all the rods have the same exact integer length, referred as saleLength. The number of sellable rods can be increased by cutting each rod zero or more times, but each cut has a cost denoted by costPerCut. After all cuts have been done, any leftover rods having a length other than saleLength must be discarded for no profit. The owner's total profit for the sale is calculated as:

totalProfit = totalUniformRods * saleLength * salePrice - totalCuts * costPerCut

where totalUniformRods is the number of sellable rods,salePrice is the per unit length price that the contractor agrees to pay, and totalCuts is the total number of times the rods needed to be cut.

Input
The first line contains three integers: costPerCut, salePrice (1 ≤ costPerCut, salePrice ≤ 1000) and number of rods n (1 ≤ n ≤ 50). The next line contains n integers - the lengths of rods in the range from 1 to 104.

Output
Print the maximum possible profit.

https://www.eolymp.com/en/problems/10631
https://leetcode.com/discuss/interview-question/428244/Cutting-Metal-Audible-Online-Assesment
https://www.hackerrank.com/contests/juniper-hackathon/challenges/metals

*/

// let lengths = [26, 103, 59];
// let costPerCut = 1;
// let salePrice = 10;

let lengths = [30, 59, 110];
let costPerCut = 1;
let salePrice = 10;

const determineProfitFromLength = (
  costPerCut,
  salePrice,
  lengths,
  requiredLength
) => {
  let totalCuts = 0;
  let totalUniformRods = 0;

  for (const sheet of lengths) {
    const rodFrequency = Math.floor(sheet / requiredLength);

    totalCuts += sheet % requiredLength === 0 ? rodFrequency - 1 : rodFrequency; // if it perfectly fits required length, cuts are one less than numOfRods

    totalUniformRods += rodFrequency;
  }

  return totalUniformRods * requiredLength * salePrice - totalCuts * costPerCut;
};

const cuttingMetal = (costPerCut, salePrice, lengths) => {
  let maxProfit = -Infinity;

  for (let i = Math.max(...lengths); i > 0; i--) {
    const thisInstanceProfit = determineProfitFromLength(
      costPerCut,
      salePrice,
      lengths,
      i
    );

    maxProfit = Math.max(maxProfit, thisInstanceProfit);
  }

  return maxProfit;
};

console.log(cuttingMetal(costPerCut, salePrice, lengths));
