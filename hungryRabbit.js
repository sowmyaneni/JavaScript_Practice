// A very hungry rabbit is placed in the center of of a garden, represented by a rectangular N x M 2D matrix.
// The values of the matrix will represent numbers of carrots available to the rabbit in each square of the garden. If the garden does not have an exact center, the rabbit should start in the square closest to the center with the highest carrot count.
// On a given turn, the rabbit will eat the carrots available on the square that it is on, and then move up, down, left, or right, choosing the square that has the most carrots. If there are no carrots left on any of the adjacent squares, the rabbit will go to sleep. You may assume that the rabbit will never have to choose between two squares with the same number of carrots.
// Write a function which takes a garden matrix and returns the number of carrots the rabbit eats. You may assume the matrix is rectangular with at least 1 row and 1 column, and that it is populated with non-negative integers. For example,

// [[5, 7, 8, 6, 3],
//  [0, 0, 7, 0, 4],
//  [4, 6, 3, 4, 9],
//  [3, 1, 0, 5, 8]]
// Should return

// 27

function hungryRabbit(matrix) {
    var rows = matrix.length;
    var cols = matrix[0].length;

    var i , j; // find center
    var centers = [];
    
    var halfrow = Math.floor(rows/2)
    var halfcol = Math.floor(cols/2)
    if(rows % 2 !== 0 && cols %2 !== 0)
        centers = [[halfrow, halfcol]]
    else if (rows % 2 === 0 && cols % 2 !== 0)
        centers = [[halfrow, halfcol], [halfrow-1, halfcol]]
    else if (rows % 2 !== 0 && cols % 2 === 0)
        centers = [[halfrow, halfcol], [halfrow, halfcol-1]]
    else
        centers = [[halfrow, halfcol], [halfrow, halfcol-1], [halfrow-1, halfcol], [halfrow-1, halfcol-1]]

    //console.log(centers);
    var max = 0;
    for(var c = 0; c < centers.length; c ++) {
        //console.log(c)
        if(centers[c][0] < 0 || centers[c][0] >= rows)
            continue;
        if(centers[c][1] < 0 || centers[c][1] >= cols)
            continue;
        //console.log(max, matrix[centers[c][0]][centers[c][1]])
        if(matrix[centers[c][0]][centers[c][1]] > max) {
            max = matrix[centers[c][0]][centers[c][1]]
            i = centers[c][0]
            j = centers[c][1]
        }
    }
    //console.log("Found centers", i, j);

    var output = 0;
    while(true) {
        //console.log(i, j);
        output += matrix[i][j];
        matrix[i][j] = 0;

        var max = 0;
        var maxIdx = [i, j];

        if(i -1 >= 0 && matrix[i-1][j] > max) {
            max = matrix[i-1][j];
            maxIdx = [i -1, j];
        }
        if(i + 1 < rows && matrix[i+1][j] > max) {
            max = matrix[i+1][j];
            maxIdx = [i+1, j];
        }
        if(j - 1 >= 0 && matrix[i][j-1] > max) {
            max = matrix[i][j-1];
            maxIdx = [i, j-1];
        }
        if(j + 1 < cols && matrix[i][j+1] > max) {
            max = matrix[i][j+1];
            maxIdx = [i, j+1];
        }
        i = maxIdx[0];
        j = maxIdx[1];

        if(max === 0)
            return output;
    }
}

// console.log(hungryRabbit([[5, 7, 8, 6, 3], [0, 0, 7, 0, 4], [4, 6, 3, 4, 9], [3, 1, 0, 5, 8]]))
// console.log(hungryRabbit([[5]]))
// console.log(hungryRabbit([[5, 3]]))
console.log(hungryRabbit([[5, 7, 8, 6, 3], [0, 0, 0, 0, 4], [4, 6, 3, 4, 9], [3, 1, 0, 5, 8]]))