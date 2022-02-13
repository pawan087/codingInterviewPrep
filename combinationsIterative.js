// Combinations

let input = ["a", "b", "c"];

let output = [
  [],
  ["c"],
  ["b"],
  ["c", "b"],
  ["a"],
  ["c", "a"],
  ["b", "a"],
  ["c", "b", "a"],
];

function combinations(arr) {
  let res = [[]];

  for (let char of arr) {
    let len = res.length;

    for (let i = 0; i < len; i++) {
      let copy = res[i].slice();

      copy.push(char);
      res.push(copy);
    }
  }

  return res;
}

console.log(combinations(input));
