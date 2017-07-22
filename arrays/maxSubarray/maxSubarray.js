/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSoFar = nums[0];
    let maxToHere = nums[0];

    for(let i=1; i<nums.length; i++){
        maxToHere = Math.max(maxToHere+nums[i], nums[i]);
        maxSoFar = Math.max(maxSoFar, maxToHere);
    }
    return maxSoFar;
};
