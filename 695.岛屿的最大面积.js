/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const rows = grid.length
  const cols = grid[0].length
  let maxArea = 0
  let num = 0
  var calNum = function(grid, i, j, rows, cols) {
    if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === 0)
        return;
    grid[i][j] = 0;
    num ++
    calNum(grid, i + 1, j, rows, cols);
    calNum(grid, i, j + 1, rows, cols);
    calNum(grid, i - 1, j, rows, cols);
    calNum(grid, i, j - 1, rows, cols);
 }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        num = 0;
        calNum(grid, i, j, rows, cols, 1)
        maxArea = num > maxArea ? num : maxArea
      }
    }
  }
  return maxArea
};
