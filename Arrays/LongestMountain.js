// You may recall that an array arr is a mountain array if and only if:

// arr.length >= 3
// There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

var longestMountain = function (nums) {
  let mountain = false;
  let descent = false;
  let i = 0;
  let j = i + 1;
  let count = 0;
  let max = 0;
  while (i < nums.length && j < nums.length) {
    if (nums[i] > nums[j] && !mountain) {
      i++;
      j++;
      continue;
    }
    if (nums[i] < nums[j] && descent) {
      max = Math.max(max, count + 1);
      count = 0;
      mountain = false;
      descent = false;
    }
    if (nums[i] < nums[j]) {
      mountain = true;
      count++;
    } else if (nums[i] > nums[j] && mountain) {
      count++;
      descent = true;
    } else if (nums[i] === nums[j] && descent) {
      max = Math.max(max, count + 1);
      count = 0;
      mountain = false;
      descent = false;
    } else {
      count = 0;
      mountain = false;
      descent = false;
    }
    i++;
    j++;
  }
  if (descent) max = Math.max(max, count + 1);
  if (max > 0) return max;
  return max;
};
