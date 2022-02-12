// Picking Tickets

// function maxTickets(tickets) {
//   let sorted = tickets.slice().sort((a, b) => a - b);
//   let arr = [];
//   let subArr = [];

//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] === sorted[i + 1] || sorted[i] + 1 === sorted[i + 1]) {
//       subArr.push(sorted[i]);
//     } else {
//       subArr.push(sorted[i]);
//       arr.push(subArr);
//       subArr = [];
//     }
//   }

//   let res = 0;

//   for (let nums of arr) {
//     res = Math.max(res, nums.length);
//   }

//   return res;
// }

function maxTickets(tickets) {
  tickets.sort((a, b) => a - b);

  let count = 0;
  let res = -Infinity;

  for (let i = 0; i < tickets.length; i++) {
    count++;

    if (tickets[i] === tickets[i + 1] || tickets[i] === tickets[i + 1] - 1) {
      continue;
    }

    res = Math.max(res, count);
    count = 0;
  }

  return res;
}

let input = [8, 5, 4, 8, 4]; // 3
let input2 = [4, 13, 2, 3]; // 3

console.log(maxTickets(input));
