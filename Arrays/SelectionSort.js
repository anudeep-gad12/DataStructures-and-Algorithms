var sortArray = function (nums) {
  let minIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < min) {
        minIndex = j;
        min = nums[j];
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
};
