/*
Given two strings S and T, determine if they are both one edit distance apart.

Show Company Tags
Show Tags
Show Similar Problems
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    if(s.length > t.length){
      return isOneEditDistance(t, s);
    }

    if(t.length-s.length > 1){
        return false;
    }

    let index = 0;
    let shift = t.length - s.length;

    while(index < s.length && s.charAt(index) === t.charAt(index)){
        index ++;
    }
    // check if it is a case when the longer string differs only by the last character
    if(index===s.length){
      // if lengths of both strings are equal => they are 0 edits away => false
      return shift > 0;
    }
    // skip index of unequal chars if strings are equal size
    if(shift === 0){
        index ++;
    }
    // account for shift if strings are different size
    while(index<s.length && s.charAt(index) === t.charAt(index + shift)){
      index++;
    }
  // checks for same length strings
    return index === s.length;
};
