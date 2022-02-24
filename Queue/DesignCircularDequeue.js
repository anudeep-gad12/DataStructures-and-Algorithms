// Design your implementation of the circular double-ended queue (deque).

// Implement the MyCircularDeque class:

// MyCircularDeque(int k) Initializes the deque with a maximum size of k.
// boolean insertFront() Adds an item at the front of Deque. Returns true if the operation is successful, or false otherwise.
// boolean insertLast() Adds an item at the rear of Deque. Returns true if the operation is successful, or false otherwise.
// boolean deleteFront() Deletes an item from the front of Deque. Returns true if the operation is successful, or false otherwise.
// boolean deleteLast() Deletes an item from the rear of Deque. Returns true if the operation is successful, or false otherwise.
// int getFront() Returns the front item from the Deque. Returns -1 if the deque is empty.
// int getRear() Returns the last item from Deque. Returns -1 if the deque is empty.
// boolean isEmpty() Returns true if the deque is empty, or false otherwise.
// boolean isFull() Returns true if the deque is full, or false otherwise.

/**
 * @param {number} k
 */

let Node = function (val) {
  this.val = val;
  this.prev = null;
  this.next = null;
};
var MyCircularDeque = function (k) {
  this.first = null;
  this.last = null;
  this.size = k;
  this.presentSize = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  let newNode = new Node(value);
  if (!this.first) {
    this.first = newNode;
    this.last = newNode;
    this.presentSize++;
    return true;
  }
  if (this.presentSize < this.size) {
    this.first.prev = newNode;
    newNode.next = this.first;
    this.first = newNode;
  }
  if (this.presentSize === this.size) {
    this.last.next = this.first;
    this.first.prev = this.last;
    return false;
  }
  this.presentSize++;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  let newNode = new Node(value);
  if (!this.first) {
    this.first = newNode;
    this.last = newNode;
    this.presentSize++;
    return true;
  }
  if (this.presentSize < this.size) {
    this.last.next = newNode;
    newNode.prev = this.last;
    this.last = newNode;
  }
  if (this.presentSize === this.size) {
    this.last.next = this.first;
    this.first.prev = this.last;
    return false;
  }
  this.presentSize++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (!this.first) return false;
  if (this.presentSize === 1) {
    this.first = null;
    this.last = null;
    this.presentSize--;
    return true;
  }
  this.first = this.first.next;
  this.first.prev = null;
  this.presentSize--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (!this.first) return false;
  if (this.presentSize === 1) {
    this.first = null;
    this.last = null;
    this.presentSize--;
    return true;
  }
  this.last = this.last.prev;
  this.last.next = null;
  this.presentSize--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.presentSize > 0) return this.first.val;
  return -1;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.presentSize > 0) return this.last.val;
  return -1;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  if (this.presentSize === 0) return true;
  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  if (this.presentSize === this.size) return true;
  return false;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
