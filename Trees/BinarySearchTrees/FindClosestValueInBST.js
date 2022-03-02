// Write a function that takes in a Binary Search Tree (BST) and a target integer
// value and returns the closest value to that target value contained in the BST.

// You can assume that there will only be one closest value.

// This is the class of the input tree. Do not edit.
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

function findClosestValueInBst(tree, target) {
  let min = 0;
  let diff = Number.MAX_VALUE;
  let difference = 0;
  while (tree) {
    difference = Math.abs(target - tree.value);
    if (difference < diff) {
      diff = difference;
      min = tree.value;
    }

    if (target < tree.value) {
      tree = tree.left;
    } else if (target > tree.value) {
      tree = tree.right;
    } else {
      break;
    }
  }
  return min;
}
