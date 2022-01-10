// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

var sortColors = function (nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 2) {
      swap(nums, mid, high);
      high--;
    } else if (nums[mid] === 0) {
      swap(nums, mid, low);
      low++;
      mid++;
    } else {
      mid++;
    }
  }
};

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
