// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

/**
 * @param {number} capacity
 */

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
var LRUCache = function (capacity) {
  this.head = new Node("dummyHeadKey", "dummyHeadValue");
  this.tail = new Node("dummyTailKey", "dummyTailValue");
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.size = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;
  let temp = this.cache.get(key);
  let prevElement = temp.prev;
  let nextElement = temp.next;
  prevElement.next = nextElement;
  nextElement.prev = prevElement;

  temp.next = this.head.next;
  this.head.next.prev = temp;
  temp.prev = this.head;
  this.head.next = temp;

  return temp.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    let node = this.cache.get(key);
    node.val = value;
    this.cache.set(key, node);
    let prevElement = node.prev;
    let nextElement = node.next;
    prevElement.next = nextElement;
    nextElement.prev = prevElement;

    node.next = this.head.next;
    this.head.next.prev = node;
    node.prev = this.head;
    this.head.next = node;
    return;
  }
  if (this.cache.size < this.size) {
    let newNode = new Node(key, value);
    newNode.next = this.head.next;
    this.head.next.prev = newNode;
    newNode.prev = this.head;
    this.head.next = newNode;
    this.cache.set(key, newNode);
    return;
  }
  if (this.cache.size === this.size) {
    let lru = this.tail.prev;
    lru.prev.next = this.tail;
    this.tail.prev = lru.prev;
    this.cache.delete(lru.key);
    let newNode = new Node(key, value);
    newNode.next = this.head.next;
    this.head.next.prev = newNode;
    newNode.prev = this.head;
    this.head.next = newNode;
    this.cache.set(key, newNode);
    return;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
