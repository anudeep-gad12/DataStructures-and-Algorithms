// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

var isMonotonic = function (nums) {
  let count = 0;
  let i = 0;
  let j = i + 1;
  while (i < nums.length && j < nums.length) {
    if (nums[i] <= nums[j]) {
      count++;
    }
    i++;
    j++;
  }
  if (count === nums.length - 1) return true;

  i = 0;
  j = i + 1;
  count = 0;
  while (i < nums.length && j < nums.length) {
    if (nums[i] >= nums[j]) {
      count++;
    }
    i++;
    j++;
  }
  if (count === nums.length - 1) return true;
  return false;
};
