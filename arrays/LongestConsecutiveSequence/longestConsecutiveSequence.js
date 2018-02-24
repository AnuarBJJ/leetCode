/**
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
  const seen = new Set(nums);

  let max = 0;

  seen.forEach(num => {
    if (!seen.has(num - 1)) {
      let current = num;
      let counter = 1;

      while (seen.has(++current)) {
        counter += 1;
      }

      max = Math.max(max, counter);
    }
  });

  return max;
};
