/**
 * https://leetcode.com/problems/height-checker/description/
 */

function heightChecker(heights: number[]): number {
  const sorted = heights.map((x) => x).sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) ans += 1;
  }
  return ans;
}
