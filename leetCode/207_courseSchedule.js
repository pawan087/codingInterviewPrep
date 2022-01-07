// https://leetcode.com/problems/course-schedule/

// Determine if a cycle or not, see graph '207_courseSchedule (graph).png'

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

var canFinish = function (numCourses, prerequisites) {
  debugger;
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

  for (let i = 0; i < numCourses; i++) {
    let bool = bfs(i, adjList);
    if (bool === false) return false;
  }

  return true;
  // return adjList
};

function bfs(node, adjList) {
  debugger;
  let que = [node];
  let i = 0;
  let set = new Set();

  while (que.length > 0) {
    let cur = que.shift();
    set.add(cur);

    if (cur === node && i > 0) {
      return false;
    }

    let neighbors = adjList[cur];

    if (neighbors) {
      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];
        if (neighbor === node) return false;
        if (set.has(neighbor)) continue;
        que.push(neighbor);
      }
    }

    i++;
  }

  return true;
}

let input4 = [
  [2, 0],
  [1, 0],
  [3, 1],
  [3, 2],
  [1, 3],
];

let n4 = 4;

debugger;
console.log(canFinish(n4, input4));
