class TrieNode {
  constructor() {
    this.end = false;
    this.keys = {};
  }
}

class Trie {
  constructor() {
    this.root = new Trie();
  }

  insert(word, node = this.root) {
    if (word.length === 0) {
      node.end = true;
      return;
    } else if (node.keys[word[0]] === undefined) {
      node.keys[word[0]] = new TrieNode();

      this.insert(word.substring(1), node.keys[word[0]]);
    } else {
      this.insert(word.substring(1), node.keys[word[0]]);
    }
  }

  search(word, node = this.root) {
    if (word.length === 0 && node.end === true) {
      return true;
    } else if (word.length === 0 && node.end === false) {
      return false;
    } else if (node.keys[word[0]] === undefined) {
      return false;
    } else {
      this.search(word.substring(1), node.keys[word[0]]);
    }
  }
}

/*

insert("apple");
search("dog"); // false

insert("dog");
search("dog"); // true

startsWith("app"); // true

search("app"); // false
insert("app");
search("app"); // true

*/
