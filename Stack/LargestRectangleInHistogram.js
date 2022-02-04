// Given an array of integers heights representing the histogram's bar height
// where the width of each bar is 1, return the area of the largest rectangle in the histogram.

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
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
};
