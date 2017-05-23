/*
Write a function to find the longest common prefix string amongst an array of strings.
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs||strs.length<=0) return "";
    var CommonStr = "";
    strs.sort();
    var a = strs[0];
    var b = strs[strs.length-1];
    for(var i=0;i<a.length;i++){
        if(a.charAt(i)==b.charAt(i)){
            CommonStr+=a.charAt(i)
        }else{
            break;
        }
    }
    return CommonStr;
};
