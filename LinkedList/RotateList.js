// Given the head of a linked list, rotate the list to the right by k places.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0) return head;
  if (!head) return null;
  if (!head.next) return head;
  let node = head;
  let len = length(node);
  if (k === len) return head;
  if (k < len) return rotate(node, k, len);
  if (k > len) {
    let num = k % len;
    if (num === 0) return head;
    return rotate(node, num, len);
  }
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

function rotate(node, num, len) {
  let start = node;
  let tail;
  let prev = null;
  let mid = node;
  let count = 0;
  while (count < len - num) {
    prev = mid;
    mid = mid.next;
    count++;
  }
  prev.next = null;
  let end = mid;
  while (end.next) {
    end = end.next;
  }
  end.next = start;
  return mid;
}
