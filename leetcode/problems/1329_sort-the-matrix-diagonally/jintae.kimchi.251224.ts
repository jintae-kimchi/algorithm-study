/**
 * https://leetcode.com/problems/sort-the-matrix-diagonally/description/
 *
 * 모의 테스트로 품.
 * 셀 값의 크기가 작은 점(1~100)을 이용해 sort 대신 counting sort 방식도 써봄직함
 */

function diagonalSort(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  const map = new Map<number, number[]>();

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const idx = r - c;
      const val = map.get(idx) ?? [];
      val.push(mat[r][c]);
      map.set(idx, val);
    }
  }
  for (const val of map.values()) {
    val.sort((a, b) => b - a);
  }
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const idx = r - c;
      const val = map.get(idx) ?? [];
      mat[r][c] = val.pop()!;
    }
  }
  return mat;
}
