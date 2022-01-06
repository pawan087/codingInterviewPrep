// see 'graphBFS.jpg'

let adjList = [
  [1, 3], // 0
  [0], // 1
  [3, 8], // 2
  [0, 2, 4, 5], // 3
  [3, 6], // 4
  [3], // 5
  [4, 7], // 6
  [6], // 7
  [2], // 8
];

let traversalDFS = function (vrtx, arr, res, seen) {
  res.push(vrtx);
  seen[vrtx] = true;

  let neighbors = arr[vrtx];

  for (let i = 0; i < neighbors.length; i++) {
    let neighbor = neighbors[i];

    if (seen[neighbor] === undefined) {
      traversalDFS(neighbor, arr, res, seen);
    }
  }

  return res;
};

console.log(traversalDFS(0, adjList, [], {}));
