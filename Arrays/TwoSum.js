// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//!  Brute Force Solution  O(n^2) time
function twoSum(nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] + array[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
  return [];
}
// ! Optimized Solution   O(n) time

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
