/**
 * https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/description/
 * easy
 *
 * 모든 행/열의 값이 1~n 까지 들어 있는지 검사
 *
 * 전략
 * n * n 의 탐색을 진행할 것 같음. 한번에 가로 세로 검색하여 효율성 챙기기
 * 모든 값이 있는 건 어떻게 암?
 * 값이 1 ~ n 범위 안인지 검사 후 set에 추가
 * set 에 중복 있으면 바로 실패 없으면 해당 행 성공
 * set 보다 적합한 중복 방지 매커니즘이 있을까?
 *
 * 풀이 시간 10분
 */
function checkValid(matrix: number[][]): boolean {
  const n = matrix.length;
  for (let r = 0; r < n; r++) {
    const rowSet = new Set<number>();
    const colSet = new Set<number>();
    for (let c = 0; c < n; c++) {
      // row
      const rowValue = matrix[r][c];
      if (rowValue < 1 || n < rowValue) return false;
      if (rowSet.has(rowValue)) return false;
      rowSet.add(rowValue);

      // col
      const colValue = matrix[c][r];
      if (colValue < 1 || n < colValue) return false;
      if (colSet.has(colValue)) return false;
      colSet.add(colValue);
    }
  }
  return true;
}
