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

  return res;
}

let teamA = [1, 4, 2, 4];
let teamB = [3, 5];
// => [2, 4]

console.log(counts(teamA, teamB));
