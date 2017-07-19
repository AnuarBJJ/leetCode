/*
Given a sorted array and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let beg = 0;
    let end = nums.length - 1;

    while( beg <= end ){
        let middle = parseInt((beg+end)/2);

        if( nums[middle] === target ){
          return middle;
        } else if( nums[middle] > target ){
            end = middle - 1;
        } else {
            beg = middle + 1;
        }
    }

    return beg;
};

/*
// for some reason 8-0 the following solution works faster. Even though its runtime is O(n) and previous is O(logN)

var searchInsert = function(nums, target) {
    for(let i = 0, end = nums.length; i < end; i++) {
        if(nums[i] >= target) {
            return i;
        }
    }

    return nums.length;
};
*/
