/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.
*/
/**
 * @param {number} n
 * @return {number}
 */
let res = [0, 1, 2];

var climbStairs = function(n) {
    if(n<res.length){
        return res[n]
    }
    res[n] = climbStairs(n-2) + climbStairs(n-1);
    return res[n];
};
