/*

Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    const interim = new Map();
    nums.forEach( num => {
        const count = interim.has(num) ? interim.get(num) + 1 : 1;
        interim.set(num, count);
    });

    const countArray = [];

    interim.forEach( (count, num) => {
        const arrayOfCounts = countArray[count] ? countArray[count] : [];
        arrayOfCounts.push(num);
        countArray[count] = arrayOfCounts;
    });

    const res = [];

    let runner = countArray.length - 1;

    while( res.length < k ){
        let maxCount = countArray[runner] ? countArray[runner] : null;

        while(maxCount && maxCount.length > 0){
            res.push(maxCount.pop());
        }
        runner --;
    }

    return res;
};
