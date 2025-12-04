/**
 * https://leetcode.com/problems/word-search/description/
 *
 * DFS + Backtracking 주제의 Medium 끝판왕.
 * path 최적화, 방문기록 최적화, 검사-탐색 로직 모두 연습할 수 있음.
 */

function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;

  const backtrack = (idx: number, x: number, y: number): boolean => {
    // 인덱스 벗어남
    if (x < 0 || y < 0 || x >= m || y >= n) return false;
    // 방문기록 검사
    if (board[x][y] === "-") return false;
    // 길이 초과(안전장치)
    if (word.length < idx) return false;
    // 글자가 다른지 검사
    if (word[idx] !== board[x][y]) return false;
    // 길이가 맞는 수준까지 탐색되었으면 유효한 문자라고 판단
    if (word.length - 1 === idx) return true;

    // 방문기록
    const tmp = board[x][y];
    board[x][y] = "-";

    const valid =
      backtrack(idx + 1, x - 1, y) ||
      backtrack(idx + 1, x, y + 1) ||
      backtrack(idx + 1, x + 1, y) ||
      backtrack(idx + 1, x, y - 1);

    board[x][y] = tmp;

    return valid;
  };

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === word[0] && backtrack(0, r, c)) return true;
    }
  }
  return false;
}
