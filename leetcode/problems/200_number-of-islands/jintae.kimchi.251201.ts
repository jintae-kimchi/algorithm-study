/**
 * https://leetcode.com/problems/number-of-islands/
 */
function numIslands(grid: string[][]): number {
  let ans = 0;
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const dfs = (x: number, y: number) => {
    grid[x][y] = "0";
    dirs.forEach(([r, c]) => {
      if (grid[x + r] && grid[x + r][y + c] === "1") dfs(x + r, y + c);
    });
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        ans += 1;
        dfs(i, j);
      }
    }
  }
  return ans;
}
