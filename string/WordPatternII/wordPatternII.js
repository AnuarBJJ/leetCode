/**
 * Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.

Examples:
pattern = "abab", str = "redblueredblue" should return true.
pattern = "aaaa", str = "asdasdasdasd" should return true.
pattern = "aabb", str = "xyzabcxzyabc" should return false.
Notes:
You may assume both pattern and str contains only lowercase letters.
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

const Match = (
  pattern,
  str,
  indexOfPattern,
  indexOfStr,
  mapOfCharacters,
  taken,
) => {
  if (pattern.length === indexOfPattern && str.length === indexOfStr)
    return true;
  const characterInPattern = pattern[indexOfPattern];

  if (mapOfCharacters.has(characterInPattern)) {
    // if in the map

    const patternMappedToStr = mapOfCharacters.get(characterInPattern);

    if (!str.startsWith(patternMappedToStr, indexOfStr)) {
      return false;
    }
    if (indexOfPattern < pattern.length) {
      return Match(
        pattern,
        str,
        ++indexOfPattern,
        indexOfStr + patternMappedToStr.length,
        mapOfCharacters,
        taken,
      );
    } else {
      return true;
    }
  } else {
    // if not in the map
    let candidate = '';
    for (let i = indexOfStr; i < str.length; i += 1) {
      candidate += str[i];

      if (taken.has(candidate)) {
        continue;
      }
      mapOfCharacters.set(characterInPattern, candidate);

      taken.add(candidate);

      if (
        Match(pattern, str, ++indexOfPattern, i + 1, mapOfCharacters, taken)
      ) {
        return true;
      }

      --indexOfPattern;
      taken.delete(candidate);
      mapOfCharacters.delete(characterInPattern);
    }
  }
  return false;
};

var wordPatternMatch = function(pattern, str) {
  const mapOfCharacters = new Map();
  const taken = new Set();
  return Match(pattern, str, 0, 0, mapOfCharacters, taken);
};
