/**
 * Given a sorted integer array without duplicates, return the summary of its ranges.

Example 1:
Input: [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Example 2:
Input: [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let start = 0;
  let end = 1;
  const result = [];

  while (end <= nums.length) {
    if (nums[end] - 1 === nums[end - 1]) {
      end += 1;
    } else {
      if (start + 1 === end) {
        result.push(`${nums[start]}`);
      } else {
        result.push(`${nums[start]}->${nums[end - 1]}`);
      }
      start = end;
      end += 1;
    }
  }
  return result;
};
