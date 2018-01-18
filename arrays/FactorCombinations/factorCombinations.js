/**
 * Numbers can be regarded as product of its factors. For example,

8 = 2 x 2 x 2;
  = 2 x 4.
Write a function that takes an integer n and return all possible combinations of its factors.

Note: 
You may assume that n is always positive.
Factors should be greater than 1 and less than n.
Examples: 
input: 1
output: 
[]
input: 37
output: 
[]
input: 12
output:
[
  [2, 6],
  [2, 2, 3],
  [3, 4]
]
input: 32
output:
[
  [2, 16],
  [2, 2, 8],
  [2, 2, 2, 4],
  [2, 2, 2, 2, 2],
  [2, 4, 4],
  [4, 8]
]
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
  const result = [];
  const temp = [];

  (function recursive(num, start) {
    if (num <= 1 && temp.length > 1) {
      result.push([...temp]);
    } else {
      for (let i = start; i <= num; i += 1) {
        if (num % i === 0) {
          temp.push(i);
          recursive(num / i, i);
          temp.pop();
        }
      }
    }
  })(n, 2);

  return result;
};
