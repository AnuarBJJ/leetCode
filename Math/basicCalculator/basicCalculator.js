/**
 * 
 * Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

You may assume that the given expression is always valid.

Some examples:
"1 + 1" = 2
" 2-1 + 2 " = 3
"(1+(4+5+2)-3)+(6+8)" = 23
Note: Do not use the eval built-in library function.
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {

    return (function recursive(start, end) {
        const stackOfParenthesisIndices = [];
        const stackOfNumbers = [];
        const opening = '(';
        const closing = ')';
        let sign = 1;

        for (let i = start; i < end; i += 1) {

            if (s[i] === opening) {
                stackOfParenthesisIndices.push(i);
            } else if (s[i] === closing) {
                let start = stackOfParenthesisIndices.pop();
                if (stackOfParenthesisIndices.length === 0) {
                    let sub = recursive(start + 1, i);
                    stackOfNumbers.push(sub * sign);
                    sign = 1;

                }

            } else if (stackOfParenthesisIndices.length === 0) {
                if (s[i] !== ' ' && !isNaN(+s[i])) {
                    let numString = '';
                    while (!isNaN(+s[i])) {
                        numString += s[i];
                        i += 1;
                    }
                    stackOfNumbers.push(parseInt(numString) * sign);
                    sign = 1;
                    i -= 1;
                } else if (s[i] === '-') {
                    sign = -1;
                } else if (s[i] === '+') {
                    sign = 1;
                }
            }
        }

        const subres = stackOfNumbers.reduce((soFar, num) => soFar += +num, 0);

        return subres;
    })(0, s.length);
};