// https://leetcode.com/problems/linked-list-cycle-ii/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// Generate linked list
const linkedList = [3, 2, 0, -4]
  .reverse()
  .reduce((acc, val) => new ListNode(val, acc), null);

const linkedList2 = [1]
  .reverse()
  .reduce((acc, val) => new ListNode(val, acc), null);

function createCycle(linkedList) {
  let curr = linkedList;
  let cycleNode;

  while (curr.next !== null) {
    if (curr.val === 2) {
      cycleNode = curr;
    }

    curr = curr.next;
  }

  curr.next = cycleNode;
}

createCycle(linkedList);

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};
// printList(linkedList);

function detectCylce(head) {
  if (!head) return null;

  let slow = head;
  let fast = head;
  let start = head;

  while (true) {
    slow = slow.next;
    fast = fast.next;

    if (fast === null || fast.next === null) {
      return null;
    } else {
      fast = fast.next;
    }

    if (slow === fast) {
      break;
    }
  }

  while (start !== slow) {
    start = start.next;
    slow = slow.next;
  }

  return start;
}

console.log(detectCylce2(linkedList));
