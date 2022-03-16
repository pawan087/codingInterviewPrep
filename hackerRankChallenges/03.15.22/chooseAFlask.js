// Choose a Flask

function chooseFlask(requirements, flaskTypes, markings) {
  let obj = {};

  for (let i = 0; i < markings.length; i += flaskTypes) {
    let cur = markings.slice(i, i + flaskTypes);
    let sum = 0;

    for (let requirement of requirements) {
      let x = findFirstLarger(requirement, cur);

      sum += x - requirement;
    }

    if (sum < 0) {
      obj[markings[i][0]] = -1;

      continue;
    }

    obj[markings[i][0]] = sum;
  }

  let smallest = Infinity;

  for (let key in obj) {
    let val = obj[key];

    if (val < 0) {
      continue;
    }

    smallest = Math.min(smallest, val);
  }

  return smallest === Infinity ? -1 : smallest;
}

function findFirstLarger(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    let toCompare = arr[i][1];

    if (num <= toCompare) {
      return toCompare;
    }
  }

  return -1;
}

// let n = 4;
// let requirements = [4, 6, 6, 7];
// let flaskTypes = 3;
// let markings = [
//   [0, 3],
//   [0, 5],
//   [0, 7],
//   [1, 6],
//   [1, 8],
//   [1, 9],
//   [2, 3],
//   [2, 5],
//   [2, 6],
// ];

let n = 2;
let requirements = [4, 6];
let flaskTypes = 2;
let markings = [
  [0, 5],
  [0, 7],
  [0, 10],
  [1, 4],
  [1, 10],
];

console.log(chooseFlask(requirements, flaskTypes, markings));
