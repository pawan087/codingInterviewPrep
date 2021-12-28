class MyQueue {
  constructor() {
    this.arr1 = [];
    this.arr2 = [];
    this.length = 0;
  }

  push(x) {
    this.arr1.push(x);
    this.length++;
  }

  pop() {
    if (this.arr2.length) return this.arr2.pop();

    while (this.arr1.length) {
      this.arr2.push(this.arr1.pop());
    }

    this.length--;
    return this.arr2.pop();
  }

  peek() {
    if (this.arr2.length) return this.arr2[this.arr2.length - 1];

    while (this.arr1.length) {
      this.arr2.push(this.arr1.pop());
    }

    return this.arr2[this.arr2.length - 1];
  }
}

let queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek());
console.log(queue.pop());
