/*
Total Accepted: 154929
Total Submissions: 411748
Difficulty: Medium
Contributor: LeetCode
Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [2, 3, 6, 7] and target 7,
A solution set is:
[
  [7],
  [2, 2, 3]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];

    const nums = candidates.sort(function(a, b){return a-b});

    const substractor = function(soFar, tt, start){
        let runner = start;
        while(nums[runner] <= tt && runner < nums.length){
            if(nums[runner] === tt){
                soFar.push(nums[runner]);
                res.push(soFar.slice());
            } else {
                soFar.push(nums[runner]);
                substractor(soFar.slice(), tt-nums[runner], runner);
                soFar.pop();
            }
          runner ++;
        }
    };

    substractor([], target, 0);

    return res;
};
