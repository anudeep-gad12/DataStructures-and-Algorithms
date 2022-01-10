// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  let sum = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let fixed = i;
    let left = fixed + 1;
    let right = nums.length - 1;
    while (left < right) {
      sum = nums[fixed] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[fixed], nums[left], nums[right]]);
        left++;
        right--;

        //  Skips duplicates
        while (nums[left - 1] === nums[left] && left < right) {
          left++;
        }
        while (nums[right + 1] === nums[right] && left < right) {
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      }
    }

    // Skips duplicates
    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return res;
};
