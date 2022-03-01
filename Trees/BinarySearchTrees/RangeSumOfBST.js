// Given the root node of a binary search tree and two integers low and high,
// return the sum of values of all nodes with a value in the inclusive range [low, high].

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
//  DFS- Preorder
var rangeSumBST = function (root, low, high) {
  let current = root;
  let sum = 0;
  const findSum = (current) => {
    if (current.val >= low && current.val <= high) sum += current.val;
    if (current.left) findSum(current.left);
    if (current.right) findSum(current.right);
    return sum;
  };
  return findSum(current);
};
