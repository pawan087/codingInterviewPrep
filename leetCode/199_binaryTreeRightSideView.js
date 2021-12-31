// https://leetcode.com/problems/binary-tree-level-order-traversal/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(node) {
    const newNode = new TreeNode(node.val, node.left, node.right);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;

    return holdingPointer;
  }
}

var rightSideViewBFS = function (root) {
  if (root === null) return [];

  let res = [];
  let que = [root];

  while (que.length !== 0) {
    let len = que.length;
    let count = 0;

    while (count !== len) {
      let cur = que.shift();

      if (len - 1 === count) {
        res.push(cur.val);
      }

      if (cur.left !== null) que.push(cur.left);
      if (cur.right !== null) que.push(cur.right);

      count++;
    }
  }

  return res;
};

function rightSideView(root, res = [], level = 0) {
  if (!root) return [];

  // PreOrder
  if (level >= res.length) {
    res.push(root.val);
  }

  level++;

  rightSideView(root.right, res, level);
  rightSideView(root.left, res, level);

  // InOrder
  // res.push(root.val);
  // rightSideView(root.right, res);
  // rightSideView(root.left, res);

  // PostOrder
  // rightSideView(root.right, res);
  // rightSideView(root.left, res);
  // res.push(root.val);

  return res;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);
let node8 = new TreeNode(8);
let node9 = new TreeNode(9);
let node11 = new TreeNode(11);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;
node4.right = node7;
node5.right = node9;
node7.left = node8;
node7.right = node11;

/*

N R L PreOrder --> 1, 3, 6, 2, 5, 9, 4, 7, 11, 8
R N L InOrder --> 6, 3, 1, 5, 2, 7, 8, 4
R L N PostOrder --> 6, 3, 5, 8, 7, 4, 2, 1

*/

console.log(rightSideView(node1));
