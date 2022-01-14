// Given an array of positive integers nums and a positive integer target,
// return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr]
// of which the  sum is greater than or equal to target. If there is no such subarray, return 0 instead.

var minSubArrayLen = function (target, nums) {
  let i = 0;
  let j = 0;
  let min = 100000;
  let sum = 0;
  let count = 0;
  while (j < nums.length) {
    sum += nums[j];
    if (sum >= target) {
      count = j - i + 1;
      min = Math.min(min, count);
    }
    while (sum >= target) {
      sum -= nums[i];
      count--;
      i++;
      if (sum >= target) {
        min = Math.min(min, count);
      }
    }
    j++;
  }
  return min === 100000 ? 0 : min;
};
