/*

Given a string, find the length of the longest substring T that contains at most 2 distinct characters.

For example, Given s = “eceba”,

T is "ece" which its length is 3.

Hash Table Two Pointers String
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let r = 0;
    let j = -1;
    let longest = 0;
    for(let i in s){
        if(s.charAt(i) === s.charAt(i-1)){
            continue;
        }
        if(j>=0 && s.charAt(i)!==s.charAt(j)){
            longest = Math.max(longest, i-r);
            r = j+1;
        }
        j = i - 1;
    }

    return Math.max(longest, s.length-r);
};

/*
General case for K unique characters
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s) {
    const limitDistinct = 2;

    let r = 0;
    let numDistinct = 0;
    let longest = 0;
    const count = [];

    for(let j=0; j<256; j++){
        count.push(0);
    }

    for(let i in s){
        if(count[s.charCodeAt(i)] === 0){
            numDistinct ++;
            count[s.charCodeAt(i)] === 0;
        }
        count[s.charCodeAt(i)] ++;
        while(numDistinct > limitDistinct){
            count[s.charCodeAt(r)] --;
            if(count[s.charCodeAt(r)] === 0){
                numDistinct --;
            }
            r++;
        }
        longest = Math.max(longest, i - r + 1);
    }

    return longest;
};
