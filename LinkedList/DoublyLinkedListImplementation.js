class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //  push node to the end of the list
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // remove node from the end of the list
  pop() {
    if (!this.head) return;
    let popped;
    if (this.length === 1) {
      popped = this.tail;
      this.head = null;
      this.tail = null;
    } else {
      popped = this.tail;
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }
  // rempve node from the start of the list
  shift() {
    if (!this.head) return;
    let popped = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = popped.next;
      this.head.prev = null;
      popped.next = null;
    }
    this.length--;
    return popped;
  }
  // add a node at the start of the list
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // get a node fromm the list
  get(index) {
    if (index < 0 || index >= this.length) return;
    if (!this.head) return;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    let mid = Math.floor(this.length / 2);
    let node;
    let count = 0;
    if (index <= mid) {
      node = this.head;
      while (count < index) {
        node = node.next;
        count++;
      }
      return node;
    } else if (index > mid) {
      node = this.tail;
      count = this.length--;
      while (count > index) {
        node = node.prev;
        count--;
      }
      return node;
    }
  }
  // set a value for a node in the list
  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.val = value;
    return true;
  }
  // insert a node in the list
  insert(index, value) {
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    let node = this.get(index);
    if (!node) return false;
    let newNode = new Node(value);
    newNode.next = node;
    node.prev.next = newNode;
    newNode.prev = node.prev;
    node.prev = newNode;
    this.length++;
    return true;
  }
  // delete a node from the list
  remove(index) {
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let node = this.get(index);
    if (!node) return;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
    this.length--;
    return node;
  }
}

const list = new DoublyLinkedList();
