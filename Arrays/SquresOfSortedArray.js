// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function (nums) {
  let res = new Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let resIndex = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) <= Math.abs(nums[right])) {
      res[resIndex] = nums[right] * nums[right];
      right--;
      resIndex--;
    } else {
      res[resIndex] = nums[left] * nums[left];
      left++;
      resIndex--;
    }
  }
  return res;
};
