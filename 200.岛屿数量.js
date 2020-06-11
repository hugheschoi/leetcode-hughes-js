/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
/*
  visited = set() 
  def dfs(node, visited):
      if node in visited: # terminator
        # already visited 
        return 
    visited.add(node) 
    # process current node here. 
    ...
    for next_node in node.children(): 
      if next_node not in visited: 
        dfs(next_node, visited)
      j
    i 1 1
      1 1   
      [i-1][j]
      [i+1][j]
      [i][j-1]
      [i][j+1] 
 */
var numIslands = function(grid) {
  let sum = 0
  if (grid.length === 0) return sum
  function dfs(i, j, m, n) {
  	if (i < 0 || j < 0 || i > m - 1 || j > n - 1 || grid[i][j] === '0') {
  		return
  	}
  	grid[i][j] = '0'
    dfs(i-1, j, m, n)
    dfs(i, j-1, m, n)
    dfs(i+1, j, m, n)
    dfs(i, j+1, m, n)
  }
  const [m, n] = [grid.length, grid[0].length]
  for (let i = 0; i < m; i++) {
  	for (let j = 0; j < n; j++) {
  		if (grid[i][j] === '1') {
        sum++
  			dfs(i, j, m, n)
  		}
  	}
  }
  return sum
};
// @lc code=end

