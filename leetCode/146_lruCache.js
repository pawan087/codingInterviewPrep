// LRU Cache

// https://leetcode.com/problems/lru-cache/

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.list = [];
  }

  put(key, value) {
    let obj = {};
    obj[key] = value;
    let bool = false;

    for (let i = 0; i < this.list.length; i++) {
      let curObj = this.list[i];

      for (let curKey in curObj) {
        if (curKey === String(key)) {
          bool = true;
          this.list[i][key] = value;

          let cur = this.list.slice(i, i + 1);
          let withoutCur = [
            ...this.list.slice(0, i),
            ...this.list.slice(i + 1),
          ];

          this.list = [...cur, ...withoutCur];
        }
      }
    }

    if (!bool) this.list.unshift(obj);

    if (this.list.length > this.capacity) {
      this.list.pop();
    }
  }

  get(key) {
    if (this.list.length === 0) {
      return -1;
    }

    for (let i = 0; i < this.list.length; i++) {
      let obj = this.list[i];
      let val = obj[key];

      if (val !== undefined) {
        let cur = this.list.slice(i, i + 1);
        let withoutCur = [...this.list.slice(0, i), ...this.list.slice(i + 1)];

        this.list = [...cur, ...withoutCur];

        return val;
      }
    }

    return -1;
  }
}
