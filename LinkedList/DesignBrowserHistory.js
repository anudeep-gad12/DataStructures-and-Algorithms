// You have a browser of one tab where you start on the homepage and you can visit another url,
// get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

// BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
// void visit(string url) Visits url from the current page. It clears up all the forward history.
// string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x,
// you will return only x steps. Return the current url after moving back in history at most steps.
// string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x,
// you will forward only x steps. Return the current url after forwarding in history at most steps.

/**
 * @param {string} homepage
 */
let Node = function (val) {
  this.val = val;
  this.next = null;
  this.prev = null;
};

var BrowserHistory = function (homepage) {
  let newNode = new Node(homepage);
  this.head = newNode;
  this.tail = newNode;
  this.pointer = newNode;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  let newNode = new Node(url);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    this.pointer = newNode;
  } else {
    this.pointer.next = newNode;
    newNode.prev = this.pointer;
    this.pointer = newNode;
    this.pointer.next = null;
    this.tail = this.pointer;
  }
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let count = 0;
  while (count < steps) {
    if (!this.pointer.prev) break;
    this.pointer = this.pointer.prev;
    count++;
  }
  return this.pointer.val;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let count = 0;
  while (count < steps) {
    if (!this.pointer.next) break;
    this.pointer = this.pointer.next;
    count++;
  }
  return this.pointer.val;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
