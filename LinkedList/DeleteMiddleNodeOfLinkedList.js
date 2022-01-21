// You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  let count = 0;
  let mid = Math.floor(length(head) / 2);
  let prev = null;
  let current = head;
  if (mid === 0) return null;
  while (count < mid) {
    count++;
    prev = current;
    current = current.next;
  }
  prev.next = current.next;
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
