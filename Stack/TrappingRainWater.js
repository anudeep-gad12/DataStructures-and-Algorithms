// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let stack = [0];
  let left = [0];
  let right = [0];
  let flag = false;
  let area = 0;
  for (let i = 1; i < height.length; i++) {
    while (stack.length > 0 && height[i - 1] > stack[stack.length - 1]) {
      stack.pop();
      flag = true;
    }
    if (flag) {
      stack.push(height[i - 1]);
      flag = false;
    }
    left.push(stack[stack.length - 1]);
  }
  stack = [0];
  flag = false;
  for (let i = height.length - 2; i >= 0; i--) {
    while (stack.length > 0 && height[i + 1] > stack[stack.length - 1]) {
      stack.pop();
      flag = true;
    }
    if (flag) {
      stack.push(height[i + 1]);
      flag = false;
    }
    right.push(stack[stack.length - 1]);
  }
  right.reverse();
  let waterHeight = 0;
  for (let i = 0; i < height.length; i++) {
    waterHeight = Math.min(left[i], right[i]) - height[i];
    if (waterHeight < 0) waterHeight = 0;
    area += waterHeight;
  }
  return area;
};
