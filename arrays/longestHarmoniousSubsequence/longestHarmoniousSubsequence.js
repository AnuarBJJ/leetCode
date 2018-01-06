/**
 * @param {number[]} nums
 * @return {number}
 * We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.

Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

Example 1:
Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
Note: The length of the input array will not exceed 20,000.
 */
var findLHS = function(nums) {
  if (nums.length < 1) {
    return 0;
  }

  let current;
  let count = 0;
  let max = 0;
  let valid = false;
  let indexNext;

  const sorted = nums.sort((a, b) => a - b);
  current = sorted[0];

  for (let i = 0; i < sorted.length; i += 1) {
    if (current === sorted[i]) {
      count += 1;
    } else if (current === sorted[i] - 1) {
      count += 1;
      if (!valid) {
        valid = true;
        indexNext = i;
      }
    } else {
      if (valid && count > max) {
        max = count;
      }
      if (sorted[i] - sorted[indexNext] === 1) {
        count = i - indexNext + 1;
        current = sorted[indexNext];
        indexNext = i;
        valid = true;
      } else {
        count = 1;
        current = sorted[i];
        valid = false;
      }
    }
  }
  if (valid && count > max) max = count;
  return max;
};
/*
BETTER solution
var findLHS = function(nums) {
  const map = new Map();
  for (let item of nums) {
    map.set(item, (map.has(item) ? map.get(item) : 0) + 1);
  }
  let result = 0;
  for (let key of map.keys()) {
    if (map.has(key + 1)) {
      result = Math.max(result, map.get(key + 1) + map.get(key));
    }
  }
  return result;
};
*/
