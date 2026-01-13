/**
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * DP 연습문제
 *
 * DP 치곤 해법이 쉽지만 1(돌) 위치에 대한 테스트 케이스를 여러개 테스트 해보는 것이 중요함
 */

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[m - 1][n - 1] === 1) return 0;
  if (obstacleGrid[0][0]) return 0;
  const path: number[][] = Array.from({ length: m }, () =>
    new Array(n).fill(0)
  );
  path[0][0] = 1;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (r === 0 && c === 0) continue;
      if (obstacleGrid[r][c] === 1) {
        path[r][c] = 0;
        continue;
      }

      const top = r > 0 ? path[r - 1][c] : 0;
      const left = c > 0 ? path[r][c - 1] : 0;
      path[r][c] = top + left;
    }
  }

  return path[m - 1][n - 1];
}
