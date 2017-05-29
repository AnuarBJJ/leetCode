/*
Given a sorted integer array where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"].
*/
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */

var getRange = function(beg, end){
    return beg === end ? beg.toString() : beg + "->" + end;
};

var findMissingRanges = function(nums, lower, upper) {
    const res = [];
    let prev = lower - 1;

    for(let i=0; i<=nums.length; i++){
        let current = i === nums.length ? upper + 1 : nums[i];
        if( current - prev >= 2 ){
            res.push( getRange(prev+1, current-1) );
        }
        prev = current;
    }
    return res;
};
