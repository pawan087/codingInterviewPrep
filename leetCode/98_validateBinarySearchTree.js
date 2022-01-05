// https://leetcode.com/problems/validate-binary-search-tree/

/*

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Input: root = [2,1,3]
Output: true

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

    5
1       4
    3       6

*/

// Duplicate values render the tree an invalid BST

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isValidBST(root, min = -Infinity, max = Infinity) {
  if (root === null) return true;

  if (root.left !== null) {
    if (root.left.val >= root.val) return false;
    if (root.left.val <= min) return false;
  }

  if (root.right !== null) {
    if (root.right.val <= root.val) return false;
    if (root.right.val >= max) return false;
  }

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}

let node1 = new TreeNode(5);
let node2 = new TreeNode(1);
let node3 = new TreeNode(4);
let node4 = new TreeNode(3);
let node5 = new TreeNode(6);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

console.log(isValidBST(node1));

/*

NLR PreOrder *
LNR InOrder
LRN PostOrder

Use PreOrder since we grab value of node first to compare then to it's left and right children

*/
