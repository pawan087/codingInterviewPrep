// https://leetcode.com/problems/network-delay-time/

// see graph '743_networkDelayTime.jpg'

let times1 = [
  [2, 1, 1],
  [2, 3, 1],
  [3, 4, 1],
];

let n1 = 4;
let k1 = 2;

// => 2

let times2 = [[1, 2, 1]];
let n2 = 2;
let k2 = 1;

// => 1

let times3 = [[1, 2, 1]];
let n3 = 2;
let k3 = 2;

// => -1

let times = [
  [1, 2, 9],
  [1, 4, 2],
  [2, 5, 1],
  [4, 2, 4],
  [4, 5, 6],
  [3, 2, 3],
  [5, 3, 7],
  [3, 1, 5],
];

let n = 5; // nodes = 1, 2, 3, 4, 5
let k = 1;

var networkDelayTime = function (times, n, k) {
  let adjList = {};

  for (let i = 0; i < times.length; i++) {
    let subArr = times[i];
    let vertex = subArr[0];
    let connection = subArr[1];
    let cost = subArr[2];

    if (adjList[vertex] !== undefined) {
      adjList[vertex].push([connection, cost]);
    } else {
      adjList[vertex] = new Array(0);

      adjList[vertex].push([connection, cost]);
    }
  }

  // return adjList;
  let obj = {};
  let set = new Set();

  for (let i = 1; i <= n; i++) {
    if (i !== k) obj[i] = Infinity;
    if (i === k) obj[i] = 0;
  }

  while (set.size !== n) {
    let smallest = findSmallest(obj, set);
    obj = updateNeighbors(smallest, adjList, obj);
    set.add(smallest[0]);
  }

  let res = -Infinity;

  for (let key in obj) {
    let val = obj[key];

    res = Math.max(res, val);
  }

  return res === Infinity ? -1 : res;
};

function findSmallest(obj, set) {
  let entries = Object.entries(obj);
  let smallest = [-1, Infinity];

  for (let arr of entries) {
    if (set.has(arr[0])) continue;
    if (arr[1] < smallest[1]) {
      smallest[0] = arr[0];
      smallest[1] = arr[1];
    }
  }

  return smallest;
}

function updateNeighbors(smallest, adjList, obj) {
  if (adjList[smallest[0]] === undefined) return obj;

  for (let neighbor of adjList[smallest[0]]) {
    if (smallest[1] + neighbor[1] < obj[neighbor[0]]) {
      obj[neighbor[0]] = smallest[1] + neighbor[1];
    }
  }

  return obj;
}

let leetCodeTimes = [
  [2, 1, 1],
  [2, 3, 1],
  [3, 4, 1],
];

let leetCodeN = 4;
let leetCodeK = 2;

console.log(networkDelayTime(leetCodeTimes, leetCodeN, leetCodeK));
// console.log(networkDelayTime(times, n, k));
