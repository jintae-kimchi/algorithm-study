/**
 * https://leetcode.com/problems/surrounded-regions/description/
 *
 * 테두리만 탐색하면서 마킹하여 'O', 'X', 'V' 세 가지로 나눔
 * 만약 true/false 만 허용하는 배열로 강제하면 visitied 써야할 듯..
 */

/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const m = board.length;
  const n = board[0].length;

  const dfs = (x: number, y: number) => {
    if (!board[x]) return;
    if (!board[x][y]) return;
    if (board[x][y] !== "O") return;

    board[x][y] = "V";

    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x + 1, y);
    dfs(x, y - 1);
  };

  for (let c = 0; c < n; c++) {
    const top = 0;
    if (board[top][c] === "O") dfs(top, c);

    const bot = m - 1;
    if (board[bot][c] === "O") dfs(bot, c);
  }
  for (let r = 0; r < m; r++) {
    const left = 0;
    if (board[r][left] === "O") dfs(r, left);

    const right = n - 1;
    if (board[r][right] === "O") dfs(r, right);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
      if (board[i][j] === "V") board[i][j] = "O";
    }
  }
}
