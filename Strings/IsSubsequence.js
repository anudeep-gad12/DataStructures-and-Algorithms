// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

var isSubsequence = function (s, t) {
  s = s.split("");
  t = t.split("");
  let j = 0;
  for (const x of t) {
    if (s[j] === x) j++;
  }
  return j === s.length;
};
