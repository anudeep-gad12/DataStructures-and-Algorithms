// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Solution-1 Double pass
var removeNthFromEnd = function (head, n) {
  if (!head.next) return null;
  let len = length(head);
  let count = 0;
  let prev = null;
  let current = head;
  if (n === len) {
    head = head.next;
    return head;
  }
  while (current) {
    if (len - count === n) {
      prev.next = current.next;
    }
    count++;
    prev = current;
    current = current.next;
  }
  return head;
};

function length(head) {
  let temp = head;
  let counter = 0;
  while (temp) {
    counter++;
    temp = temp.next;
  }
  return counter;
}

// Solution-2 Simgle pass

var removeNthFromEnd = function (head, n) {
  if (!head.next) return null;
  let count = 0;
  let first = head;
  let second = head;
  while (count < n) {
    second = second.next;
    count++;
  }
  if (second === null) {
    head = head.next;
    return head;
  }
  while (second.next) {
    first = first.next;
    second = second.next;
  }
  if (n > 1) first.next = first.next.next;
  if (n === 1) first.next = second.next;
  return head;
};
