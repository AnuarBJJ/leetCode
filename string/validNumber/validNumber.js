/*
alidate if a given string is numeric.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    let r = 0;
    const n = s.length;

    let isNum = false;

    while(s.charAt(r) === ' '){
        r++;
    }
    if( (s.charAt(r) === '+' || s.charAt(r) === '-') && r<n){
        r++;
    }
    while(s.charCodeAt(r) > 47 && s.charCodeAt(r) < 58){
        r++;
        isNum = true;
    }
    if(s.charAt(r) === '.'){
        r++;
        while(s.charCodeAt(r) > 47 && s.charCodeAt(r) < 58){
            r++;
            isNum = true;
        }
    }
    if(isNum && r<n && s.charAt(r) === 'e' ){
        isNum = false;
        r++;
        if( (s.charAt(r) === '+' || s.charAt(r) === '-') && r<n){
            r++;
        }
        while(s.charCodeAt(r) > 47 && s.charCodeAt(r) < 58){
            r++;
            isNum = true;
        }
    }
    while(s.charAt(r) === ' '){
        r++;
    }
    return isNum && r === n;
};
