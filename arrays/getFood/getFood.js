/**
 * @param {character[][]} grid
 * @return {number}
 */
var searchAround = function(current, grid, v){
    // recursive function that returns number of steps to find food
    const up = grid[current[0]-1][current[1]];
    const down = grid[current[0]+1][current[1]];
    const right = grid[current[0]][current[1]+1];
    const left = grid[current[0]][current[1]-1];

    let upPath = -1;
    let downPath = -1;
    let rightPath = -1;
    let leftPath = -1;

    v[current] = true;


    if( up && up !== 'X' && !v[ [current[0]-1, current[1]] ] ){ // or up === 'O'
      if( up === '#' ){
            return 1;
        }
        else {
            upPath = searchAround( [current[0]-1, current[1] ], grid, v );
        }
    }

    if( down && down !== 'X' && !v[ [current[0]+1, current[1]] ]){
        if( down === '#' ){
            return 1;
        }
        else {
            downPath = searchAround( [current[0]+1, current[1]], grid, v);
        }
    }


    if( right && right !== 'X' && !v[ [current[0], current[1] +1] ]){
        if( right === '#' ){
            return 1;
        }
        else {
            rightPath = searchAround( [current[0], current[1]+1], grid, v );
        }
    }

    if( left && left !== 'X' && !v[ [current[0], current[1]-1] ]){
        if( left === '#' ){
            return 1;
        }
        else {
            leftPath = searchAround( [current[0], current[1]-1], grid, v);
        }
    }

    let helperArr = [];
    helperArr.push( upPath );
    helperArr.push( downPath );
    helperArr.push( rightPath );
    helperArr.push( leftPath );

    helperArr = helperArr.filter( n => n > 0 );


    if( helperArr.length === 0 ){
        return -1;
    }
    else {
        return Math.min.apply( null, helperArr ) + 1;
    }
};

var getFood = function(grid) {
    const location = [];

    for(let row = 0; row<grid.length; row++){
        for(let col = 0; col<grid[0].length; col++){
            if( grid[row][col] === '*'){
                location[0] = row;
                location[1] = col;
                break;
            }
        }
    }

    const visited = {};

    return searchAround( location, grid, visited );
};

const g = [
    ['X','X','X','X','X','X'],
    ['X','*','O','O','O','X'],
    ['X','O','O','#','O','X'],
    ['X','X','X','X','X','X']
]

console.log(getFood(g))
