// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Using recursion
var subsets = function (nums) {
  let i = nums.length - 1;
  return findSubsets(nums, i);
};

function findSubsets(array, index) {
  if (index < 0) return [[]];
  let lastIndexNum = array[index];
  let powerSet = findSubsets(array, index - 1);
  let currentSubset = [...powerSet];
  for (let i = 0; i < currentSubset.length; i++) {
    powerSet.push(powerSet[i].concat(lastIndexNum));
  }
  return powerSet;
}

// Iterative

var subsets = function (nums) {
  let subset = [[]];
  for (let i = 0; i < nums.length; i++) {
    let currentSubset = [...subset];
    for (let j = 0; j < currentSubset.length; j++) {
      subset.push(currentSubset[j].concat(nums[i]));
    }
  }
  return subset;
};
