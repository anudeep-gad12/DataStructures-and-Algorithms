// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.

var MinStack = function () {
  this.stack = [];
  this.peek = null;
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.peek === null || this.peek === undefined) {
    this.stack.push(val);
    this.minStack.push(val);
    this.peek = val;
    return;
  }
  this.stack.push(val);
  this.peek = val;
  if (val <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let popped = this.stack.pop();
  if (popped === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
  this.peek = this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.peek;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
