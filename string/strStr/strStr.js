/*
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let haystackRunner = 0;
    let needleRunner = 0;

    while(haystackRunner < haystack.length && needleRunner < needle.length){
        if( haystack.charAt(haystackRunner) === needle.charAt(needleRunner) ){
            let anotherHaystackRunner = haystackRunner;
            while( haystack.charAt(anotherHaystackRunner) === needle.charAt(needleRunner) && needleRunner < needle.length ){
                anotherHaystackRunner++;
                needleRunner++;
            }
            if( needleRunner < needle.length ){
                return haystackRunner;
            }
            needleRunner = 0;
        }
        haystackRunner++;
    }
    return -1;
};
