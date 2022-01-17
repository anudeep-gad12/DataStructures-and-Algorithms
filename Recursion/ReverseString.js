// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  if (s.length === 1) return s;
  return swap(left, right, s);
};

function swap(left, right, s) {
  if (left >= right) return s;
  [s[left], s[right]] = [s[right], s[left]];
  left++;
  right--;
  swap(left, right, s);
}
