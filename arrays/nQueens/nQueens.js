/*
The n-queens puzzle is the problem of placing n queens
on an n×n chessboard such that no two queens attack each other.\

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement,
where 'Q' and '.' both indicate a queen and an empty space respectively.

For example,
There exist two distinct solutions to the 4-queens puzzle:

[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    const board = [];



    for(let i=0; i<n; i++){
      let t = [];
      for(let j=0; j<n; j++){
        t.push('.');
      }
      board.push(t);
    }

    const valid = function(r,c){
        let row = r;
        let col = c;
        while(col>0){
            col--;
            if(board[r][col] === 'Q'){
                return false;
            }
        }
        while(row>0){
            row--;
            if(board[row][c]==='Q'){
                return false;
            }
        }
        row = r;
        col = c;
        while(row>0 && col>0){
            row--;
            col--;
            if(board[row][col]==='Q'){
                return false;
            }
        }
        row = r;
        col = c;
        while(row>0 && col<n){
            row--;
            col++;
            if(board[row][col]==='Q'){
                return false;
            }
        }
        return true;
    };

    const putQueen = function(row){
        if(row>n-1){
            let solution = [];
            board.forEach( (row) => {
              let solRow = ''
                row.forEach( p => {
                    if(p!=='Q'){
                        solRow += '.';
                    }else {
                        solRow += 'Q';
                    }
                });
                solution.push(solRow);
            });
            return result.push(solution);
        }
        for(let col=0; col<n; col++){
            if(valid(row, col)){
                board[row][col] = 'Q';
                putQueen(row+1);
                board[row][col] = 'e';
            }

        }
    };

    putQueen(0);

    return result;
};
