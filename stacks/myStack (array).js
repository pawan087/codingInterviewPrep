// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);

    return this;
  }

  pop() {
    this.array.pop();

    return holdingPointer;
  }
}

const myStack = new Stack();
myStack.push("google");
// console.log(myStack.peek());
myStack.push("udemy");
myStack.push("discord");

console.log(myStack);
