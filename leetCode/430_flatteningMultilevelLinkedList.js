// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

class ListNode {
  constructor(val, next = null, prev = null, child = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
    this.child = child;
  }
}

const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6];

const buildMultiLevel = function (nodes) {
  const head = new ListNode(nodes[0]);
  let currentNode = head;

  for (let i = 1; i < nodes.length; i++) {
    const val = nodes[i];
    let nextNode;

    if (Array.isArray(val)) {
      nextNode = buildMultiLevel(val);
      currentNode.child = nextNode;
      continue;
    }

    nextNode = new ListNode(val);
    currentNode.next = nextNode;
    nextNode.prev = currentNode;
    currentNode = nextNode;
  }

  return head;
};

let multiLinkedList = buildMultiLevel(nodes);
// console.log(multiLinkedList);

const printListMulti = (head) => {
  if (!head) return;

  console.log(head.val);

  if (head.child) printListMulti(head.child);

  printListMulti(head.next);
};

// printListMulti(multiLinkedList);

function flatten(head) {
  // debugger;
  let cur = head;

  while (cur) {
    if (cur.child) {
      let last = flattenHelper(cur);

      let nex = cur.next;
      cur.next = cur.child;
      cur.child.prev = cur;
      cur.child = null;
      last.next = nex;

      if (nex) {
        nex.prev = last;
      }
    }

    cur = cur.next;
  }

  return head;
}

function flattenHelper(node) {
  let cur = node.child;

  while (cur.next) {
    cur = cur.next;
  }

  return cur;
}

// debugger;
console.log(flatten(multiLinkedList));
