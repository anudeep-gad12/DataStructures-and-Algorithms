var sortArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j + 1] < nums[j]) {
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
      } else {
        break;
      }
    }
  }
  return nums;
};
