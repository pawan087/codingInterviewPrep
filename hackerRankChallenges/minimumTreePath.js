// Minimum Tree Path
// Must visit all nodes in visitNodes before visiting 'n' node
// Each move counts as 1 (otherwise unweighted)

let n = 5;

let edges = [
  [1, 2],
  [1, 3],
  [3, 5],
  [3, 4],
];

let visitNodes = [2, 4];

function minimumTreePath(n, edges, visitNodes) {
  let adjList = {};
  let seen = {};

  for (let i = 1; i <= n; i++) {
    adjList[i] = new Array(0);
    seen[i] = false;
  }

  for (let i = 0; i < edges.length; i++) {
    let curEdge = edges[i];

    adjList[curEdge[0]].push(curEdge[1]);
  }

  return adjList;
}

// Write dfs helper here

console.log(minimumTreePath(n, edges, visitNodes));
