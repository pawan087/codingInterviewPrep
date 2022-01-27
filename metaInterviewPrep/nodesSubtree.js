// Nodes in a Subtree

// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=3068294883205371&ppid=454615229006519&practice_plan=0

function Node(val, children) {
  this.val = val === undefined ? 0 : val;
  this.children = children === undefined ? [] : children;
}

function countOfNodes(root, queries, string) {
  // Write your code here
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

console.log(nodes);

let output = countOfNodes(root1, queries, str);

console.log(output);
