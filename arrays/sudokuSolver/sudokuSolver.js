/**
 * Write a program to solve a Sudoku puzzle by filling the empty cells.

Empty cells are indicated by the character '.'.

You may assume that there will be only one unique solution.


A sudoku puzzle...


...and its solution numbers marked in red.
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const getPossibleOptions = (board, rowIndex, columnIndex) => {
  const candidates = [];

  for (let candidate = 1; candidate < 10; candidate += 1) {
    let conflict = false;
    for (let i = 0; i < 9; i += 1) {
      if (
        board[rowIndex][i] === candidate ||
        board[i][columnIndex] === candidate ||
        board[rowIndex - rowIndex % 3 + Math.floor(i / 3)][
          columnIndex - columnIndex % 3 + i % 3
        ] === candidate
      ) {
        conflict = true;
        break;
      }
    }
    if (!conflict) {
      candidates.push(candidate);
    }
  }

  return candidates;
};

var solveSudoku = function(board) {
  board.forEach((row, rowIndex) =>
    row.forEach(
      (num, columnIndex) =>
        (board[rowIndex][columnIndex] = num !== '.' ? parseInt(num) : num),
    ),
  );
  const recursiveBacktracking = () => {
    let row = -1;
    let column = -1;
    let candidates;
    let newCandidates;

    for (let i = 0; i < 9; i += 1) {
      for (let j = 0; j < 9; j += 1) {
        if (board[i][j] === '.') {
          newCandidates = getPossibleOptions(board, i, j);
          if (
            candidates === undefined ||
            newCandidates.length < candidates.length
          ) {
            candidates = newCandidates;
            row = i;
            column = j;
          }
        }
      }
    }

    if (candidates === undefined || candidates.length === undefined) {
      return true;
    }

    for (let k = 0; k < candidates.length; k += 1) {
      board[row][column] = candidates[k];
      if (recursiveBacktracking()) {
        return true;
      }
      board[row][column] = '.';
    }
  };
  recursiveBacktracking();
  board.forEach((row, rowIndex) =>
    row.forEach(
      (num, columnIndex) =>
        (board[rowIndex][columnIndex] = num !== '.' ? num.toString() : num),
    ),
  );
};
