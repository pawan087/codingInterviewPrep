// Min or Max Heap with capacity constraint

class PriorityQueue {
  constructor(comparator = (a, b) => a > b, capacity = Infinity) {
    this._heap = [];
    this._capacity = capacity;
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this._heap[0];
  }

  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  _leftChild(i) {
    return i * 2 + 1;
  }

  _rightChild(i) {
    return i * 2 + 2;
  }

  _swap(i, j) {
    let tmp = this._heap[i];

    this._heap[i] = this._heap[j];
    this._heap[j] = tmp;

    return;
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(val) {
    this._heap.push(val);

    this._siftUp();

    if (this.size() > this._capacity) {
      this.pop();
    }

    return this.size();
  }

  _siftUp() {
    let idx = this.size() - 1;

    while (idx > 0 && this._compare(idx, this._parent(idx))) {
      this._swap(idx, this._parent(idx));

      idx = this._parent(idx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    let removedVal = this._heap.pop();

    this._siftDown();

    return removedVal;
  }

  _siftDown() {
    let idx = 0;

    while (
      (this._leftChild(idx) < this.size() &&
        this._compare(this._leftChild(idx), idx)) ||
      (this._rightChild(idx) < this.size() &&
        this._compare(this._rightChild(idx), idx))
    ) {
      let childIdx;

      if (this._rightChild(idx) > this.size()) {
        if (this._compare(this._rightChild(idx), this._leftChild(idx))) {
          childIdx = this._rightChild(idx);
        } else {
          childIdx = this._leftChild(idx);
        }
      } else {
        childIdx = this._leftChild(idx);
      }

      this._swap(childIdx, idx);

      idx = childIdx;
    }
  }
}

let minHeap = new PriorityQueue((a, b) => a < b, 2);
let input = [3, 2, 1, 5, 6, 4];

for (let num of input) {
  minHeap.push(num);
}

console.log("Before Pop: ", minHeap);
console.log(minHeap.pop());
console.log("After Pop: ", minHeap);
