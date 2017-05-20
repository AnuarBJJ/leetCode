/*
Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.

The input string does not contain leading or trailing spaces and the words are always separated by a single space.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Could you do it in-place without allocating extra space?
*/

/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {
    if(str===null||str.length===0) {
        return;
    }

    var start=0;
    for(var i=0;i<str.length;i++) {
        if(str[i]===' '){
            reverseWord(str,start,i-1);
            start=i+1;
        }
    }

    reverseWord(str,start,str.length-1);
    reverseWord(str,0,str.length-1);

};


var reverseWord = function (str, start, end) {
    var i=start;
    var j=end;
    while(i<j) {
        var temp=str[i];
        str[i]=str[j];
        str[j]=temp;
        i++;
        j--;
    }
};
