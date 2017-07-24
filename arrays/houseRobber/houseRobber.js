/*
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them
is that adjacent houses have security system connected and it will automatically contact the police
if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house,
determine the maximum amount of money you can rob tonight without alerting the police.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length===0) return 0;
  let maxEndingHere = nums[0],
      maxEndingPrevious = 0,
      maxEndingTwoPrevious = 0;

  for (let i=1; i<nums.length; i++) {
    let tmp = maxEndingHere;
    maxEndingHere = Math.max(maxEndingPrevious, maxEndingTwoPrevious)+nums[i];
    maxEndingTwoPrevious = maxEndingPrevious;
    maxEndingPrevious = tmp;
  }
  return Math.max(maxEndingHere, maxEndingPrevious);
}
