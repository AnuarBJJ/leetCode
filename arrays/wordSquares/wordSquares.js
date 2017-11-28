/**
 * Given a set of words (without duplicates), find all word squares you can build from them.

A sequence of words forms a valid word square if the kth row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).

For example, the word sequence ["ball","area","lead","lady"] forms a word square because each word reads the same both horizontally and vertically.

b a l l
a r e a
l e a d
l a d y
Note:
There are at least 1 and at most 1000 words.
All words will have the exact same length.
Word length is at least 1 and at most 5.
Each word contains only lowercase English alphabet a-z.
Example 1:

Input:
["area","lead","wall","lady","ball"]

Output:
[
  [ "wall",
    "area",
    "lead",
    "lady"
  ],
  [ "ball",
    "area",
    "lead",
    "lady"
  ]
]

Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
Example 2:

Input:
["abat","baba","atan","atal"]

Output:
[
  [ "baba",
    "abat",
    "baba",
    "atan"
  ],
  [ "baba",
    "abat",
    "baba",
    "atal"
  ]
]

Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
 * @param {string[]} words
 * @return {string[][]}
 */

 /* slow solution
const validSquare = (arr, index) => {
    let runner = 0;
    let row = 0;
    let valid = true;

    while (runner < index && row < index) {
        if (arr[row][runner] !== arr[runner][row]) {
            return false;
        }
        runner += 1;
        if (runner === index) {
            row += 1;
            runner = row;
        }
    }

    return true;
}
var wordSquares = function (words) {
    const helper = {};
    const solution = [];
    const result = [];

    // let level = 0;
    words.forEach(word => {
        let key = '';
        word.split(char => {
            key += char;
            if (!helper[key]) {
                helper[key] = [];
            }
            helper[key].push(word);
        });
    })

        (function innerRecursion() {
            // level += 1;

            for (let i = 0; i < words.length; i += 1) {
                if (solution.length === words[0].length) {
                    result.push(solution.slice());
                    break;
                } else {
                    // if (!inSquare.hasOwnProperty(words[i])){
                    solution.push(words[i]);
                    // inSquare[words[i]] = words[i];


                    if (validSquare(solution, solution.length)) {
                        innerRecursion();
                    }

                    // delete inSquare[words[i]];
                    solution.pop();

                    // }              
                }
            }

            // level -= 1;
        })();

    return result;
};
*/

const buildSearch = (arr) => {
    let query = '';
    let column = arr.length;

    for (let i = 0; i < arr.length; i += 1) {
        query += arr[i][column];
    }

    return query;
}


var wordSquares = function (words) {
    const helper = {};
    const solution = [];
    const result = [];

    words.forEach(word => {
        let key = '';
        word.split('').forEach(char => {
            key += char;
            if (!helper[key]) {
                helper[key] = [];
            }
            helper[key].push(word);
        });
    })

    function recursion(word) {
        solution.push(word);

        if (solution.length === word.length) {

            result.push(solution.slice());
        } else {
            let searched = buildSearch(solution);

            if (helper[searched]) {
                helper[searched].forEach(candidate => {
                    recursion(candidate);
                })
            }
        }

        solution.pop();
    }

    for (let i = 0; i < words.length; i += 1) {
        recursion(words[i]);
    }

    return result;
};