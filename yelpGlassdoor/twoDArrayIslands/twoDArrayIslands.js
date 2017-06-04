/*
Given a 2D array, where there are 0s and 1s (1 representing   island) count how many islands are there,
for example, [[0,1,1], [1,0,0], [0,1,0]] there are 3 islands there
(because in the first row 2 of 1s are connected so they created a bigger island.
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 1;

    for(let row of grid){
        if(typeof row === "string"){
            row = row.split('');
        }
    }

    const populateIslands = function(a, b, n){
        // upper vertical
        if(a > 0 && grid[a-1][b] === '1'){
            grid[a-1][b] = n;
            populateIslands(a-1, b, n);
        }
        // left horizontal
        if(b > 0 && grid[a][b-1] === '1'){
            grid[a][b-1] = n;
            populateIslands(a, b-1, n);
        }
        // right horizontal
        if(b+1 < grid[0].length && grid[a][b+1] === '1'){
            grid[a][b+1] = n;
            populateIslands(a, b+1, n);
        }
        // bottom vertical
        if(a+1 < grid.length && grid[a+1][b] === '1'){
            grid[a+1][b] = n;
            populateIslands(a+1, b, n);
        }
    };

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] === '1'){
                count++;
                grid[i][j] = count;
                populateIslands(i, j, count);
            }
        }
    }

    return count-1;
};
