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
