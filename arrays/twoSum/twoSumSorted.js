/* Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

*/
/* slow
var twoSum = function(numbers, target) {
    const sups = new Map();

    for(let i in numbers){
        if( sups.has(target - numbers[i]) ){
            return [parseInt(sups.get(target - numbers[i])) +1 , parseInt(i) + 1];
        } else {
            sups.set(numbers[i], i);
        }
    }
};
*/

var twoSum = function(numbers, target) {
    // if (target === null || numbers.length < 2) return indice;
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        const v = numbers[left] + numbers[right];
        if (v === target) {
            break;
        } else if (v > target) {
            right --;
        } else {
            left ++;
        }
    }
    return [left + 1, right + 1];
};
