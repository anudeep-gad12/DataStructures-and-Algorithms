// A critical point in a linked list is defined as either a local maxima or a local minima.

// A node is a local maxima if the current node has a value strictly greater than the previous node and the next node.

// A node is a local minima if the current node has a value strictly smaller than the previous node and the next node.

// Note that a node can only be a local maxima/minima if there exists both a previous node and a next node.

// Given a linked list head, return an array of length 2 containing [minDistance, maxDistance] where minDistance is the minimum distance
// between any two distinct critical points and maxDistance is the maximum distance between any two distinct critical points.
// If there are fewer than two critical points, return [-1, -1].

var nodesBetweenCriticalPoints = function (head) {
  let index = [];
  let res = [0, 0];
  let count = 0;
  let prev = head;
  let current = prev.next;
  let next = current.next;
  let maxMinCount = 0;
  while (next) {
    count++;
    if (current.val < next.val && current.val < prev.val) {
      index.push(count);
      maxMinCount++;
    } else if (current.val > next.val && current.val > prev.val) {
      index.push(count);
      maxMinCount++;
    }

    prev = current;
    current = next;
    next = next.next;
  }
  if (maxMinCount < 2) return [-1, -1];
  res[1] = index[index.length - 1] - index[0];
  let i = 0;
  let j = 1;
  let min = index[j] - index[i];
  while (j < index.length - 1) {
    i++;
    j++;
    let currVal = index[j] - index[i];
    min = Math.min(min, currVal);
  }
  res[0] = min;
  return res;
};
