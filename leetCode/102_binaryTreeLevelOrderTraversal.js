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

/*

          3
      9       20
          15      7

  */

function levelOrder(root) {
  if (root === null) return [];

  if ((root.left === null) & (root.right === null)) return [[root.val]];

  let res = [];
  let que = new Queue(); // could also use array

  que.enqueue(root);

  while (que.length > 0) {
    let len = que.length;
    let count = 0;
    let arr = [];

    while (count !== len) {
      let curr = que.dequeue(); // if using array, shift() from front
      arr.push(curr.val);

      if (curr.left !== null) que.enqueue(curr.left); // if using array, push onto backside
      if (curr.right !== null) que.enqueue(curr.right);

      count++;
    }

    // for (let i = 0; i < arr.length; i++) {
    //   let node = arr[i];

    //   if (node.left !== null) {
    //     que.enqueue(node.left);
    //   }

    //   if (node.right !== null) {
    //     que.enqueue(node.right);
    //   }

    //   arr[i] = node.val;
    // }

    res.push(arr);
  }

  return res;
}

let node1 = new TreeNode(3);
let node2 = new TreeNode(9);
let node3 = new TreeNode(20);
let node4 = new TreeNode(15);
let node5 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

console.log(levelOrder(node1));
