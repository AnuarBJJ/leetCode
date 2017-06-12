/*
Given an array of size n, find the majority element.
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let countHash = {};
    const target = nums.length/2;
    for(let i=0; i<nums.length; i++){
        if( countHash[nums[i]] ){
            countHash[nums[i]] ++;
            if(countHash[nums[i]] > target){
                return nums[i];
            }
        } else {
            countHash[nums[i]] = 1;
        }
    }
    return nums[0];
};

/* fastest solution

var majorityElement = function(nums) {
    var mj = 0;
    var cnt = 1;

    for(var i = 1; i < nums.length; i++){
        if(nums[i] === nums[mj]){
            cnt++;
        } else {
            cnt--;
        }

        if(cnt === 0){
            mj = i;
            cnt = 1;
        }
    }

    return nums[mj];

};
*/
