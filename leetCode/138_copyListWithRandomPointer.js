// Copy List with Random Pointer

// https://leetcode.com/problems/copy-list-with-random-pointer/

function Node(val, next, random) {
  this.val = val === undefined ? null : val;
  this.next = next === undefined ? null : next;
  this.random = random === undefined ? null : random;
}

// var copyRandomList = function (head) {
//   let seen = {};
//   let cur = head;
//   let newNodesArr = [];
//   let i = 0;

//   while (cur !== null) {
//     seen[cur.val] = cur;

//     let newNodeToPush = new Node(cur.val);
//     newNodesArr.push(newNodeToPush);
//     let key = `new${cur.val}`;
//     seen[key] = i;

//     i++;
//     cur = cur.next;
//   }

//   cur = head;

//   for (let newNode of newNodesArr) {
//     if (cur.next) {
//       let key = `new${cur.next.val}`;
//       newNode.next = newNodesArr[seen[key]];
//     }

//     if (cur.random) {
//       let key = `new${cur.random.val}`;
//       newNode.random = newNodesArr[seen[key]];
//     }

//     cur = cur.next;
//   }

//   cur = head;

//   //   while (cur !== null) {
//   //     console.log(cur);

//   //     cur = cur.next;
//   //   }

//   return newNodesArr[0];
// };

var copyRandomList = function (head) {
  let map = new Map([[null, null]]);

  let cur = head;

  while (cur !== null) {
    let curCopy = new Node(cur.val);
    map.set(cur, curCopy);

    cur = cur.next;
  }

  cur = head;

  while (cur !== null) {
    let curCopy = map.get(cur);
    let copyNext = map.get(cur.next);
    let copyRandom = map.get(cur.random);

    curCopy.next = copyNext;
    curCopy.random = copyRandom;

    cur = cur.next;
  }

  return map.get(head);
};

// Example 1:
let head1 = [
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
];

let output1 = [
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
];

let seven = new Node(7);
let thirteen = new Node(13);
let eleven = new Node(11);
let ten = new Node(10);
let one = new Node(1);

seven.next = thirteen;
thirteen.next = eleven;
thirteen.random = seven;
eleven.next = ten;
eleven.random = one;
ten.next = one;
ten.random = eleven;
one.random = seven;

console.log(copyRandomList(seven));

/*

// Example 2:
let head2 = [
  [1, 1],
  [2, 1],
];

let output2 = [
  [1, 1],
  [2, 1],
];

// Example 3:
let head2 = [
  [3, null],
  [3, 0],
  [3, null],
];

let output3 = [
  [3, null],
  [3, 0],
  [3, null],
];

*/
