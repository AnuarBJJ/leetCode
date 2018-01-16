/**
 * Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

For example,
S = "ADOBECODEBANC"
T = "ABC"
Minimum window is "BANC".

Note:
If there is no such window in S that covers all characters in T, return the empty string "".

If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let start = 0;
  let end = 0;
  let count = t.length;

  let shortestLength = Number.MAX_SAFE_INTEGER;
  let result = '';

  const charMap = new Map();

  for (let i = 0; i < t.length; i += 1) {
    charMap.has(t[i])
      ? charMap.set(t[i], charMap.get(t[i]) + 1)
      : charMap.set(t[i], 1);
  }

  while (end < s.length) {
    if (charMap.has(s[end])) {
      charMap.set(s[end], charMap.get(s[end]) - 1);

      if (charMap.get(s[end]) >= 0) {
        count -= 1;
      }
    }

    end += 1;

    while (count === 0) {
      if (end - start < shortestLength) {
        shortestLength = end - start;
        result = s.substring(start, end);
      }

      if (charMap.has(s[start])) {
        charMap.set(s[start], charMap.get(s[start]) + 1);
        if (charMap.get(s[start]) > 0) {
          count += 1;
        }
      }
      start += 1;
    }
  }

  return result;
};
