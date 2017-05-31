/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
     var start = 0, i=0, len=0;
     while(i<s.length) {
         var k = i, j=i, max;
         while(k<s.length-1 && s[k]===s[k+1]) {
             k++;
         }
         i=k+1;
         while(k<s.length-1 && j>0 && s[k+1]===s[j-1]) {
             k++;
             j--;
         }
         max = k-j+1;
         if (max > len) {
             len = max;
             start = j;
         }
     }
     return s.substr(start,len);
 };
