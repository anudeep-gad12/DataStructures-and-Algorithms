// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached
// again by continuously following the next pointer. Internally, pos is used to denote the index of the
// node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Solution-1
var hasCycle = function (head) {
  let map = new Map();
  let count = 0;
  let node = head;
  while (head) {
    if (map.has(node)) {
      return true;
    } else {
      map.set(node, count);
      count++;
      if (!node) return false;
      node = node.next;
    }
  }
  return false;
};

// Solution-2

var hasCycle = function (head) {
  let node = head;
  while (node) {
    if (node && node.visited) return true;
    if (!node) return false;
    node.visited = true;
    node = node.next;
  }
  return false;
};
