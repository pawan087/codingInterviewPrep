// Min or Max Heap

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    // 'a > b' --> Max Heap, 'a < b' --> Min Heap
    this._heap = [];
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

    return this.size();
  }

  _siftUp() {
    let idx = this.size() - 1; // Start @ end of array

    while (idx > 0 && this._compare(idx, this._parent(idx))) {
      // The comparator will check if smaller or bigger than parent
      // while the comparator value is true the loop continues
      this._swap(idx, this._parent(idx));

      idx = this._parent(idx);
      // Continue iterating moving idx to where parent idx previously was
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
      (this._leftChild(idx) < this.size() && // Make sure leftChild is a truthy value because undefined cannot be compared
        this._compare(this._leftChild(idx), idx)) || // Since 'or' if either leftChild or rightChild is greater than cur
      (this._rightChild(idx) < this.size() && // Make sure rightChild is a truthy value because undefined cannot be compared
        this._compare(this._rightChild(idx), idx)) // Since 'or' if either leftChild or rightChild is greater than cur
    ) {
      let childIdx;

      if (this._rightChild(idx) > this.size()) {
        // If there is a right child then by default there is a left child
        // Compare the children
        if (this._compare(this._rightChild(idx), this._leftChild(idx))) {
          // Comparator will return true when rightChild is greater/smaller
          // Choose rightChild
          childIdx = this._rightChild(idx);
        } else {
          // Choose leftChild
          childIdx = this._leftChild(idx);
        }
      } else {
        // Since no rightChild, choose leftChild by default
        childIdx = this._leftChild(idx);
      }

      this._swap(childIdx, idx);

      idx = childIdx;
    }
  }
}

let maxHeap = new PriorityQueue((a, b) => a >= b); // Max Heap

let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];

for (let num of arr) maxHeap.push(num);

let res;

for (let i = 1; i <= 4; i++) {
  res = maxHeap.pop();
  console.log(res);
}

// console.log(res);
