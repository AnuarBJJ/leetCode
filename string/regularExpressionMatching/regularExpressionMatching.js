/**
 * '.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// RECURSIVE !!!!
function isMatch(s, p) {
  if (p.length === 0) {
    return s.length === 0;
  }
  if (s === p) {
    return true;
  }

  const firstMatch = s.length > 0 && (s[0] === p[0] || p[0] === '.');

  if (p.length > 1 && p[1] === '*') {
    return (
      isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p))
    );
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
}
