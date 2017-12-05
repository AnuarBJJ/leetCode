/**
 * @param {character[][]} matrix
 * @return {number}
 */

const qualifies = (i, j, arr) => {
    let left = arr[i - 1] && arr[i - 1][j];
    let top = arr[i][j - 1];
    let diagonal = arr[i - 1] && arr[i - 1][j - 1];
    return !!(parseInt(left) && parseInt(top) && parseInt(diagonal)) ?
        Math.min(parseInt(left), parseInt(top), parseInt(diagonal)) + 1 : 1;
}

var maximalSquare = function (matrix) {
    if (!matrix.length || !matrix[0].length) {
        return 0;
    }
    const numOfRows = matrix.length;
    const numOfColumns = matrix[0].length;
    let result = 0;

    matrix[0].forEach((num, index) => {
        if (num === '1') {
            matrix[0][index] = 1;
            result = 1;
        }
    });

    for (let i = 1; i < numOfRows; i += 1) {
        for (let j = 0; j <= numOfColumns; j += 1) {
            if (parseInt(matrix[i][j]) && qualifies(i, j, matrix)) {
                matrix[i][j] = qualifies(i, j, matrix);
                if (matrix[i][j] > result) {
                    result = matrix[i][j];
                }
            }
        }
    }

    return result ** 2;
};