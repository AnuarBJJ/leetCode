/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var hash = {};
    if(s.length!==t.length){
        return false;
    }
    for(var i=0; i<s.length; i++){
        if(!hash[s[i]]){
            hash[s[i]] = 1;
        }else{
            hash[s[i]]++;
        }
    }
    for(var j=0; j<t.length; j++){
        if(!hash[t[j]]){
            return false;
        }else{
            hash[t[j]]--;
        }
    }

    return true;
};
