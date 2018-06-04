/*
Create function that takes 3 arguments (bomb locations, num_rows, num_cols), return a 2D array representing minesweeper integers

EX: mine_sweeper([[0,0], [0,1]], 3, 4) ->
[
  [-1, -1, 1, 0],
  [2, 2, 1, 0],
  [0, 0, 0, 0],
]

Clarifying Questions:

1) Can bomb location array have duplicates?
- No

Logic:
1) Initialize 2D array of rows and cols set to all 0s
2) Loop through bomb 2d array
  a) Set location of grid for each bomb to -1
  b) Call separate function to increment adjacent cells of  the bomb
    i) For each adjacent cell to bomb
      - if row exists, cell value is not undefined, and is not a bomb
        - increment that cell
3) Return mine_grid
*/

const mine_sweeper = (bombs, rows, cols) => {
  const incrementCellsAdjacentToBomb = (mine_grid, bomb_row, bomb_col) => {
    for (let i = bomb_row - 1; i <= bomb_row + 1; i++) {
      for (let j = bomb_col - 1; j <= bomb_col + 1; j++) {
        if (
          mine_grid[i] &&
          typeof mine_grid[i][j] !== "undefined" &&
          mine_grid[i][j] !== -1
        ) {
          mine_grid[i][j]++;
        }
      }
    }
  };

  let mine_grid = [];

  // initialize 2d array filled with 0s
  for (let i = 0; i < rows; i++) {
    let mine_row = [];
    for (let j = 0; j < cols; j++) {
      mine_row.push(0);
    }
    mine_grid.push(mine_row);
  }

  for (let bomb of bombs) {
    let bomb_row = bomb[0];
    let bomb_col = bomb[1];
    mine_grid[bomb_row][bomb_col] = -1;
    incrementCellsAdjacentToBomb(mine_grid, bomb_row, bomb_col);
  }

  return mine_grid;
};

const bombs = [[0, 0], [1, 1], [1, 3], [2, 2]];
const num_rows = 3;
const num_cols = 4;
// console.log(mine_sweeper(bombs, num_rows, num_cols));

/*
Part 2: Given a minefield, if a user clicks on a cell with value 0, replace all 0s with -2 and return new array. Otherwise if user clicks on bomb or cell adjcent to bomb, return same array

Logic:
1) Since you are searching for all adjacent 0s in this array but don't know necesarily where it has been clicked, whenever you're searching, always think about DFS vs BFS.

2) In this worst case scenario, it would be a very large array with all 0s.
  a) If we used DFS for this example, we would have to traverse in a spiral / zig zag route through the array and store each position in a stack that would take
  Space O(n * m)
  Time: O(n * m) since worst case you would have to check every item in array

  b) If we used BFS, we would have to traverse at most the outer perimeter of the 2d array and store each position. Therefore...
  Space: O(2(n + m)) since that's the perimeter formula
  Time: O(n * m) since worst case you would have to check every item in array
*/

const click = (field, num_rows, num_cols, given_i, given_j) => {
  if (field[given_i] && field[given_i][given_j] !== 0) return field;

  let queue = [[given_i, given_j]];
  while (queue.length) {
    let curr_loc = queue.shift();
    let curr_row = curr_loc[0];
    let curr_col = curr_loc[1];

    if (field[curr_row][curr_col] === 0) {
      field[curr_row][curr_col] = -2;
      // add adjacent cells to queue if 0 value
      for (let i = curr_row - 1; i <= curr_row + 1; i++) {
        for (let j = curr_col - 1; j <= curr_col + 1; j++) {
          if (field[i] && field[i][j] === 0) {
            queue.push([i, j]);
          }
        }
      }
    }
  }
  return field;
};

const field = [[-1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, -1]];
console.log(click(field, field.length, field[0].length, 1, 2));
