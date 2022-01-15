// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

var searchMatrix = function (matrix, target) {
  let searchIndexArray = 0;
  for (let i = 0; i < matrix.length; i++) {
    let lastElement = matrix[i][matrix[i].length - 1];
    if (target === lastElement) return true;
    if (target < lastElement) {
      searchIndexArray = i;
      break;
    }
  }
  let start = 0;
  let end = matrix[searchIndexArray].length - 1;
  let subMatrixArray = matrix[searchIndexArray];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === subMatrixArray[mid]) return true;
    if (target < subMatrixArray[mid]) {
      end = mid - 1;
    }
    if (target > subMatrixArray[mid]) {
      start = mid + 1;
    }
  }
  return false;
};
