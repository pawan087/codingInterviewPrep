// https://leetcode.com/problems/course-schedule/

// Use Topological Sort to remove '0' inDegree elements and their connections and recalculate inDegrees and repeat until no more 'o' inDegree elements
// If there are no '0' inDegree elements and vertexes remain, then return false otherwise return true

let input = [
  [1, 0],
  [2, 1],
  [2, 5],
  [0, 3],
  [4, 3],
  [3, 5],
  [4, 5],
];

let n = 6; // 6 courses: 0, 1 , 2 , 3, 4, 5

let input2 = [
  [1, 0],
  [0, 1],
];

let n2 = 2;

let input3 = [
  [1, 4],
  [2, 4],
  [3, 1],
  [3, 2],
];

let n3 = 5;

let input4 = [
  [2, 0],
  [1, 0],
  [3, 1],
  [3, 2],
  [1, 3],
];

let n4 = 4;

var canFinish = function (numCourses, prerequisites) {
  let adjList = {};

  for (let i = 0; i < prerequisites.length; i++) {
    let prerequisite = prerequisites[i];

    if (adjList[prerequisite[1]] === undefined) {
      adjList[prerequisite[1]] = new Array(0);
      adjList[prerequisite[1]].push(prerequisite[0]);
    } else {
      adjList[prerequisite[1]].push(prerequisite[0]);
    }
  }

  let obj = {};

  for (let i = 0; i < numCourses; i++) {
    obj[i] = 0;
  }

  for (let i = 0; i < prerequisites.length; i++) {
    let prerequisite = prerequisites[i];
    let vertex = prerequisite[0];

    obj[vertex]++;
  }

  let bool = true;

  while (bool) {
    let idx = returnIdxZero(obj);

    if (idx !== false) {
      let connections = adjList[idx];

      if (connections) {
        for (let connection of connections) {
          obj[connection]--;
        }
      }

      delete obj[idx];
    } else {
      bool = false;
    }
  }

  return Object.values(obj).length === 0;
};

function returnIdxZero(obj) {
  for (let key in obj) {
    let val = obj[key];

    if (val === 0) return key;
  }

  return false;
}

var canFinishOptimal = function (numCourses, prerequisites) {
  let adjList = new Array(n).fill(0).map(() => new Array(0));
  let inDegrees = new Array(n).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    adjList[prerequisites[i][1]].push(prerequisites[i][0]);
    inDegrees[prerequisites[i][0]]++;
  }

  let zeroInDegrees = [];

  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) zeroInDegrees.push(i);
  }

  while (zeroInDegrees.length > 0) {
    let cur = zeroInDegrees.shift();

    if (adjList[cur]) {
      for (let i = 0; i < adjList[cur].length; i++) {
        inDegrees[adjList[cur][i]]--;

        if (inDegrees[adjList[cur][i]] === 0)
          zeroInDegrees.push(adjList[cur][i]);
      }
    }
  }

  for (let inDegree of inDegrees) {
    if (inDegree !== 0) return false;
  }

  return true;
};

console.log(canFinishOptimal(n3, input3));
