// Determine whether an integer is a palindrome. Do this without extra space.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0 || ( x%10 === 0 && x!==0 )){
        return false;
    }

    if(x<10){
        return true;
    }

    let res = 0;

    while(res<x){
        res = res*10 + x%10;
        x = Math.floor(x/10);
    }

    return res === x || Math.floor(res/10) === x;
};
