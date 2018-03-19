/*
Given an array of n integers where n > 1, nums, return an array output such that output[i]
is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as
extra space for the purpose of space complexity analysis.)
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let prev = 1;
  const before = [1];
  const after = [];
  after[nums.length - 1] = 1;
  const res = [];

  for (let i = 1; i < nums.length; i += 1) {
    before.push(before[i - 1] * nums[i - 1]);
    after[nums.length - i - 1] = after[nums.length - i] * nums[nums.length - i];
  }

  before.forEach((num, index) => (res[index] = before[index] * after[index]));

  return res;
};
