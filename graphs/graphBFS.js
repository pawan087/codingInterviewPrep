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

let traversalBFS = function (arr) {
  let que = [0];
  let res = [];
  let seen = {};

  while (que.length > 0) {
    let cur = que.shift();
    res.push(cur);
    seen[cur] = true;

    let neighbors = arr[cur];

    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];

      if (seen[neighbor] === undefined) {
        que.push(neighbor);
      }
    }
  }

  return res;
};

console.log(traversalBFS(adjList));
