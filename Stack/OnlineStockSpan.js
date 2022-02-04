// Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

// The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.

// For example, if the price of a stock over the next 7 days were [100,80,60,70,60,75,85], then the stock spans would be [1,1,1,2,1,4,6].
// Implement the StockSpanner class:

// StockSpanner() Initializes the object of the class.
// int next(int price) Returns the span of the stock's price given that today's price is price.

var StockSpanner = function () {
  this.arr = [];
  this.stack = [];
  this.size = 0;
  this.top = 0;
  this.span = 0;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let flag = false;
  if (this.arr.length === 0) {
    this.arr.push(price);
    this.stack.push(this.size);
    this.size++;
    this.span = this.size;
    return this.span;
  }
  while (
    this.stack.length > 0 &&
    price >= this.arr[this.stack[this.stack.length - 1]]
  ) {
    flag = true;
    this.stack.pop();
    this.top = this.stack[this.stack.length - 1];
  }
  if (this.top === undefined) this.top = -1;
  this.arr.push(price);
  this.stack.push(this.size);
  if (!flag) {
    this.span = 1;
  } else {
    this.span = this.size - this.top;
  }
  this.size++;
  return this.span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
