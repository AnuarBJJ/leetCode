/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {

    if (word1.length === 0){
        return word2.length;
    } else if (word2.length === 0){
        return word1.length;
    }

    let DP = [[0, 0]];

    for (let i = 1; i < word1.length + 1; i += 1) {
        DP[0][i] = i;
    }

    for (let j = 1; j < word2.length + 1; j += 1) {
        if (!DP[j]) {
            DP[j] = [];
        }
        DP[j][0] = j;
    }

    let splittedFirst = word1.split('');
    let splittedSecond = word2.split('');

    splittedSecond.forEach((letterInRow, rowIndex) => {
        splittedFirst.forEach((letterInColumn, columnIndex) => {
            let increment = 1;
            if (letterInColumn === letterInRow) {
                DP[rowIndex + 1][columnIndex + 1] = DP[rowIndex][columnIndex];
            } else {
                DP[rowIndex + 1][columnIndex + 1] = Math.min(DP[rowIndex + 1][columnIndex], DP[rowIndex][columnIndex + 1], DP[rowIndex][columnIndex]) + 1;
            }

        })
    })
    return DP[word2.length][word1.length];
};