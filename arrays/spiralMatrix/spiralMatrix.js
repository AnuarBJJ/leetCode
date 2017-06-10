/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length || !matrix[0].length){
        return [];
    }
    const res = [];

    const volume = matrix.length * matrix[0].length;

    let r = matrix[0].length-1;
    let d = matrix.length-1;
    let u = 0;
    let l = 0;

    var go = function(dir){
        if(res.length === volume){
            return;
        }
        switch(dir){
            case 'right':
                for(let i=l; i<= r; i++){
                    res.push(matrix[u][i]);
                }
                u++;
                go('down');
                break;
            case 'down':
                for(let i=u; i<= d; i++){
                    res.push(matrix[i][r]);
                }
                r--;
                go('left');
                break;
            case 'left':
                for(let i=r; i>= l; i--){
                    res.push(matrix[d][i]);
                }
                d--;
                go('up');
                break;
            case 'up':
                for(let i=d; i>= u; i--){
                    res.push(matrix[i][l]);
                }
                l++;
                go('right');
                break;
            default:
                console.log("error occured");
                return;
        }
    };

    go('right');

    return res;
};
