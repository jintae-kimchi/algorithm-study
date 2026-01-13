/**
 * https://leetcode.com/problems/minimum-path-sum/description/
 *
 * DP 공부
 *
 * Infinity 와 undefined 검사 등으로 더럽게 짜서 인덱스 기반의 리펙토링 버전도 추가함
 */

function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      let top = Infinity;
      if (grid[r - 1] !== undefined) {
        top = grid[r - 1][c];
      }
      let left = Infinity;
      if (grid[r][c - 1] !== undefined) {
        left = grid[r][c - 1];
      }
      grid[r][c] +=
        top === Infinity && left === Infinity ? 0 : Math.min(top, left);
    }
  }

  return grid[m - 1][n - 1];
}

function minPathSum_refactored(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (r === 0 && c === 0) continue;
      if (r === 0) {
        grid[r][c] += grid[r][c - 1];
      } else if (c === 0) {
        grid[r][c] += grid[r - 1][c];
      } else {
        grid[r][c] = Math.min(grid[r][c - 1], grid[r - 1][c]);
      }
    }
  }

  return grid[m - 1][n - 1];
}
