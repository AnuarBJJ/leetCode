/**
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let runner = digits.length - 1;
    let carryover = 0;

    if (digits[runner] === 9) {
        carryover = 1;
        digits[runner] = 0;
    } else {
        digits[runner] += 1;
    }
    runner--;

    while (carryover && runner >= 0) {

        if (digits[runner] === 9) {
            carryover = 1;
            digits[runner] = 0;
        } else {
            digits[runner] += 1;
            carryover = 0;
        }
        runner--;
    }

    if (carryover) {
        digits.unshift(1);
    }

    return digits;
};