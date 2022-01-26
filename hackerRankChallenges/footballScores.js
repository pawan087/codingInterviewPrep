// Football Scores

function counts(teamA, teamB) {
  let obj = {};

  for (let num of teamA) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }

  let res = [];

  for (let num of teamB) {
    let count = 0;

    for (let i = num; i >= 1; i--) {
      if (obj[i]) {
        count += obj[i];
      }
    }

    res.push(count);
  }

  // teamA.sort((a, b) => a - b);

  // console.log(teamA);

  return res;
}

/*

Faster approach would be to first sort teamA
Iterate through teamB (no need to sort)
Run a binary search while (!(i > j)), i === j is fine it's when i is past j we want to stop looping
whilst looping run binary search
when moving j to the left, cut off from length of teamA
when moving i === j check if numA less than or equal to numB
if so return the total count which was being truncated by cuts when moving j right
if the number isn't equal when i === j then that means that number should also be cut so decrease count and add to res

*/

let teamA = [1, 4, 2, 4];
let teamB = [3, 5];
// => [2, 4]

console.log(counts(teamA, teamB));
