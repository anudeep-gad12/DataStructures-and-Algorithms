// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
  this.topElement;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue1.push(x);
  this.topElement = x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue1.length > 1) {
    this.topElement = this.queue1.shift();
    this.queue2.push(this.topElement);
  }
  let popped = this.queue1.shift();
  [this.queue1, this.queue2] = [this.queue2, this.queue1];
  return popped;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.topElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !(this.queue1.length || this.queue2.length);
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
