// https://leetcode.com/problems/count-complete-tree-nodes/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var countNodes = function (root) {
  // debugger;
  if (!root) {
    // debugger;
    return 0;
  }

  let height = getHeight(root);

  if (!height) {
    // debugger;
    return 1; // no height --> only the root node remains
  }

  let topCount = topCountHelper(height); // Can also use formula --> (Math.pow(2, height) - 1)

  let left = 0;
  let right = topCount; // 0 thru topCount will equate to the number of 'potential' nodes at bottom

  while (left < right) {
    // debugger;
    // Rounding up since need to know how far right nodes are full
    // If we floor we can be stuck in infinite loop because left will never begin to overlap
    let idx = Math.ceil((left + right) / 2);


    if (nodeExists(idx, height, root)) {
      // debugger;
      left = idx;
    } else {
      right = idx - 1;
    }
  }

  return topCount + (left + 1); // Left (or right) will be at the index where the number exists most to the right, add one to handle index starting at 0
};

function getHeight(root) {
  // debugger;
  let height = 0;

  while (root.left) {
    // debugger;
    height++;
    root = root.left;
  }

  return height;
}

function topCountHelper(height) {
  // debugger;
  let num = 0;

  for (let i = 0; i < height; i++) {
    // debugger;
    num += 2 ** i;
  }

  return num;
}

function nodeExists(idx, height, node) {
  // debugger;
  let left = 0;
  let right = topCountHelper(height);
  let count = 0;

  while (count < height) {
    // debugger;
    let mid = Math.ceil((left + right) / 2);

    if (idx >= mid) {
      // debugger;
      left = mid; // Rid of left side since we are looking for a number equal or bigger
      node = node.right; // Traverse to right of tree since node cannot possibly be on left if knowing idx >= mid
    } else {
      right = mid - 1; // Rid of right side since we are looking for a number less than mid
      node = node.left; // Traverse to left of tree since node cannot possibly be on right if knowing idx < mid
    }

    count++;
  }

  return node !== null;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;

// debugger;
console.log(countNodes(node1));
