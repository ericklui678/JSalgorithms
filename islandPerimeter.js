var islandPerimeter = function(grid) {
  var perimeter = 0;
  for (var row = 0; row < grid.length; row++) {
    for (var col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        // check left, right, up, down squares from 1
        if (grid[row][col - 1] === 0 || grid[row][col - 1] === undefined) {
          // perimeter += 1
        }
        if (row === 0 || row === 3) {
          console.log('There is water');
          perimeter += 1
        }
      }
    }
  }
  console.log(perimeter);
};

var grid = [[0,1,0,0],
           [1,1,1,0],
           [0,1,0,0],
           [1,1,0,0]];

islandPerimeter(grid)
