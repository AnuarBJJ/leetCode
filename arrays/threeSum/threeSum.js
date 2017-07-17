/*
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

// slow solution


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
var twoSum = function(arr, target){
  const numbers = {};
  const res = [];

  for(let n=0; n<arr.length; n++){
    if( numbers[target-arr[n]] ){
      res.push( [target-arr[n], arr[n]] );
    } else {
      numbers[arr[n]] = true;
    }
  }


  return res;
}

var threeSum = function(nums) {
    const miniArr = nums.slice();
    const result = [];
    const res = {};

    for(let i=nums.length-1; i>=0; i--){
      let popped = miniArr.pop();
      let twoSumResult = twoSum( miniArr, - popped );

      if( twoSumResult.length > 0 ){
        twoSumResult.forEach( a => {
            a[2] = popped;
            result.push(a);
        })
      }
    }

  return result;
};
*/


var threeSum = function( nums ){
  nums.sort( (a,b) => a-b );
  const res = [];

  for(let i=0; i<nums.length-1; i++){
    let target = - nums[i]
    let beg = i+1;
    let end = nums.length-1;

    while( beg < end){
      if( nums[beg] + nums[end] < target ){
        beg++;
      } else if( nums[beg] + nums[end] > target  ){
        end--;
      } else {
        res.push( [-target, nums[beg], nums[end]] );
        while( nums[beg] === nums[beg+1] ){
          beg++;
        }
        while( nums[end] === nums[end-1] ){
          end--;
        }
        beg++;
        end--;
      }
    }
    while(nums[i] === nums[i+1]){
      i++;
    }

  }

  return res;
}
