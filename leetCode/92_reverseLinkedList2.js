// https://leetcode.com/problems/reverse-linked-list-ii/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);

one.next = two;
two.next = three;
three.next = four;
four.next = five;

function reverseLinkedList2(head, start, end) {
  let node = head;
  let starting;

  while (node) {
    if (node.next) {
      if (node.next.value === start) {
        starting = node;
        break;
      }
    }

    node = node.next;
  }

  starting = node;

  if (node.next) {
    node = node.next;
  }

  let curr = node;
  let nex = node.next;
  let nexNex = nex.next;

  while (curr) {
    nex.next = curr;
    curr = nex;
    nex = nexNex;

    if (curr.value === end) {
      break;
    }

    if (nexNex.next) {
      nexNex = nexNex.next;
    } else {
      break;
    }
  }

  starting.next.next = nex;
  starting.next = curr;

  node = head;
  let arr = [];

  while (node) {
    arr.push(node.value);
    node = node.next;
  }

  return arr.join(" --> ");
}

// console.log(reverseLinkedList2(one, 2, 4));

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// Generate linked list
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

const linkedList2 = [5].reduce((acc, val) => new ListNode(val, acc), null);

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

/* ------------------------------------------------------ */

function reverse(head, m, n) {
  debugger;
  let start = head;
  let currentNode = head;
  let currentPos = 1;

  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null;
  let tail = currentNode;

  while (currentPos >= m && currentPos <= n) {
    let next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;

    currentNode = next;
    currentPos++;
  }

  start.next = newList;
  tail.next = currentNode;

  if (m > 1) {
    return head;
  } else {
    return newList;
  }
}

console.log(reverse(linkedList2, 1, 1));
