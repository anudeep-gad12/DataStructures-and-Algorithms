class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  // push a new Node at the end of the list

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // remove a node from end of the list

  pop() {
    if (!this.head) return;
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // remove a node from start of the list
  shift() {
    if (!this.head) return;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return oldHead;
  }

  //  add a node to start of the list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //  get a node from the list by its position
  get(index) {
    if (index >= 0 && index < this.length) {
      let counter = 0;
      let nodeAtIndex = this.head;
      while (counter < index) {
        nodeAtIndex = nodeAtIndex.next;
        counter++;
      }
      return nodeAtIndex;
    }
    return null;
  }
  // change value of a node in the list
  set(index, val) {
    let getNode = this.get(index);
    if (!getNode) return null;
    getNode.val = val;
    return list;
  }
  // insert a node in the list
  insert(index, val) {
    if (index < 0 || index > this.length) return;
    if (index === 0) {
      this.unshift(val);
      return true;
    } else if (index === this.length) {
      this.push(val);
      return true;
    } else {
      let newNode = new Node(val);
      let prevIndex = this.get(index - 1);
      let currentNode = this.get(index);
      prevIndex.next = newNode;
      newNode.next = currentNode;
      this.length++;
      return true;
    }
  }
  //  remvove a node from the list
  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) {
      this.shift();
      return true;
    } else if (index === this.length - 1) {
      this.pop();
      return true;
    } else {
      let prev = this.get(index - 1);
      let current = this.get(index);
      prev.next = current.next;
      this.length--;
      return true;
    }
  }

  // reverse list
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = node;
    let prev = null;
    while (next) {
      next = next.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
