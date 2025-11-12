/**
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * 점화식을 알려주고 시작하는 dp 문제
 */

function generate(numRows: number): number[][] {
  const ans: number[][] = [];
  for (let level = 0; level < numRows; level++) {
    if (level === 0) ans.push([1]);
    else if (level === 1) ans.push([1, 1]);
    else {
      const prevRow = ans[level - 1];
      const currentRow = [1];
      for (let i = 0; i < prevRow.length - 1; i++) {
        currentRow.push(prevRow[i] + prevRow[i + 1]);
      }
      currentRow.push(1);
      ans.push(currentRow);
    }
  }
  return ans;
}
