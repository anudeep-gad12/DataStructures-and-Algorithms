// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;
  while (i < nums.length && j < nums.length) {
    if (nums[i] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; //Swap
      i++;
      j++;
      continue;
    }
    i++;
  }
};
