var sortArray = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    let noSwapCounter = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      } else {
        noSwapCounter++;
      }
    }
    if (noSwapCounter === nums.length - 1) return nums;
    noSwapCounter = 0;
  }
  return nums;
};
