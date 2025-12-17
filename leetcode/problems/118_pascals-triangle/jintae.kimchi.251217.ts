/**
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * 모의 인터뷰
 */

function generate(numRows: number): number[][] {
  if (numRows === 1) return [[1]];

  const arr = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    const row = [1];
    const prevRow = arr[i - 1];
    for (let j = 0; j < prevRow.length - 1; j++) {
      row.push(prevRow[j] + prevRow[j + 1]);
    }
    row.push(1);
    arr.push(row);
  }

  return arr;
}
