/**
 * Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 * @param {number} n
 * @return {boolean}
 */

function numToArr(num) {
    return num.toString().split('').map(char => parseInt(char));
}

var isHappy = function (n) {
    const arr = numToArr;
    const alreadySeen = {};

    return (function recursive(n) {

        if (n === 1) {
            return true;
        } else if (alreadySeen.hasOwnProperty(n)) {
            return false;
        } else {
            alreadySeen[n] = true;
            const newNum = numToArr(n).reduce((soFar, num) => soFar + num ** 2, 0);
            return recursive(newNum);
        }
    })(n)

};