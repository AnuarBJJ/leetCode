/*
Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Update (2015-02-12):
For C programmers: Try to solve it in-place in O(1) space.
*/

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    if(str === " " || str.length === 0){
      return '';
    }
    const arrOfWords = str.split(' ');

    let res = "";

    while(arrOfWords.length>1){
      const w = arrOfWords.pop();
      if(w !== ''){
          res += w + ' ';
      }
    }
    let lastW = arrOfWords.pop()
    if(lastW !== ''){
        res += lastW;
    }
    if(res.charAt(res.length -1) === ' '){
        res = res.slice(0, -1);
    }


    return res;
};
