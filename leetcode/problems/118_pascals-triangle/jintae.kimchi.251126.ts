/**
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * 모의 인터뷰에 다시 등장. 조금 더 간결한 코드로 품
 */

function generate(numRows: number): number[][] {
  const ans: number[][] = [[1]];

  for (let i = 1; i < numRows; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      row.push(ans[i - 1][j - 1] + ans[i - 1][j]);
    }
    row.push(1);
    ans.push(row);
  }
  return ans;
}
