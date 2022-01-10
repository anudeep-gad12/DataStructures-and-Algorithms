// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

var maxSubArray = function (nums) {
  let sum = 0;
  let max = -Number.MAX_VALUE;
  for (const x of nums) {
    sum += x;
    sum = Math.max(sum, x);
    max = Math.max(sum, max);
  }
  return max;
};
