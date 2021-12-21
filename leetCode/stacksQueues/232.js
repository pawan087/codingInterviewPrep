// Implement Queue using Stacks

class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const len = this.first.length;

    for (let i = 0; i < len; i++) {
      this.last.push(this.first.pop());
    }

    this.last.push(value);

    return this;
  }

  dequeue() {
    const len = this.last.length;

    for (let i = 0; i < len; i++) {
      this.first.push(this.last.pop());
    }

    this.first.pop();

    return this;
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }

    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.dequeue();
myQueue.enqueue('Joy');

console.log(myQueue);
