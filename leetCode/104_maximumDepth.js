// https://leetcode.com/problems/maximum-depth-of-binary-tree/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// function maxDepth(node, count = 0) {
//   if (node === null) return count;
//   count++;
//   return Math.max(maxDepth(node.left, count), maxDepth(node.right, count));
// }

function maxDepth(root) {
  if (root === null) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

/*

        3
    9       20
        15      7

*/

let node1 = new TreeNode(3);
let node2 = new TreeNode(9);
let node3 = new TreeNode(20);
let node4 = new TreeNode(15);
let node5 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

console.log(maxDepth(node1));
