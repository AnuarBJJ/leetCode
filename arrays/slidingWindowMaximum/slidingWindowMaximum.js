/**
 * Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Therefore, return the max sliding window as [3,3,5,5,6,7].

Note: 
You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.

Follow up:
Could you solve it in linear time?
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function(nums, k) {
  if (k === 0) {
    return [];
  }
  const result = [];
  const queue = [];
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < k; i += 1) {
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }
    queue.push(i);
  }
  result.push(nums[queue[0]]);

  for (let j = k; j < nums.length; j += 1) {
    if (queue[0] === j - k) {
      queue.shift();
    }
    while (queue.length && nums[queue[queue.length - 1]] < nums[j]) {
      queue.pop();
    }
    queue.push(j);
    result.push(nums[queue[0]]);
  }

  return result;
};
