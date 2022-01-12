// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Using extra space
var findDuplicate = function (nums) {
  let obj = {};
  for (const x of nums) {
    if (obj[x]) {
      return x;
    } else {
      obj[x] = true;
    }
  }
};

// Without extra space

var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i])] > 0) {
      nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])];
    } else {
      return Math.abs(nums[i]);
    }
  }
};
