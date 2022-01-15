// Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

var searchMatrix = function (matrix, target) {
  let searchIndexArray = [];
  for (let i = 0; i < matrix.length; i++) {
    let lastElement = matrix[i][matrix[i].length - 1];
    if (target === lastElement) return true;
    if (target < lastElement) {
      searchIndexArray.push(i);
    }
  }
  for (let i = 0; i < searchIndexArray.length; i++) {
    let start = 0;
    let end = matrix[searchIndexArray[i]].length - 1;
    let subMatrixArray = matrix[searchIndexArray[i]];
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
  }
  return false;
};
