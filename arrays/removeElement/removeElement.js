/*
Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:
Given input array nums = [3,2,2,3], val = 3

Your function should return length = 2, with the first two elements of nums being 2.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let lastNonTarget = nums.length - 1;
    let count = 0;
    while(nums[lastNonTarget] === val ){
        lastNonTarget --;
        count ++;
    }

    var swop = function(a, b){
      let temp = nums[a];
      nums[a] = nums[b];
      nums[b] = temp;
    }

    for(let i=lastNonTarget; i>=0; i--){
        if( nums[i] === val ){
            swop(i, lastNonTarget);
            lastNonTarget --;
            count++;
        }
    }
    return nums.length - count;
};
