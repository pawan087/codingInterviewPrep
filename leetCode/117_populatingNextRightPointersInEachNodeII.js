// Populating Next Right Pointers in Each Node 2

// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

var connect = function (root) {
  let que = [root];
  let connections = [];

  while (que.length > 0) {
    let len = que.length;
    let arr = [];

    while (len > 0) {
      let cur = que.shift();

      arr.push(cur);

      if (cur.left !== null) que.push(cur.left);
      if (cur.right !== null) que.push(cur.right);

      len--;
    }

    connections.push(arr);
  }

  for (let connection of connections) {
    for (let i = 0; i < connection.length; i++) {
      let cur = connection[i];
      let nex = connection[i + 1];

      if (nex === undefined) {
        break;
      }

      cur.next = nex;
    }
  }

  return root;
};

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = seven;

console.log(connect(one));
