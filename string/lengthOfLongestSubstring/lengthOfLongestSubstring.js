/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
    const seen = [];

    let longest = 0;
    let last = 0;

    for(let i in s){
        while(seen[s.charCodeAt(i)]){
            seen[s.charCodeAt(last)] = false;
            last++;
        }
        seen[s.charCodeAt(i)] = true;
        longest = Math.max(i-last+1, longest);
    }
    return longest;
};
