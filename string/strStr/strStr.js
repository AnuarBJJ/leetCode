/*
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/*******************  naive solution ********************************

 var strStr = function(haystack, needle) {
     if( (haystack.length === 0 && needle.length === 0) ||  needle.length === 0){
         return 0;
     }



     for(let i=0; i<haystack.length; i++){
         if( haystack.length - i < needle.length ){
             return -1;
         }
         if( haystack.charAt(i) === needle.charAt(0) ){
             let haystackRunner = i;
             let needleRunner = 0;
             while( haystack.charAt(haystackRunner) === needle.charAt(needleRunner) && needleRunner < needle.length ){
                 haystackRunner++;
                 needleRunner++;
             }
             if( needleRunner === needle.length ){
                 return i;
             }
         }
     }
     return -1;
 };
*/
/***************** tricky solution  *****************
  works faster, but not what interviewers might expect

  var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
  }
  */
// KMP, baby!!

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const buildLongestProperSuffix = pattern => {
  const lpsArray = [0];
  let length = 0;
  let runner = 1;

  while (runner < pattern.length) {
    if (pattern[runner] === pattern[length]) {
      length += 1;
      lpsArray[runner] = length;
      runner += 1;
    } else {
      if (length === 0) {
        lpsArray[runner] = 0;
        runner += 1;
      } else {
        length = lpsArray[length - 1];
      }
    }
  }
  return lpsArray;
};

var strStr = function(haystack, needle) {
  if (!needle.length) return 0;

  const lps = buildLongestProperSuffix(needle);
  let needleRunner = 0;
  let haystackRunner = 0;

  while (haystackRunner < haystack.length) {
    if (haystack[haystackRunner] === needle[needleRunner]) {
      haystackRunner += 1;
      needleRunner += 1;
    } else {
      if (needleRunner !== 0) {
        needleRunner = lps[needleRunner - 1];
      } else {
        haystackRunner += 1;
      }
    }

    if (needleRunner === needle.length) {
      return haystackRunner - needleRunner;
    }
  }

  return -1;
};
