// LRU Cache

// https://leetcode.com/problems/lru-cache/

class LRUCacheSlow {
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

class LRUCacheUsingMap {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (this.cache.has(key) === false) {
      return -1;
    }

    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);

    return this.cache.get(key);
  }

  put(key, value) {
    if (this.cache.has(key) === true) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value); // keys().next().value returns first item's key
    }
  }
}
