/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    const stack = [];

    for(let i=0; i<s.length; i++){
      if(pairs[s.charAt(i)]){
        let popped = stack.pop();
        if( pairs[s.charAt(i)] !== popped ){
          return false;
        }
      } else {
        stack.push( s.charAt(i) );
      }
    }

    return stack.length === 0;
};
