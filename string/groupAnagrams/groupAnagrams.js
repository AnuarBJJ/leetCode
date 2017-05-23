/*
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const sorted = new Map();
    strs.forEach(str => {
        const strSorted = str.split('').sort().join('');

        if(sorted.has(strSorted)){
            const arr = sorted.get(strSorted);
            arr.push(str)
            sorted.set(strSorted, arr);

        }else {
            sorted.set(strSorted, [str]);
        }
    });

    const res = [];

    sorted.forEach( arr => res.push(arr) );

    return res;
};
