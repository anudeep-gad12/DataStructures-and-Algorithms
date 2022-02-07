// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  let rectangles = [];
  let rectangle = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        rectangle.push(Number(matrix[i][j]));
        continue;
      } else {
        if (Number(matrix[i][j])) {
          rectangle[j] += Number(matrix[i][j]);
        } else {
          rectangle[j] = 0;
        }
      }
    }

    rectangles.push([...rectangle]);
  }
  let area = 0;
  let maxArea = 0;
  for (let i = 0; i < rectangles.length; i++) {
    area = largestRectangleArea(rectangles[i]);
    maxArea = Math.max(area, maxArea);
  }
  return maxArea;
};

function largestRectangleArea(heights) {
  let stack = [];
  let left = [];
  let right = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length === 0) {
      left.push(-1);
    } else {
      left.push(stack[stack.length - 1]);
    }
    stack.push(i);
  }
  stack = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    while (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length === 0) {
      right.push(heights.length);
    } else {
      right.push(stack[stack.length - 1]);
    }
    stack.push(i);
  }
  right.reverse();

  for (let i = 0; i < heights.length; i++) {
    let area = heights[i] * (right[i] - left[i] - 1);
    maxArea = Math.max(area, maxArea);
  }
  return maxArea;
}
