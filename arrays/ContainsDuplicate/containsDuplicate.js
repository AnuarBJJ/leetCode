/**
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array,
 * and it should return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const Seen = new Set();

  return nums.some(num => {
    if (Seen.has(num)) {
      return true;
    } else {
      Seen.add(num);
      return false;
    }
  });
};
