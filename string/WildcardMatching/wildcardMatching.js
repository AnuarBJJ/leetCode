/**
 * Implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters(including the empty sequence).

The matching should cover the entire input string(not partial).

The function prototype should be:
bool isMatch(const char * s, const char * p)

    Some examples:
    isMatch("aa", "a") → false
isMatch("aa", "aa") → true
isMatch("aaa", "aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let sRunner = 0;
    let pRunner = 0;
    let starAtIndex;
    let match;

    while (sRunner < s.length) {
        if (s[sRunner] === p[pRunner] || p[pRunner] === '?') {
            sRunner += 1;
            pRunner += 1;
        } else if (p[pRunner] === '*') {
            match = sRunner;
            starAtIndex = pRunner;
            pRunner += 1;
        } else if (starAtIndex !== undefined) {
            pRunner = starAtIndex + 1;

            sRunner = match + 1;
            match = sRunner;
        } else if (pRunner >= p.length) {
            return false;
        } else {
            return false;
        }
    }

    while (p[pRunner] === '*') {
        pRunner += 1;
    }

    return pRunner === p.length;
};