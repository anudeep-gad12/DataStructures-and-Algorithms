// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be
// planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
// return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

// Brute-Force
var canPlaceFlowers = function (flowerbed, n) {
  let prev = 0;
  let curr = prev + 1;
  let next = curr + 1;
  if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) return true;
  if (
    flowerbed.length === 2 &&
    flowerbed[0] === 0 &&
    flowerbed[1] === 0 &&
    n === 1
  )
    return true;
  while (next < flowerbed.length) {
    if (n === 0) break;
    if (prev === 0 && flowerbed[prev] === 0 && flowerbed[curr] === 0) {
      n--;
      flowerbed[prev] = 1;
    }
    if (
      next === flowerbed.length - 1 &&
      flowerbed[next] === 0 &&
      flowerbed[curr] === 0
    ) {
      if (n > 0) {
        n--;
        flowerbed[next] = 1;
      }
    }
    if (
      flowerbed[prev] === 0 &&
      flowerbed[curr] === 0 &&
      flowerbed[next] === 0
    ) {
      n--;
      flowerbed[curr] = 1;
    }
    prev++;
    curr++;
    next++;
  }
  if (n === 0) return true;
  return false;
};

// Optimized

var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i - 1] !== 1 &&
      flowerbed[i] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      flowerbed[i] = 1;
      count++;
    }
  }
  if (count >= n) return true;
  return false;
};
