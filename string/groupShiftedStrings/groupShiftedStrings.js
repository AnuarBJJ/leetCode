/**
 * Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

"abc" -> "bcd" -> ... -> "xyz"
Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

For example, given: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"], 
A solution is:

[
  ["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
]
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  const resultMap = new Map();
  const result = [];

  strings.forEach(candidate => {
    let pattern = candidate.split('').reduce((soFar, char) => {
      const current = char.charCodeAt(0) - candidate.charCodeAt(0);
      soFar += current < 0 ? 26 + current : current;
      return soFar + ',';
    }, '');

    if (resultMap.has(pattern)) {
      const arr = resultMap.get(pattern);
      arr.push(candidate);
      resultMap.set(pattern, arr);
    } else {
      resultMap.set(pattern, [candidate]);
    }
  });

  resultMap.forEach(array => result.push(array));

  return result;
};
