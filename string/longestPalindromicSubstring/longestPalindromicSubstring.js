/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
*/

var longestPalindrome = function(s) {
    let matrix = [];
    let firstRow = [];
    let longest = 0;
    let x = 0;
    let y = 0;

    for(let k=0; k<=s.length; k++){
        firstRow.push(0);
    }

    matrix.push(firstRow);


    let j = s.length;

    while(j>0){
      let row = [0];
         for(let i=0; i<=s.length; i++){

            if(s.charAt(i) === s.charAt(j-1)){
              console.log("found " + s.charAt(i) + ' at ' + i + ', ' + j)
                row[i] = matrix[s.length-j][i-1] + 1;
                if(row[i] > longest){
                    longest = row[i];
                    x = s.length-j;
                    y = i;
                }
            } else {
                row[i] = 0;
            }
        matrix.push(row);
      console.log("Pushing to the matrix " + row)
      }
      j--;
    }


  console.log(matrix)

    let result = '';
    while(matrix[x][y] !== 0){
        result += s.charAt(y-1);
      console.log(s.charAt(y-1));
        x --;
        y --;
    }
    return result;
};
