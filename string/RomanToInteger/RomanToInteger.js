Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {string} s
 * @return {number}
 */
const Romans = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

var romanToInt = function(s) {
    let runner = 0;
    let currentChar = s.charAt(runner);
    let currentSum = 0;
    let result = 0;

    while( runner < s.length ){
        currentChar = s.charAt(runner);

        currentSum += Romans[s.charAt(runner)];

        runner ++;

        while ( s.charAt(runner) === currentChar ){
            currentSum += Romans[s.charAt(runner)];
            runner ++;
        }

        if( Romans[s.charAt(runner)] > Romans[currentChar] ){
            result -= currentSum;
        } else {
            result += currentSum;
        }

        currentSum = 0;

    }
    return result;
};
