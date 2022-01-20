var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  let midPoint = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, midPoint));
  let right = sortArray(nums.slice(midPoint));
  return mergeTwoArrays(left, right);
};

function mergeTwoArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}
