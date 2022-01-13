// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

var maxSlidingWindow = function (nums, k) {
  let i = 0;
  let j = i + 1;
  let max = nums[i];
  let maxArray = [];
  if (k === 1) {
    return nums;
  }
  while (i < nums.length && j < nums.length) {
    if (j - i + 1 < k) {
      max = Math.max(max, nums[j]);
      j++;
      continue;
    }
    if (j - i + 1 === k) {
      max = Math.max(max, nums[j]);
      maxArray.push(max);
      if (max === nums[i]) {
        i++;
        j = i + 1;
        max = nums[i];
      } else {
        i++;
        j++;
      }
    }
  }
  return maxArray;
};
