/**
 * https://leetcode.com/problems/max-area-of-island/description/
 */
function maxAreaOfIsland(grid: number[][]): number {
  let maxLen = 0;
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const dfs = (x: number, y: number): number => {
    grid[x][y] = 2;
    let len = 1;
    dirs.forEach(([r, c]) => {
      const nx = x + r;
      const ny = y + c;
      if (grid[nx] && grid[nx][ny] === 1) {
        len += dfs(nx, ny);
      }
    });
    return len;
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        maxLen = Math.max(maxLen, dfs(i, j));
      }
    }
  }
  return maxLen;
}
