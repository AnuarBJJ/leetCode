/**
 * Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    if (parseInt(Math.sqrt(n)) ** 2 === n) {
        return 1;
    }

    const results = [0, 1];
    const squares = [];

    let start = 1;

    while (start ** 2 <= n) {
        let square = start ** 2;
        squares.push(square);
        results[square] = 1;
        start += 1;
    }

    for (let i = 1; i <= n; i += 1) {
        if (results[i] === undefined) {
            results[i] = squares.reduce((soFar, num) => {
                if (num < i && results[i - num] + 1 < soFar) {
                    return results[i - num] + 1;
                } else {
                    return soFar;
                }
            }, Number.MAX_SAFE_INTEGER);
        }
    }

    return results[n];
};