// Nodes in a Subtree

// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=3068294883205371&ppid=454615229006519&practice_plan=0

function Node(val, children) {
  this.val = val === undefined ? 0 : val;
  this.children = children === undefined ? [] : children;
}

// function frequency(root, str, dP = {}) {
//   if (dP[str[root.val - 1]] !== undefined) {
//     // dP[str[root.val - 1]]++;
//     return;
//   } else {
//     dP[str[root.val - 1]] = 1;
//   }

//   for (let child of root.children) {
//     let char = str[child.val - 1];

//     if (dP[char] === undefined) {
//       dP[char] = 1;
//     } else {
//       dP[char]++;
//     }

//     if (child.children.length > 0) {
//       countOfNodes(child, str, dP);
//     }
//   }

//   return dP;
// }

function frequency(root, str, obj = {}) {
  let char = str[root.val - 1];

  if (obj[char] === undefined) {
    obj[char] = 1;
  } else {
    obj[char]++;
  }

  if (root.children.length > 0) {
    for (let child of root.children) {
      frequency(child, str, obj);
    }
  }

  return obj;
}

function countOfNodes(root, queries, string) {
  let res = [];

  for (let query of queries) {
    let num = query[0];
    let char = query[1];

    if (root.val === num) {
      let obj = frequency(root, string);

      if (obj[char] !== undefined) {
        res.push(obj[char]);
      }
    } else {
      let node = bfs(root, num);

      let obj = frequency(node, string);

      if (obj[char] !== undefined) {
        res.push(obj[char]);
      }
    }
  }

  return res;
}

function bfs(root, target) {
  let que = [];
  que.push(root);

  while (que.length > 0) {
    let cur = que.shift();

    if (cur.val === target) {
      return cur;
    }

    if (cur.children.length > 0) {
      for (let child of cur.children) {
        que.push(child);
      }
    }
  }
}

let str = "abaacab";

let nodes = new Array(str.length + 1);

for (let i = 1; i <= str.length; i++) {
  nodes[i] = new Node(i);
}

nodes[1].children = [nodes[2], nodes[3], nodes[7]];
nodes[2].children = [nodes[4], nodes[5]];
nodes[3].children = [nodes[6]];

let root1 = nodes[1];

let queries = [
  [1, "a"],
  [2, "b"],
  [3, "a"],
];

let output = countOfNodes(root1, queries, str);

console.log(output);
