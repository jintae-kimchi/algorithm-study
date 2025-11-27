/**
 * https://leetcode.com/problems/rotting-oranges/description/
 *
 * BFS 학습.
 * freshcount 사용하여 조건처리 하는 것이 팁
 */

function orangesRotting(grid: number[][]): number {
  const queue: number[][] = [];
  let freshCount = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      else if (grid[r][c] === 1) freshCount++;
    }
  }
  if (freshCount === 0) return 0;

  let time = -1;
  while (queue.length) {
    time++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift()!;
      [
        [x - 1, y],
        [x, y + 1],
        [x + 1, y],
        [x, y - 1],
      ].forEach(([x, y]) => {
        if (grid[x] && grid[x][y] === 1) {
          grid[x][y] = 2;
          freshCount--;
          queue.push([x, y]);
        }
      });
    }
  }

  if (freshCount > 0) return -1;
  return time;
}
