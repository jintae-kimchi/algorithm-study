/**
 * https://leetcode.com/problems/01-matrix/description/
 *
 * 모의테스트(접근법은 맞았는데 실수 고치다가 미제출)
 * visited 사용하지 않고 배열값 조작(예를 들어 0은 큐에 넣고 나머지는 -1로 초기화)을 통해 최적화 가능
 */

function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;

  const visited = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => false)
  );
  const queue: number[][] = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (mat[r][c] === 0) {
        visited[r][c] = true;
        queue.push([r, c]);
      }
    }
  }
  let level = 0;
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift()!;
      mat[x][y] = level;
      dirs.forEach(([a, b]) => {
        const nx = x + a;
        const ny = y + b;
        if (mat[nx] && !visited[nx][ny] && mat[nx][ny] === 1) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      });
    }
    level++;
  }
  return mat;
}
