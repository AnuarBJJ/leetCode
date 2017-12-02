/**
 * Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

Example 1:
Input:s1 = "ab" s2 = "eidbaooo"
Output:True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:
Input:s1= "ab" s2 = "eidboaoo"
Output: False
Note:
The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


const areEqual = function (arr1, arr2) {
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


var checkInclusion = function (s1, s2) {
    if (s2.length < s1.length) {
        return false;
    }
    const map1 = [];
    const map2 = [];

    for (let c = 0; c < 26; c += 1) {
        map1[c] = 0;
        map2[c] = 0;
    }

    for (let i = 0; i < s1.length; i += 1) {
        let index1 = s1.charCodeAt(i) - 'a'.charCodeAt(0);
        let index2 = s2.charCodeAt(i) - 'a'.charCodeAt(0);
        map1[index1] = !!map1[index1] ? map1[index1] + 1 : 1;
        map2[index2] = !!map2[index2] ? map2[index2] + 1 : 1;
    }
    if (areEqual(map1, map2)) {
        return true;
    }


    for (let j = 0; j < s2.length - s1.length; j += 1) {

        let nextIndex = s2.charCodeAt(j + s1.length) - 'a'.charCodeAt(0);
        let lastIndex = s2.charCodeAt(j) - 'a'.charCodeAt(0);

        map2[nextIndex] = !!map2[nextIndex] ? (map2[nextIndex] + 1) : 1;
        map2[lastIndex] = (map2[lastIndex] > 1) ? map2[lastIndex] - 1 : 0;
        if (areEqual(map1, map2)) {
            return true;
        }

    }
    return false;

};