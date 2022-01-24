// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let carry = 0;
  let res;
  let point;
  let first = l1;
  let second = l2;
  if (!l1 && !l2) return null;
  while (first || second) {
    sum = (first ? first.val : 0) + (second ? second.val : 0) + carry;
    let r = sum % 10;
    let q = Math.floor(sum / 10);
    carry = q;
    if (!res) {
      res = new ListNode(r);
      point = res;
    } else {
      point.next = new ListNode(r);
      point = point.next;
    }
    first ? (first = first.next) : (first = null);
    second ? (second = second.next) : (second = null);
    // console.log(res)
  }
  if (carry !== 0) point.next = new ListNode(carry, null);
  return res;
};
