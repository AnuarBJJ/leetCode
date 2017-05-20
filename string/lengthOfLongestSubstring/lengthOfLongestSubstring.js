/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
    const seen = new Map();

    let first = 0;
    let longest = 0;
    let count = 0;

    for(let i in s){

      if(seen.has(s.charAt(i)) && seen.get(s.charAt(i)) >= first){
        first = parseInt(seen.get(s.charAt(i))) + 1;
        count = i - first;
      }
      count += 1;
      if(count>longest){
        longest = count;
      }
      seen.set(s.charAt(i), i);
    }
    return longest;
};
